import { Text, TouchableOpacity, View } from "react-native";

import type { TaskData } from "@/types";

import { Checkbox } from "../Checkbox";
import { styles } from "./styles";
import { DeleteButton } from "../DeleteButton";

interface Props {
  onChangeTaskCompletionState: (task: TaskData) => void;
  onRemoveTask: (id: string) => void;
  task: TaskData;
}

export const Task: React.FC<Props> = ({
  onChangeTaskCompletionState,
  onRemoveTask,
  task,
}) => {
  const styleKey = !task.isDone ? "isDone" : "base";
  const style = styles[styleKey];

  return (
    <TouchableOpacity
      onPress={() => onChangeTaskCompletionState(task)}
      style={style.container}
    >
      <Checkbox isDone={task.isDone} />

      <Text style={style.text}>{task.title}</Text>

      <DeleteButton onPress={() => onRemoveTask(task.id)} />
    </TouchableOpacity>
  );
};
