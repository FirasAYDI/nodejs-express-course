const { json } = require('express');
const express = require('express');
const app = express();
const {products} = require('./data.js');

app.get('/', (req,res) => {
    //res.json([{name:'john'},{name: 'susan'}]); // this is my first and most basic api created
    // res.json(products);
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req,res) => {
    const newProducts = products.map((pr) => {
        const {id, name, image} = pr;
        return {id, name, image}
    });
    res.json(newProducts);
});

// app.get('/api/products/1', (req,res) => {
//     console.log(req.params);
//     const singleProduct = products.find((pr) => pr.id === 1);
//     res.json(singleProduct);
// });

app.get('/api/products/:productID', (req,res) => { // set up a route parameter ":productID" (need to think of it as a place holder)
    // console.log(req.params);
    const {productID} = req.params; //returns a string
    const singleProduct = products.find((pr) => pr.id === Number(productID)); // id in the object product is a number
    if (!singleProduct) {
        return res.status(404).send('Product Not Found');
    }
    res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req,res) => { // reviews is not a route parameter
    console.log(req.params);
    res.send('hell world');
});

app.get('/api/v1/query', (req,res)=> {
    //console.log(req.query);
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((pr) => {
            return pr.name.startsWith(search);
        });
    }
    if (limit) {
        return sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        //res.status(200).send('No products match your search');
        return res.status(200).json({sucess:true, data:[]}); // always add return to if statement to prevent error in the server
    }
    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log('server is listening on port 5000....');
});