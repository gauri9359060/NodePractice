const express = require("express");
const app = express();
const userController = require('../Controllers/user')
const bodyParser = require("body-parser");
app.use(bodyParser.json([]));

app.post("/register", userController.register)

app.post("/createBook", userController.createBook)

app.post("/login", userController.login)


app.post("/createComment",userController.createComment)

app.get("/books", userController.get10Books)


module.exports = app