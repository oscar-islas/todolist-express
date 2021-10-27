const { getAllTasks } = require('../services/tasks.services');

const getTasksCtrl = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTasksCtrl,
};
