const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send({name: 'tra', age: 12})
})

app.get('/help', (req, res) => {
    res.send("Healp Page")
})

app.listen(3000, ()=>{
    console.log("Success");
})