import express from "express";
const app = express();
import Routes from "./routes/index";

// Setup Routes
app.use(Routes);

app.listen(19000, function () {
    console.log("Server is Started!");
});