const fs = require('fs/promises');
const path = require('path');

const TASK_PATH = path.resolve(__dirname, '..', 'tasks.json');

const getAllTasks = async () => {
  try {
    const tasks = await fs.readFile(TASK_PATH, 'utf8');
    return JSON.parse(tasks);
  } catch (error) {
    console.log(error);
  }
};

const getTaskById = () => {
  // Completar la lógica para poder obtener una tarea por su id
};

module.exports = {
  getAllTasks,
};
