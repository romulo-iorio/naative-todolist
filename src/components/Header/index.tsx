import { Image, View } from "react-native";

import type { TaskData } from "@/types";

import { styles } from "./styles";
import { AddTaskButton } from "../AddTaskButton";
import { Input } from "../Input";
import { useState } from "react";

const logoSrc = require("../../assets/images/Logo.png");

interface Props {
  handleAddTask: (newTaskText: string) => void;
}

export const Header: React.FC<Props> = ({ handleAddTask }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const onPress = () => {
    handleAddTask(newTaskText);
    setNewTaskText("");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoSrc} />

      <View style={styles.inputContainer}>
        <Input
          placeholder="Adicione uma nova tarefa"
          onChangeText={setNewTaskText}
          value={newTaskText}
        />

        <AddTaskButton onPress={onPress} disabled={!newTaskText} />
      </View>
    </View>
  );
};
