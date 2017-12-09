const MongoClient = require("mongodb").MongoClient;
import Mongoose from "mongoose";

Mongoose.connect("mongodb://admin:123456@ds135156.mlab.com:35156/express_api", { useMongoClient: true });
let db = Mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error: "));
db.once("open", () => {
    console.log("Database is Connected!");
    return db;
});