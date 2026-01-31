// import express
// const express = require("express");
// const route = require('./src/route.mjs')
import express from 'express'
import route from './src/route.mjs'
// app 
const app= express();
// global middleware to read json data
app.use(express.json());
// moving all request to route file
app.use('/',route);
// creating server
app.listen(8080, ()=>{
    console.log("server is running on port 8080");
})