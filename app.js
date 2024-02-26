require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require("mongoose");

(async()=>{
    try {
        await mongoose.connect(process.env.mongo_uri);
        console.log("te has conectado a mongodb")
    } catch (error) {
        console.log(error);
    }
})

module.exports=app;