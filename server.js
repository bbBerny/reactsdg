const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
import axios from 'axios';

const app = express();


const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const mongoUrl = `mongodb+srv://${user}:${password}@cluster0.vmafkex.mongodb.net/project?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }); 

const userSchema = new mongoose.Schema({
    user: String,
    password: String,
  });
  userSchema.set("strictQuery", true); //Mandoatory Line


async function handleRegister() {
  const user = document.querySelector('#registerUser').value;
  const password = document.querySelector('#registerPassword').value;

  const response = await axios.post('/Map', { user, password });

  console.log(response.data);
}

async function handleLogin() {
  const user = document.querySelector('#loginUser').value;
  const password = document.querySelector('#loginPassword').value;

  const response = await axios.post('/Map', { user, password });

  console.log(response.data);
}



app.post("/Login",(req, res)=>{
    var user = req.body.user;
    var password =  req.body.password;
    //You would conect to DB or a 3th party API to authentication your user
    let authorization = {
        user: user,
        status: "Unauthorized",
        statusCode: -1,
    }
    
    if (user=="David" && password=="1234"){
        console.log("Login")
        authorization.status = "Authorized";
        authorization.statusCode = 1;
    }else{
        console.log("No access")
    }
    res.json(authorization);
    
    });

app.listen(5000, ()=>{
    console.log("istening to port 5000");
    });