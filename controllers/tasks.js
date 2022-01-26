const Task = require('../models/task')

const getAllTasks = (req, res) =>{
    res.send('get all tasks')
}

const getTask = (req, res) =>{
    res.send('get task')
}

const createTask = async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const updateTask = (req,res)=>{
    res.send('update tasks')
}

const deleteTask = (req,res)=>{
    res.send('delete tasks')
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}