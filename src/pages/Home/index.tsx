import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Alert, FlatList, StatusBar, Text, View } from "react-native";
import { useState } from "react";

import type { TaskData } from "@/types";
import {
  TasksListEmptyComponent,
  TasksStatus,
  Loading,
  Header,
  Task,
} from "@/components";

import { styles } from "./styles";

const exampleTask: TaskData = {
  id: "1",
  title:
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  isDone: false,
};

const generateTaskId = () => Math.random().toString(36).substr(2, 9);

export const Home = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const handleTaskCompletionStateChange = (task: TaskData) => {
    setTasks((prevTask) => {
      return prevTask.map((prevTask) => {
        if (prevTask.id !== task.id) return prevTask;

        return { ...prevTask, isDone: !prevTask.isDone };
      });
    });
  };

  const handleAddTask = (newTaskText: string) => {
    if (!newTaskText)
      return Alert.alert("Você não pode adicionar uma tarefa vazia!");

    const newTask: TaskData = {
      title: newTaskText.trim(),
      id: generateTaskId(),
      isDone: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleRemoveTask = (taskId: string) => {
    const removeTask = () => {
      setTasks((prevTasks) =>
        prevTasks.filter((prevTask) => prevTask.id !== taskId)
      );
    };

    Alert.alert(
      "Remover Tarefa",
      "Você tem certeza que deseja remover essa tarefa?",
      [
        {
          text: "Não, cancelar!",
          style: "cancel",
        },
        {
          text: "Sim, remover!",
          style: "destructive",
          onPress: removeTask,
        },
      ]
    );
  };

  if (!fontsLoaded) return <Loading />;

  const renderTask = ({ item }: { item: TaskData }) => (
    <Task
      onChangeTaskCompletionState={handleTaskCompletionStateChange}
      onRemoveTask={handleRemoveTask}
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

      <Header handleAddTask={handleAddTask} />

      <TasksStatus tasks={tasks} />

      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        ListEmptyComponent={TasksListEmptyComponent}
        keyExtractor={(task) => task.id}
        style={styles.tasksContainer}
        renderItem={renderTask}
        data={tasks}
      />
    </View>
  );
};
