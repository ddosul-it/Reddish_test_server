"use strict"

//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./routes/home")

app.use("/", home); //use -> 미들웨어 등록해 주는 메서드

module.exports = app;