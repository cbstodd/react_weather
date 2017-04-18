const express = require('express');

// Create our app
const app = express();
const PORT = process.env.PORT || 3000;

// Makes sure traffic is on HTTP
app.use(function( req, resp, next ){
    if (req.headers['x-forwarded-proto'] === 'http'){
        next();
    } else {
        resp.redirect(`http://${req.hostname}${req.url}`);
    }
});

app.use(express.static('public'));

app.listen(PORT, function(){
    console.log(`### Express server listening on port ${PORT} ###`);
});
