import TodoModel from "../model/Todo";

export async function getTodosController(req, res){
try {
    const todos = await TodoModel.find()
    res.json(todos)
} catch (error) {
    console.log(error);
}}
