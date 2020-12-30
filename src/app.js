var express = require("express");
var dotenv = require("dotenv");
var debug = require("debug")("app:startup");
var config = require("config");
var morgan = require("morgan");
var helmet = require("helmet");

dotenv.config();

var app = express();
var port = process.env.PORT || config.get("port") || 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    debug("morgan started...");
}

// console.log(`Node_env: ${process.env.NODE_ENV}, or ${app.get("env")}`);

app.get("/", (req, res) => {
    res.send("hello world");
    // res.render("index", { title: "My profile", message: "hello" });
});

app.get("/url", (req, res) => {
    res.send("hello world url");
});

app.listen(port, console.log(`app listening on port ${port}`));

module.exports = app;
