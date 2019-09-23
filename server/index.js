const express = require('express');
const path = require('path'); //var path
const app = express();
const port = 3000;

app
    //middleware
    .use(   '/static', 
            express.static(path.join(__dirname, '../NoFramework')))
    //must reference path variable

    .get(   '/',
            (req, res) => res.send('Hello World!!!')
    )
    
    .get(   '/heb',
        function(req, res){
         res.send('World!')
        } 
    );


app.listen(port, (/*no params */) => console.log(`Running on http://localhost:${port}`));