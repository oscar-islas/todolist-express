const { Router } = require('express');
const { getTasksCtrl, getTaskCtrl } = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl); // Obtener la lista de tareas
router.get('/tasks/:id', getTaskCtrl); // Obtener una tarea por su id -> Actividad

module.exports = router;
