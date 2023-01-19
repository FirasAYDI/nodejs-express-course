const express =require('express');
const app = express();
const morgan = require('morgan');
const authorize = require('./authorize');
// so far we have an incoming req, then we have been just sending reponses
// with middleware : req => middleware => res

// 1. route vs use method
// 2. options - our own / built in middleware from express / third party middleware

const logger = (req,res,next) => { // better to have this logger function in a separate file
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    //res.send('Testing')
    next(); // send function to the next middleware !!
}

app.get('/', logger,(req,res) => { // logger is the middleware function. Express suoolies the req,res to the middleware function.

    res.send('home');
});

app.use('/api',[logger, authorize]); // logger can also be entered only one time in app.use() and then used for all the app.get()
                                    // multiple middlware functions can be put in an array inside app.use(). They will executed in the order
                                    // Possible to add a path as well => in this cas logger with work for paths '/api/....' but it will not work for '/about'

app.get('/about', (req,res) => {
    res.send('about');
});

app.get('/api/products', (req,res) => {
    res.send('Products');
});

// use the third party middleware
app.get('/api/items',morgan('tiny') , (req,res) => {
    res.send('Items');
});

app.listen(5000, () => {
    console.log('server is listening on port 5000....');
});