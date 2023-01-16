const express = require('express');
const app = express()

app.get('/', (req,res) => { // the call back function will be executed every time the rot '/' have a get request
    res.status(404).send('Home Page');
});

app.get('/about', (req,res) => {
    res.status(404).send('About Page');
});

app.listen(5000, () => {
    console.log('server is listening on port 5000 .....');
});

app.all('*', (req,res) => {
    res.status(404).send('<h1>resource not found</h1>')
});


//Express Methods
// app.get => by default browsers make a GET request
// app.post
// app put
// app.delete
// app.all
// app.use
// app.listen