const { Router } = require('express');
const { getTasksCtrl } = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl); // Obtener la lista de tareas
router.get('/tasks/:id'); // Obtener una tarea por su id -> Actividad

module.exports = router;
