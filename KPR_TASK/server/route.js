const express = require('express');
const router = express.Router();
const signupTemplate = require('./models');

router.post('/signup' , (req , res) => {
    const data = new signupTemplate({
        username : req.body.username,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password
    })
    data.save()
    .then(result => res.json(result))
    .catch(err => console.log(err))
})


module.exports = router
