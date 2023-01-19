const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
// static assets : files that the server does not have to change => it's static for the server
app.use(express.static('./navbar-app')); // static is a built in middleware


// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(_dirname,'./navbar-app/index.html')); // we can use join instead of resolve method
// adding to static assets
// SSR
// })

app.all('*', (req,res) =>{
    res.status(404).send('not found');
});

app.listen(5000, () => {
    console.log('server is listening on port 5000......');
});