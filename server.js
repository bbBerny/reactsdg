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


// Función para manejar el registro
async function handleRegister() {
    // Obtén los valores del formulario
    const user = document.querySelector('#registerUser').value;
    const password = document.querySelector('#registerPassword').value;
  
    // Haz la solicitud POST
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user, password })
    });
  
    // Maneja la respuesta
    if (response.ok) {
      console.log('Usuario registrado exitosamente');
    } else {
      console.error('Error al registrar el usuario');
    }
  }
  
  // Función para manejar el inicio de sesión
  async function handleLogin() {
    // Obtén los valores del formulario
    const user = document.querySelector('#loginUser').value;
    const password = document.querySelector('#loginPassword').value;
  
    // Haz la solicitud POST
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user, password })
    });
  
    // Maneja la respuesta
    if (response.ok) {
      console.log('Inicio de sesión exitoso');
    } else {
      console.error('Error al iniciar sesión');
    }
  }
  



app.listen(5000, ()=>{
    console.log("istening to port 5000");
    });