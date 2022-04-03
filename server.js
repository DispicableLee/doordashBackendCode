const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require ("./db");
const dashboard = require("./routes/API/dashboard");

const app = express();

const port = 4004;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE');
    next();
  });

app.use(morgan("dev"));

app.use(helmet());

connectDB();
// http://localhost:5000/api/v1/dashboard/signup/restaurant
// base url 1: http://localhost:5000
// base url 2 : /api/v1/dashboard

//GET http://localhost:5000/api/v1/dashboard/fetch/restaurant/:email
app.use("/api/v1/dashboard", dashboard);

app.listen(port, ()=>{
    console.log(`API server listening on ${port}`);
});