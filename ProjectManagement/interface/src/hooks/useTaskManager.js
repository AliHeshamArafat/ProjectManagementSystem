import { useState, useEffect } from "react";
import { fetchData, createTask, updateTask, deleteTask } from "../services/api";

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetchData("tasks");
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = async (taskId, updatedTask) => {
    const task = await updateTask(taskId, updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.TaskId === taskId ? task : t))
    );
  };

  const removeTask = async (taskId) => {
    await deleteTask(taskId);
    setTasks((prevTasks) => prevTasks.filter((t) => t.TaskId !== taskId));
  };

  const overdueTasks = tasks.filter(
    (task) => task.EndDate < new Date() && task.Status !== "Completed"
  );

  return { tasks, addTask, editTask, removeTask, overdueTasks };
};
