import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import type { TaskData } from "@/types";

const TASKS_STORAGE_KEY = "@native-todo-list/tasks";

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(TASKS_STORAGE_KEY).then((tasksJSON) => {
      if (!tasksJSON) return;
      setTasks(JSON.parse(tasksJSON));
    });
  }, []);

  useEffect(() => {
    const tasksJSON = JSON.stringify(tasks);
    AsyncStorage.setItem(TASKS_STORAGE_KEY, tasksJSON);
  }, [tasks]);

  const orderedTasks = tasks.sort((a, b) => {
    const { isDone: isDoneA, createdAt: createdAtA } = a;
    const { isDone: isDoneB, createdAt: createdAtB } = b;

    if (isDoneA === isDoneB)
      return new Date(createdAtB).getTime() - new Date(createdAtA).getTime();

    return isDoneA ? 1 : -1;
  });

  return { tasks: orderedTasks, setTasks };
};
