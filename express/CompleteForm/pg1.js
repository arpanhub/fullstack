var express = require('express');
const fs=require("fs");
var app = express();
app.get('/', (req, res) => {
    // res.send('hello world');
    res.sendFile(__dirname + "/form1.htm");
})
app.get('/submit',(req,res)=>
{
    const response={
        name:req.query.name,
        email:req.query.email,
        message:req.query.message
    }
    const alertScript = `<script>alert('${JSON.stringify(response)}'); window.location.href = "/";</script>`;
    res.send(alertScript);
    // res.send(JSON.stringify(response));
    /* console.log(response.name);
    console.log(response.email);
    console.log(response.message); */
    fs.appendFile('formdata.txt',JSON.stringify(response)+"\n",(err)=>{
        if(err)
            console.log("erroe appending data to file");
        else  
            console.log("Data added successfully in formdata.txt");
    });
    alert()
});
const port = 1000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.listen(1000);