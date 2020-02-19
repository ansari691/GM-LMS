const express = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const Student = require('../../models/Student');

const router = express.Router();

//get a authenticated user
router.get('/', auth ,async (req, res) => {
    try{
        const student = await Student.findById(req.student.id).select('-password');
        res.json(student);
    }
    catch(err){
        res.status(500).send('server error');
    }
});

//logging in
router.post('/' , async (req, res) => {

    const {email, password} = req.body;

    try{
        
        let student = await Student.findOne({email});

        if(!student){
            return res.status(400).json({ errors : [{msg : 'invalid credentials'}] });
        }

        //const isMatched = await bcrypt.compare(password,user.password);
        //if(!isMatched) return res.status(400).json({errors : [{msg : 'invalid credentials'}]})
        
        if(password !== student.password) return res.status(400).json({errors : [{msg : 'invalid credentials'}]});

        const payload = {
            student : {
                id : student.id
            }
        }
    
        jwt.sign(payload, 'jwtSecret', {expiresIn : 360000}, (err, token) => {
            if(err) throw err
            res.json({token});
        });

        
    }
    
    catch{
        res.status(500).json({ errors : errors.message});
    }
 
});


module.exports = router;