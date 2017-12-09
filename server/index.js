import express from "express";
const app = express();
import Routes from "./routes/index";
import "./database";

// Setup Routes
app.use(Routes);

app.listen(19000, function () {
    console.log("Server is Started!");
});