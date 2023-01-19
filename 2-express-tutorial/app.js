const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('./methods-public')) // for this case, it replaces a get request for the home page !
// parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());

app.use('/api/people', people); // /api/people will be pase to the route people. It's the base path set up for th route
app.use('/login', auth); // communicate with router in auth.js

app.listen(5000, () => {
    console.log('server is listening on port 5000.....');
});