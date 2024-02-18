import type { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

import { globalStyles } from "@/global-styles";

import { styles } from "./styles";

const getStyleKey = (isFocused: boolean, isDisabled = false) => {
  if (isDisabled) return "disabled";
  if (isFocused) return "focused";
  return "base";
};

export const AddTaskButton: React.FC<TouchableOpacityProps> = ({
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const styleKey = getStyleKey(isFocused, props.disabled);
  const style = styles[styleKey];

  return (
    <TouchableOpacity
      onPressOut={() => setIsFocused(false)}
      onPressIn={() => setIsFocused(true)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={style.container}
      {...props}
    >
      <Feather
        color={globalStyles.colors.gray[100]}
        name="plus-circle"
        size={14}
      />
    </TouchableOpacity>
  );
};
