import TodoModel from "../model/Todo";

export async function getTodoController(req, res){
    const {todoIId} = req.params.id
    const allTodos = await TodoModel.findById(todoId)
    // validate all todos
    res.json(allTodos)
}
// /getaTodo:todoID