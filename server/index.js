const express = require('express');
const path = require('path'); //var path
const userController = require('./controllers/users');
const gameController = require('./controllers/game');
const { CustomError } = require('./models/Custom_Error');
const app = express(); //must be executed first

const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" , "Authorization");
    next();
});

app.use(function(req, res, next) {
    const arr = req.headers.authorization.split(" ")
    if(arr.length > 1 && +arr[1]){
        req.user_id = +arr[1];
    }else{
        next(new CustomError(403, "Please login"));
    }
})
app
    .use(express.json())
    .get('/port' , (req,res) => res.send("Using Port: " + port))
    .get('/sql' , (req,res) => res.send(process.env.MYSQLCONNSTR_localdb))
    .use('/static', express.static(path.join(__dirname, '../NoFramework'))) 
    .use( '/users' , userController )
    .use( '/game' , gameController );

app
    .use((err,req,res,next)=> {
        res.status(err.code || 500).send({ message: err.message || '' + err })
    })

app.listen(port, (/*no params */) => console.log(`Running on http://localhost:${port}`));