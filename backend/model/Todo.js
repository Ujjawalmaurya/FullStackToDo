import mongoose from "mongoose";

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: {
        type: String,
        task: [String],
    },
})

const TodoModel = mongoose.model("Todo", TodoSchema);
export default TodoModel
// nomadshubham