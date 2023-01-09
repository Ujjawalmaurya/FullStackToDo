import TodoModel from "../model/Todo";

export async function deleteTodoController (req, res){
    const todoID = req.params.todoID
    const deletedTodo = await TodoModel.findByIdAndDelete(todoID)
    res.status(201).json(deletedTodo)
}
