const express = require('express');
const path = require('path'); //var path
const userController = require('./controllers/users');
const gameController = require('./controllers/game');

const app = express(); //must be executed first

const port = process.env.PORT || 3000;

//match paths to functions( ex: /static, express fucntion)
//middleware
app

    .get('./port' , (req,res) => res.send("Using Port: " + port))
    .use('/static', express.static(path.join(__dirname, '../NoFramework'))) 
            //static sends back html only
            //must reference path variable
    .use( '/users' , userController )
    .use( '/game' , gameController );

app.listen(port, (/*no params */) => console.log(`Running on http://localhost:${port}`));