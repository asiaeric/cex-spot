import { format } from "date-fns";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { WebView } from "react-native-webview";

import { CHART_TIMELINE } from "@/constants";
import { DATE_FORMATS } from "@/constants/dateFormats";
import { useChartSubscription } from "@/hooks/useChartSubscription";
import { fetchChartHistory } from "@/services/chart";
import { useStoreActions, useStoreState } from "@/stores/hooks";
import { CandlestickData, ChartLabelTimeline } from "@/types";

const WebViewChart = () => {
  const { t } = useTranslation(["cex-spot/common"]);
  const webViewRef = useRef<WebView>(null);
  const [chartReady, setChartReady] = useState(false);
  const { currentPair } = useStoreState((state) => state.tradingPairModel);
  const { currentTimeQuery } = useStoreState((state) => state.chartModel);
  const { getChartHistory, resetCurrentTimeQuery } = useStoreActions(
    (state) => state.chartModel,
  );
  const [time, setTime] = useState<ChartLabelTimeline>(CHART_TIMELINE[0]);
  const { chartData } = useStoreState((state) => state.chartModel);

  useChartSubscription({
    chartStatus: chartReady,
    code: currentPair?.code || "",
    interval: time.id,
    action: (data: CandlestickData) => onHandleMessage(data),
  });

  useEffect(() => {
    getChartHistory({
      symbol: currentPair?.code || "",
      limit: 300,
      interval: time.id,
      toDate: currentTimeQuery,
    });
  }, [currentPair, time]);

  useEffect(() => {
    if (chartReady && webViewRef.current && chartData.length > 0) {
      webViewRef.current.injectJavaScript(`
        (function() {
          try {
            if (window.setInitialData) {
              console.log("📊 Setting Initial Chart Data...");
              window.setInitialData(${JSON.stringify(chartData)});
            } else {
              console.error("❌ window.setInitialData is undefined!");
            }
          } catch (error) {
            console.error("🚨 WebView Error in setInitialData:", error);
          }
        })();
      `);
    }
  }, [chartReady, chartData]);

  const handleLoadMoreData = async () => {
    if (!currentPair?.code) return;

    try {
      const moreData = await fetchChartHistory({
        symbol: currentPair.code,
        limit: 100,
        interval: time.id,
        toDate: format(new Date(chartData[0].time), DATE_FORMATS.DATE_TIME),
      });

      if (moreData.length > 0) {
        console.log("📡 Prepending historical data...");
        webViewRef.current?.injectJavaScript(`
          (function() {
            try {
              if (window.setInitialData) {
                const existingData = ${JSON.stringify(chartData)};
                const newData = ${JSON.stringify(moreData)};
                window.setInitialData([...newData, ...existingData]);
              }
            } catch (error) {
              console.error("🚨 WebView Error in loadMoreData:", error);
            }
          })();
        `);
      }
    } catch (error) {
      console.error("❌ Failed to load more data:", error);
    }
  };

  const onWebViewMessage = useCallback(
    (event) => {
      try {
        const message = event.nativeEvent.data;
        console.log("📩 WebView Message Received:", message);

        let parsedMessage;
        try {
          parsedMessage = JSON.parse(message);
        } catch (e) {
          parsedMessage = message;
        }

        if (parsedMessage === "chartReady") {
          console.log("✅ Chart is Ready");
          setChartReady(true);
        } else if (parsedMessage === "loadMore") {
          console.log("📡 Loading more historical data...");
          handleLoadMoreData();
        } else {
          console.warn("⚠️ Unrecognized message:", parsedMessage);
        }
      } catch (error) {
        console.error("❌ Error handling WebView message:", error);
      }
    },
    [setChartReady, handleLoadMoreData],
  );

  const onHandleMessage = (data: CandlestickData) => {
    if (chartReady && webViewRef.current) {
      webViewRef.current.injectJavaScript(`
        (function() {
          try {
            if (window.updateChart) {
              window.updateChart(${JSON.stringify(data)});
            } else {
              console.error("❌ window.updateChart is undefined!");
            }
          } catch (error) {
            console.error("🚨 WebView Error in updateChart:", error);
          }
        })();
      `);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ width: "100%", height: 400 }}
        ref={webViewRef}
        originWhitelist={["*"]}
        source={{ html: chartHTML }}
        onMessage={onWebViewMessage}
        javaScriptEnabled
      />
    </View>
  );
};

// ✅ Corrected Chart HTML with Historical Data Handling
const chartHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.com/lightweight-charts@3.8.0/dist/lightweight-charts.standalone.production.js"></script>
  <title>Lightweight Charts</title>
</head>
<body style="margin:0; background-color: black;">
  <div id="chart" style="width: 100vw; height: 100vh;"></div>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      try {
        console.log("🔄 Creating Chart...");
        const chartContainer = document.getElementById('chart');
        const chart = LightweightCharts.createChart(chartContainer, {
          width: chartContainer.clientWidth,
          height: chartContainer.clientHeight,
          layout: { background: { type: 'solid', color: '#000' }, textColor: '#ffffff' },
          grid: {
            vertLines: { color: 'rgba(255,255,255,0.1)' },
            horzLines: { color: 'rgba(255,255,255,0.1)' },
          },
        });

        const series = chart.addCandlestickSeries();

        window.setInitialData = function (data) {
          console.log("📊 Setting Initial Data:", data);
          series.setData(data);
        };

        window.updateChart = function (newData) {
          console.log("📊 WebView received new data:", newData);
          series.update(newData);
        };

        chart.timeScale().subscribeVisibleTimeRangeChange((timeRange) => {
          if (timeRange && (!window.lastTime || timeRange.from < window.lastTime)) {
            window.lastTime = timeRange.from;
            window.ReactNativeWebView.postMessage("loadMore");
          }
        });

        window.ReactNativeWebView.postMessage('chartReady');
      } catch (err) {
        console.error("🚨 Chart Initialization Error:", err);
      }
    });
  </script>
</body>
</html>
`;

export default WebViewChart;
