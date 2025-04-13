import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

export const TaskContex = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // Görevleri API'den çek
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTask(response.data.slice(0, 20)); // İlk 20 görevi al (göz yormasın)
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  // Görev silme fonksiyonu
  const removeTask = (id) => {
    const filtered = task.filter((task) => task.id !== id);
    setTask(filtered);
    Alert.alert("Görev silindi.");
  };

  // Yeni görev ekleme fonksiyonu (çakışmayan ID)
  const addTask = (title) => {
    const existingIds = task.map((t) => t.id);
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;

    const newTask = {
      id: maxId + 1,
      title,
      completed: false,
    };

    setTask([...task, newTask]);
    Alert.alert("Yeni görev eklendi.");
    setNewTaskTitle("");
  };

  return (
    <TaskContex.Provider
      value={{
        task,
        loading,
        error,
        addTask,
        removeTask,
        setNewTaskTitle,
        newTaskTitle,
      }}
    >
      {children}
    </TaskContex.Provider>
  );
};
