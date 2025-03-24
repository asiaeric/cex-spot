import { Pressable, View } from "react-native";

import { AppIcon } from "..";

import { useAppNavigation } from "@/navigators/Application";
import { useTheme } from "@/theme";

interface Props {
  isAbsolute?: boolean;
}

function BackButton({ isAbsolute }: Props) {
  const navigation = useAppNavigation();
  const { layout, colors } = useTheme();

  return (
    <View
      style={
        isAbsolute && [
          layout.absolute,
          layout.left32,
          layout.top68,
          layout.z100,
        ]
      }>
      <Pressable onPress={() => navigation.goBack()}>
        <AppIcon name={"ChevronLeft"} size={32} color={colors.gray200} />
      </Pressable>
    </View>
  );
}

export default BackButton;
