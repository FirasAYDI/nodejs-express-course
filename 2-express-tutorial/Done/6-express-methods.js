const express = require('express');
const app = express();
let {people} = require('./data');

// static assets
app.use(express.static('./methods-public')) // for this case, it replaces a get request for the home page !

// parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());

app.post('/login', (req,res) => {
    console.log(req.body); 
    //res.send(req.body.testName); // the posted value in the input is saved in the body property
                                // the body property of the req object is itself an object composed of the property testName.
                                // this propoerty was set in the html tag when the input was created : <input type="text" name="testName" id="name" autocomplete="false" />
    const {testName} = req.body; // destruct testName from req.body
    if (testName) {
        return res.status(200).send(`Welcome ${testName}`);
    }
    res.status(401).send('Please Provide Credentials');
});

app.get('/api/people', (req,res) => {
    res.status(200).json({success: true, data: people}); // create an api and put it in the hhtp address '/api/people'.
});

app.post('/api/people', (req,res) => {
    const {name} =req.body;
    if (!name) {
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).json({success: false, person: name}); // response status for a successful post is 201
});

app.post('/api/people/postman', (req,res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({success: false, msg: 'please provide name value'});
    }
    res.status(201).send({success: true, data: [...people, name]});
});

app.put('/api/people/:id', (req,res) => {
    const {id} = req.params;
    const {name} = req.body;
    //console.log(id, name);
    
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(400).json({success: false, msg: `no person found with id ${id}`});
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name; // this will update the name for the given id in the api web page BUT !!! will not put value in the array newPeople
        }
        return person; // need to return person in order to append the value in the array newPeople
    });
    res.status(200).json({success: true, data: newPeople});
});

app.delete('/api/people/:id', (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(400).json({success : false, msg : `no person found with id ${req.params.id}`});
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data: newPeople});
});

app.listen(5000, () => {
    console.log('server is listening on port 5000.....');
});