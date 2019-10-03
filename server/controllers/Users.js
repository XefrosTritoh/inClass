const express = require('express');
const users = require('../Models/users')

const app = express.Router();
//instance of router

 app.get('/' , (req, res) => res.send(users)); //list of users

 app.post('/' , (req, res) => {
    users.push(req.query);
    res.send(users[users.length - 1]);    
 });
 

module.exports = app;
