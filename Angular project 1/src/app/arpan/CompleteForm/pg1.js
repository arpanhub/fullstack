var express = require('express');
const fs = require("fs");
var bodyParser = require('body-parser'); // Add bodyParser for parsing POST request bodies
var app = express();

app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse urlencoded POST bodies

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/form1.htm");
});

app.post('/submit', (req, res) => {
    const response = {
        name: req.body.name, // Access form data using req.body
        email: req.body.email,
        message: req.body.message
    };
    // Send a response to the client
    // res.send("Your form has been submitted successfully!");
    // Send a simple HTML response indicating success
    const alertScript = `<script>alert('${JSON.stringify(response)}'); window.location.href = "/";</script>`;
    res.send(alertScript);

let data = JSON.stringify(response, null, 2);
    // Append form data to the text file
    fs.appendFile('formdata.txt', data + "\n", (err) => {
        if (err)
            console.log("Error appending data to file");
        else
            console.log("Data added successfully in formdata.txt");
    });
});

const port = 4200;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
