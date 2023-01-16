const express = require('express');
const app = express();
const {products} =require('./data.js');

app.get('/', (req,res) => {
    //res.json([{name:'john'},{name: 'susan'}]); // this is my first and most basic api created
    //res.json(products);
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req,res) => {
    
});

app.listen(5000, () => {
    console.log('server is listening on port 5000....');
});