import { Image, Text, View } from "react-native";

import type { TaskData } from "@/types";

import { styles } from "./styles";

interface Props {
  tasks: TaskData[];
}

interface TaskStatusProps {
  textStyle: any;
  count: number;
  text: string;
}

export const TasksStatus: React.FC<Props> = ({ tasks }) => {
  const completedTasksCount = tasks.filter((task) => task.isDone).length;

  const taskStatus: TaskStatusProps[] = [
    {
      textStyle: styles.text,
      count: tasks.length,
      text: "Criadas",
    },
    {
      textStyle: styles.completedText,
      count: completedTasksCount,
      text: "Concluídas",
    },
  ];

  const renderTaskStatus = taskStatus.map((status) => (
    <View style={styles.statusContainer} key={status.text}>
      <Text style={status.textStyle}>{status.text}</Text>
      <Text style={styles.count}>{status.count}</Text>
    </View>
  ));

  return <View style={styles.container}>{renderTaskStatus}</View>;
};
