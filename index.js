require('dotenv').config()
const express = require('express')
//import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('Dhruv')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please subscribe my chanel </h1>')
})


app.get('/youtube', (req, res)=>{
    res.send('<h1>Thanks for 1k subsribers </h1>')
})

//callback
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

//This is server