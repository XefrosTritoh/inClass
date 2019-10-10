const express = require('express');
const users = require('../Models/users');
const app = express.Router();

const game = {
    users: [],
    pictureCards: [],
    wordCards: [],
    
    dealer: 0
}

app.post('/join', (req,res) =>{
    const userId = req.query.userId
    game.users.push(user[userId]);
})

module.exports = app;