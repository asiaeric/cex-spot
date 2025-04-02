function orderBookTopic(code: string): string {
  return `${code}@depth`;
}

function tradeMarket(code: string): string {
  return `${code}@trade`;
}

function chartTopic({
  code,
  interval,
}: {
  code: string;
  interval: string;
}): string {
  return `${code}@kline_${interval}`;
}

function statistic(code: string): string {
  return `${code}@miniTicker`;
}

function userOrders(): string {
  return `userData`;
}

function userLogin(jwt: string): string {
  return `${jwt}`;
}

const TopicHelper = {
  orderBookTopic,
  chartTopic,
  statistic,
  tradeMarket,
  userOrders,
  userLogin,
};

export default TopicHelper;
