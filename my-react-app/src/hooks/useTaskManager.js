import { useState } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Agrega otras funciones según sea necesario

  return {
    tasks,
    addTask,
    // Agrega otras funciones al objeto retornado
  };
};

export default useTaskManager;
