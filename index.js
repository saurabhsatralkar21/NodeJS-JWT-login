const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.post('/login', (req, res) => {
    // The page "/login" indicates the endpoint https://gamanza.free.beeceptor.com/login 
    // where we are checking for authentication

    // Assuming the following credentials are saved in the database
    // We just authenticate them in the backend in a variable
    let username = req.body.email;
    let password = req.body.password;

    
    if(username == "username" && password == "password") {
        res.sendFile(__dirname + "/success.html")
    } else {
        res.write("<h1> Sorry, wrong email and password. Try again!!")
    }
});

app.listen(PORT, (req, res) => {
    console.log("Server started");
})