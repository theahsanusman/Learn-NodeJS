import express from "express";
const app = express();
import Routes from "./routes/index";
import "./database";
import bodyParser from "body-parser";

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup Routes
app.use(Routes);

app.listen(process.env.PORT, function () {
    console.log("Server is Started!");
});