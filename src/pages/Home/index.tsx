import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { FlatList, StatusBar, View } from "react-native";

import type { TaskData } from "@/types";
import {
  TasksListEmptyComponent,
  TasksStatus,
  Loading,
  Header,
  Task,
} from "@/components";

import { styles } from "./styles";
import { useTasks, useTasksHandlers } from "@/hooks";

export const Home = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  const { tasks, setTasks } = useTasks();
  const { handleTaskCompletionStateChange, handleRemoveTask, handleAddTask } =
    useTasksHandlers({ setTasks, tasks });

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
