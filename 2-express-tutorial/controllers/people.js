let {people} = require('../data');

const getPeople = (req,res) => {
    res.status(200).json({success: true, data: people}); // create an api and put it in the hhtp address '/api/people'.
}

const createPerson = (req,res) => {
    const {name} =req.body;
    if (!name) {
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).json({success: false, person: name}); // response status for a successful post is 201
}

const testPostman = (req,res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({success: false, msg: 'please provide name value'});
    }
    res.status(201).send({success: true, data: [...people, name]});
}

const putPerson = (req,res) => {
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
}

const deletePerson = (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(400).json({success : false, msg : `no person found with id ${req.params.id}`});
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data: newPeople});
}

module.exports = {
    getPeople,
    createPerson,
    testPostman,
    putPerson,
    deletePerson
}