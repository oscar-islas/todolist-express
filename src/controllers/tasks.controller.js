const { getAllTasks, getTaskById } = require('../services/tasks.services');

const getTasksCtrl = async (req, res, next) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskCtrl = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const task = await getTaskById(id);
    res.json(task);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTasksCtrl,
  getTaskCtrl,
};
