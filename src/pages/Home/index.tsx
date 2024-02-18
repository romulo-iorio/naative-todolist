import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { FlatList, StatusBar, Text, View } from "react-native";
import { useState } from "react";

import type { TaskData } from "@/types";
import { TasksStatus } from "@/components/TasksStatus";
import { Header, Task, Loading } from "@/components";

import { styles } from "./styles";

const exampleTask: TaskData = {
  id: "1",
  title:
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  isDone: false,
};

export const Home = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  const [tasks, setTasks] = useState<TaskData[]>([exampleTask]);

  const handleTaskCompletionStateChange = (task: TaskData) => {
    setTasks((prevTask) => {
      return prevTask.map((prevTask) => {
        if (prevTask.id !== task.id) return prevTask;

        return { ...prevTask, isDone: !prevTask.isDone };
      });
    });
  };

  if (!fontsLoaded) return <Loading />;

  const renderTask = ({ item }: { item: TaskData }) => (
    <Task
      onChangeTaskCompletionState={handleTaskCompletionStateChange}
      onRemoveTask={() => {}}
      task={item}
    />
  );

  return (
    <View className="bg-gray-600 flex-1 items-center">
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Header tasks={tasks} />

      <TasksStatus tasks={tasks} />

      <FlatList
        keyExtractor={(task) => task.id}
        style={styles.tasksContainer}
        renderItem={renderTask}
        data={tasks}
      />
    </View>
  );
};
