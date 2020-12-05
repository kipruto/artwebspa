const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('auth-token');

    if(!token)
    return res.status(401).send('You need to login to view this route');

    try {
        const loggedin = jwt.verify(token, 'privatekey');
        req.user = loggedin;

    } catch (error) {
        res.status(400).send('invalid token')
        
    }
    next();
}