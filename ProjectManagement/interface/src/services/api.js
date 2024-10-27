import { apiUrl } from "../config";

export const fetchData = async (endpoint, method = "GET", body = null) => {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${apiUrl}/${endpoint}`, options);
  return await response.json();
};

export const createTask = async (task) => {
  const response = await fetch(`${apiUrl}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const updateTask = async (taskId, task) => {
  const response = await fetch(`${apiUrl}/tasks/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const deleteTask = async (taskId) => {
  await fetch(`${apiUrl}/tasks/${taskId}`, { method: "DELETE" });
};
