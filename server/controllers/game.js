const express = require('express');
const { Game } = require('../Models/Game');
const app = express.Router();



app.get('/', (req,res) =>{
    res.send(Game.Get_State())
})

    .get('/hand', (req,res) =>{
        res.send(Game.Get_Hand())
    })

    .get('/picture/flip', (req,res) =>{
        Game.Flip_Picture()
        res.send({ success: true, url: Game.Picture_in_play})
    })

module.exports = app;