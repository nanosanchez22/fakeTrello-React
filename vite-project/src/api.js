/* const API_URL = 'http://localhost:5173'; 

// Obtener las columnas
export const fetchColumns = async () => {
  const response = await fetch(`${API_URL}/columns`);
  return await response.json();
};

// Obtener las tareas
export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return await response.json();
};

// Agregar una tarea
export const addTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return await response.json();
};

// Editar una tarea
export const updateTask = async (taskId, updatedTask) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  });
  return await response.json();
};

// Eliminar una tarea
export const deleteTask = async (taskId) => {
  await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'DELETE',
  });
};

 */

const BASE_URL = 'http://localhost:3000';

export const fetchTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  return await response.json();
};

export const addTask = async (task) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  });
  return await response.json();
};

export const updateTask = async (taskId, task) => {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  });
  return await response.json();
};

export const deleteTask = async (taskId) => {
  await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: 'DELETE'
  });
};
