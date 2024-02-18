import { Text, TouchableOpacity, View } from "react-native";

import type { TaskData } from "@/types";

import { DeleteTaskButton } from "../DeleteTaskButton";
import { Checkbox } from "../Checkbox";
import { styles } from "./styles";

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
  const styleKey = task.isDone ? "isDone" : "base";
  const style = styles[styleKey];

  return (
    <TouchableOpacity
      onPress={() => onChangeTaskCompletionState(task)}
      style={style.container}
    >
      <Checkbox isDone={task.isDone} />

      <Text style={style.text}>{task.title}</Text>

      <DeleteTaskButton onPress={() => onRemoveTask(task.id)} />
    </TouchableOpacity>
  );
};
