const router = require('express')();
const empObj  = require('../models/sequelize')['fs_employee'];

/*router.post('/',
    (req,res,next)=>{
        empObj
        .create({ name: 'John Doe'})
        .then(empObj => {
            console.log(testUser.get('name')); // John Doe (SENIOR ENGINEER)
        })
    }
);*/

/*router.post('/',
    (req,res,next)=>{
        testUser
        .create({ name: 'John Doe'})
        .then(testUser => {
            console.log(testUser.get('name')); // John Doe (SENIOR ENGINEER)
        })
    }
);

router.put('/',
    (req,res,next)=>{
        testUser
        .create({ name: 'John Doe'})
        .then(testUser => {
            console.log(testUser.get('name')); // John Doe (SENIOR ENGINEER)
        })
    }
);

router.delete('/',
    (req,res,next)=>{
        testUser
        .create({ name: 'John Doe'})
        .then(testUser => {
            console.log(testUser.get('name')); // John Doe (SENIOR ENGINEER)
        })
    }
);*/

module.exports = router;