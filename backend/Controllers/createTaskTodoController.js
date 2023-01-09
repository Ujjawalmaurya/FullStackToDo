import TodoModel from "../model/Todo";

export async function createTaskTodoController (req, res){
    const todoID = req.params.todoID
    const todo = await TodoModel.findById(todoID)
    if (!todo) return res.status(400).send("No todo Exists")
    const {text} = req.body
    todo.task.push(text)
    await todo.save()
    res.json(todo)
}
