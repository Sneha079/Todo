const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const cors= require("cors");
const dbConnect = require("./db/Db");
const Todoroute = require("./routes/TodoRoute");
const app = express();



dbConnect();

const PORT = process.env.PORT ||5000;

app.use(express.json());
app.use(cors());
app.use('/api/todo',Todoroute)

app.get("/",(req , res)=>{
    res.send("hello....");
});


app.listen(PORT ,()=> console.log(`listining at ${PORT}...`))