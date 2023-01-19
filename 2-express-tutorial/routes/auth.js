const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    console.log(req.body); 
    const {testName} = req.body;
    if (testName) {
        return res.status(200).send(`Welcome ${testName}`);
    }
    res.status(401).send('Please Provide Credentials');
});

module.exports = router;