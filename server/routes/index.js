import express from "express";
import Todo from "../models/todos";
const Router = express.Router();

Router.post("/todo", (req, res) => {
    const newTodo = new Todo({ txt: req.body.txt });
    newTodo.save((err) => {
        if (err) { res.json({ err: err }); }
        else {
            res.json({ status: true });
        }
    });
});

Router.get("/allTodos", (req, res) => {
    Todo.find((err, data) => {
        if (err) {
            res.json({ err });
        } else {
            res.json({ status: true, data: data });
        }
    });
});

module.exports = Router;