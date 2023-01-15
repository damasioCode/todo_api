const { Task } = require('../../models')

const getAllTasks = async ( request, response ) => {
    const findTasks = await Task.findAll()

    return response.json(findTasks)
}

const createTask = async ( request, response) => {
    const { title, description } = request.body

    const newTask = await Task.create({
        title,
        description,
        done: false
    }) 
    
    return response.json(newTask)
}

const deleteTask = async ( request, response ) => {
    const { id } = request.params

    const task = await Task.destroy({
        where: { id }
    })

    return response.json({
        message: "Task deleted successfully!"
    })
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask
}