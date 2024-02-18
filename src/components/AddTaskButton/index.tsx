import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

import { globalStyles } from "@/global-styles";

import { styles } from "./styles";

interface Props {
  onPress: () => void;
}

export const AddTaskButton: React.FC<Props> = ({ onPress }) => {
  const [isFocused, setIsFocused] = useState(false);

  const styleKey = isFocused ? "focused" : "base";
  const style = styles[styleKey];

  return (
    <TouchableOpacity
      onPressOut={() => setIsFocused(false)}
      onPressIn={() => setIsFocused(true)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={style.container}
      onPress={onPress}
    >
      <Feather
        color={globalStyles.colors.gray[100]}
        name="plus-circle"
        size={14}
      />
    </TouchableOpacity>
  );
};
