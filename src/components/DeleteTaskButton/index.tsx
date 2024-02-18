import type { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

import { globalStyles } from "@/global-styles";

import { styles } from "./styles";

interface Props {
  onPress: () => void;
}

export const DeleteTaskButton: React.FC<Props> = ({ onPress }) => {
  const [isFocused, setIsFocused] = useState(false);

  const styleKey = isFocused ? "focused" : "base";
  const style = styles[styleKey];

  const iconColor = isFocused
    ? globalStyles.colors.danger
    : globalStyles.colors.gray[300];

  const handlePress = (e: GestureResponderEvent) => {
    e.stopPropagation();

    onPress();
  };

  return (
    <TouchableOpacity
      onPressOut={() => setIsFocused(false)}
      onPressIn={() => setIsFocused(true)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={style.container}
      onPress={handlePress}
    >
      <Feather color={iconColor} name="trash-2" size={14} />
    </TouchableOpacity>
  );
};
