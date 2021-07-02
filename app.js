
const express = require('express'); // import express package we installed
const app = express(); // execute express()

app.use((req, res, next) => { // incoming request goes through app.use() and whatever we pass to it
    res.status(200).json({ // send JSON response
        message: 'It works!'
    }); 
}); 

module.exports = app; // export app function
