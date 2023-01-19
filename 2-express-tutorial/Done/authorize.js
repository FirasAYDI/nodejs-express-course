const authorize = (req,res,next) => {
    const {user} = req.query;
    if (user === 'john') {
        req.user = {name:'john', id:3}
        next();
    } else {
        res.status(401).send('Unauthorized'); //overwrite the pages content if user is not identified !!!
    }
    console.log('authorize');
    next();
}

module.exports = authorize ;