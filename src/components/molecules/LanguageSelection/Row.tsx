import { memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { AppIcon } from "@/components/atoms";
import { useTheme } from "@/theme";
import { languageNames } from "@/translations";

function Row({
  isSelected,
  item,
  onPress,
}: {
  isSelected: boolean;
  item: string;
  onPress: () => void;
}) {
  const { layout, gutters, fonts, components } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[
        layout.row,
        layout.justifyBetween,
        layout.fullWidth,
        gutters.paddingHorizontal_24,
      ]}>
      <Text
        style={[
          fonts.size_14,
          fonts.gray50,
          gutters.paddingVertical_12,
          gutters.paddingHorizontal_16,
        ]}>
        {languageNames[item]}
      </Text>
      {isSelected ? <AppIcon name="Check" size={32} /> : <View />}
    </TouchableOpacity>
  );
}

export default memo(Row);
