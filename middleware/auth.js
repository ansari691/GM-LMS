const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(400).json({ msg : 'token not found'});     
    }

    try{
        const decoded = jwt.verify(token, 'jwtSecret');  
        
        req.student = decoded.student;
        next();
    }
    catch(err){
        res.status(400).json({ msg : 'invalid token'})
    }
    
}