import { LucideIcon } from "lucide-react-native";
import React from "react";

import { useTheme } from "@/theme";
import { moderateScale } from "@/types/theme/responsive";

interface AppIconProps {
  name: string;
  size?: number;
  color?: string;
}

const AppIcon: React.FC<AppIconProps> = ({ name, size = 24, color }) => {
  const { colors } = useTheme();
  const Icon = require("lucide-react-native")[name] as LucideIcon;
  return <Icon size={moderateScale(size)} color={color || colors.text} />;
};

export default AppIcon;
