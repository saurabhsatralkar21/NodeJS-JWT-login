const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});


app.listen(PORT, (req, res) => {
    console.log("Server started");
})