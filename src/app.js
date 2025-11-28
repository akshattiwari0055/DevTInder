const express = require('express');
const app = express();
app.use("/hello" , (req,res) => { // localhost:3000/hello
    res.send('Hello World');
});
app.use("/profile" , (req,res) => { // localhost:3000/hello
    res.send('Hello from the Profile Page');
});
app.use("/" , (req,res) => { // localhost:3000/hello
    res.send('Hello from the Dashboard');
});

app.listen(3000 , () => {
    console.log('Server is running on port 3000');
});