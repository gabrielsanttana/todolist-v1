const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require("./date");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

const items = [];

app.get("/", (req, res) => {
    const currentDay = date.getStringDate();

    res.render("todolist", {currentDay: currentDay, items: items});
});

app.post("/", (req, res) => { 
    const { item } = req.body;

    items.push(item);

    res.redirect("/");
});

app.listen(3333, () => {
    console.log("Server is running on port 3333");
});