import { Image, View } from "react-native";

import type { TaskData } from "@/types";

import { styles } from "./styles";
import { AddTaskButton } from "../AddTaskButton";
import { Input } from "../Input";

const logoSrc = require("../../assets/images/Logo.png");

interface Props {
  tasks: TaskData[];
}

export const Header: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoSrc} />

      <View style={styles.inputContainer}>
        <Input />

        <AddTaskButton onPress={() => {}} />
      </View>
    </View>
  );
};
