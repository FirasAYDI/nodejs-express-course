const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson,
    testPostman,
    putPerson,
    deletePerson
} = require('../controllers/people')

// router.get('/', getPeople);
// router.post('/', createPerson);
// router.post('/postman', testPostman);
// router.put('/:id', putPerson);
// router.delete('/:id', deletePerson);

// another way to set the route
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(testPostman);
router.route('/:id').put(putPerson).delete(deletePerson);

module.exports = router;
