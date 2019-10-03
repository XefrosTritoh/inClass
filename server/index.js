const express = require('express');
const path = require('path'); //var path
const userController = require('./controllers/users');

const app = express(); //must be executed first
const port = 3000;

//match paths to functions( ex: /static, express fucntion)
//middleware
app
    
    .use( function(req, res, next){
            //Logging

            console.log({param: req.params, 
                        body: req.body, 
                        url: req.url, 
                        query: req.query, 
                        headers: req.headers});
            next(); //must
    })

    .use(   '/static', 
            express.static(path.join(__dirname, '../NoFramework'))) 
            //static sends back html only
            //must reference path variable

    .get(   '/',
            (req, res) => res.send({ msg: 'Hello World!!!' })
    )
    
    .get(   '/heb',
        function(req, res){
         res.send({ msg: 'World!' })
        } 
    )

    .use( '/users' , userController );


app.listen(port, (/*no params */) => console.log(`Running on http://localhost:${port}`));