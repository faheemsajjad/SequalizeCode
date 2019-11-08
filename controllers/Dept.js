const router = require('express')();
const deptObj  = require('../models/sequelize')['fs_dept'];

/*router.get('/',
    (req,res,next)=>{
        deptObj
        .create({ name: 'John Doe'})
        .then(deptObj => {
            console.log(deptObj.get('name')); // John Doe (SENIOR ENGINEER)
        })
    }
);*/





module.exports = router;