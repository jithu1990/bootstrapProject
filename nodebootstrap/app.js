const express = require('express')
const app=express()

app.get('/',(req,res) =>{
    res.send("hey this is a bootstrap project")
})

app.listen(3000)