import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Todo = new Schema({
    txt: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Todo", Todo);