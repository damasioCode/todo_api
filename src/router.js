const express = require('express');
const router = express.Router()
const {
    getAllTasks,
    createTask,
    deleteTask
} = require('./controllers/taskController');

router.get('/tasks', getAllTasks)
router.post('/tasks/new', createTask)
router.delete('/tasks/delete/:id', deleteTask)

module.exports = router