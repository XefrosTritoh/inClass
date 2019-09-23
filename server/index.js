const express = require('express');
const app = express();
const port = 3000;

app
    .get(   '/',
            (req, res) => res.send('Hello World!!!')
    )
    
    .get(   '/heb',
        function(req, res){
         res.send('World!')
        } 
    );


app.listen(port, (/*no params */) => console.log(`Running on http://localhost:${port}`));