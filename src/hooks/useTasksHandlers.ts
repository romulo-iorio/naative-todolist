import { TaskData } from "@/types";

import { Alert } from "react-native";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<TaskData[]>>;
  tasks: TaskData[];
}

const generateRandomID = () => Math.random().toString(36).substr(2, 9);

export const useTasksHandlers = ({ setTasks }: Props) => {
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
      createdAt: new Date().toISOString(),
      title: newTaskText.trim(),
      id: generateRandomID(),
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

  return { handleTaskCompletionStateChange, handleAddTask, handleRemoveTask };
};
