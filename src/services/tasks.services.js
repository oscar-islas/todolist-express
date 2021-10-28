const fs = require('fs/promises');
const path = require('path');

const TASK_PATH = path.resolve(__dirname, '..', 'tasks.json');

const getAllTasks = async () => {
  try {
    const tasks = await fs.readFile(TASK_PATH, 'utf8');
    return JSON.parse(tasks);
  } catch (error) {
    throw error;
  }
};

const getTaskById = async (id) => {
  // Completar la lógica para poder obtener una tarea por su id
  try {
    const tasks = await getAllTasks();
    const task = tasks.find((e) => e.id === id);
    return task;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
};
