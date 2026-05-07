const todo = require("../models/todomodel.js")

const todoadd = async (req,res) => {
    try {
        
        
        const {name} = req.body
        if(!name || name.trim()=== ""){
            return res.status(400).json({message:"Task connot be empty"})
        }
        const newtodo = await todo.create({name})
        res.status(201).json({message:"Task Added Successfuly"})
        
    } catch (error) {
        console.error(error)
        console.log("Error While Adding new Task")
        return
    }
}
const gettodos =  async (req,res) => {
    try {
        const todos = await todo.find()
        res.json(todos)
    } catch (error) {
        console.error(error)
        console.log("Error while Fecthing Todos")
        return
    }
}
const delltask = async (req,res) => {
    try {
        const {id} = req.params
        const deltask = await todo.findByIdAndDelete(id)
        res.status(200).json({message:"Task deleted"})

    } catch (error) {
        console.error(error)
        return
    }
}
const updatetask = async (req, res) => {
    try {
        const {id} = req.params
        const updateTask = await todo.findByIdAndUpdate(id, req.body , {new:true} )
        if(!updateTask){
            return res.status(404).json({message:"Task didn't found"})
        }
        res.json(updateTask)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {todoadd, gettodos,delltask, updatetask}