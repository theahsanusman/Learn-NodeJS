import express from "express";
const Router = express.Router();

Router.get("/", (req, res) => {
    res.send("Hello World");
});

module.exports = Router;