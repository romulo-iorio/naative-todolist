import type { TextInputProps } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";

import { globalStyles } from "@/global-styles";
import { styles } from "./styles";

export const Input: React.FC<TextInputProps> = ({ ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const style = isFocused ? styles.focused : styles.base;

  return (
    <TextInput
      {...props}
      placeholderTextColor={globalStyles.colors.gray[300]}
      placeholder="Adicione uma nova tarefa"
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      style={style}
    />
  );
};
