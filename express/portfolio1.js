var express = require('express');
var app = express();

// Serve portfolio1.htm when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/portfolio1.htm");
});

// Serve result.htm when accessing /result URL
app.get('/result', (req, res) => {
    res.sendFile(__dirname + "/result.htm");
});

const port = 1000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
