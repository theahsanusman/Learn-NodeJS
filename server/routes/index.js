import express from "express";
import Todo from "../models/todos";
const Router = express.Router();

Router.get("/", (req, res) => {
    res.send("Hello World");
});

module.exports = Router;