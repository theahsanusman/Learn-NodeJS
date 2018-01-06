import express from "express";
const app = express();
import Routes from "./routes/index";
import "./database";
import bodyParser from "body-parser";

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup Routes
app.use(Routes);

app.listen(19000, function () {
    console.log("Server is Started!");
});