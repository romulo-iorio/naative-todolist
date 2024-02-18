import { Image, View } from "react-native";
import { useState } from "react";

import { AddTaskButton } from "../AddTaskButton";
import { styles } from "./styles";
import { Input } from "../Input";

const logoSrc = require("../../assets/images/Logo.png");

interface Props {
  handleAddTask: (newTaskText: string) => void;
}

export const Header: React.FC<Props> = ({ handleAddTask: addTaskHandler }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    addTaskHandler(newTaskText);
    setNewTaskText("");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoSrc} />

      <View style={styles.inputContainer}>
        <Input
          placeholder="Adicione uma nova tarefa"
          onChangeText={setNewTaskText}
          onEndEditing={handleAddTask}
          value={newTaskText}
        />

        <AddTaskButton onPress={handleAddTask} disabled={!newTaskText} />
      </View>
    </View>
  );
};
