const router = require('express')();
const admin_mg = require('../managers/admin');
const User  = require('../models/sequelize')

/*//show all admins
router.get('/:admin_id',function(req,res){

    admin_model.query().where("admin_id", 1)
    .then((data) => {
        if (data)
            res.status(200).json(data);
        else
            res.status(204).send();
    })
    .catch(function (err) {
        res.status(500).json(err.code);
    });
});

//insert admin
router.post('/admin/add',function(req,res){
  
});


//show admin
router.get('/admin/:id',function(req,res){    
    admin_model.query().where("admin_id", req.params.id)
    .then((data) => {
        if (data)
            res.status(200).json(data);
        else
            res.status(204).send();
    })
    .catch(function (err) {
        res.status(500).json(err.code);
    });
  
});

// delete admin
router.delete('/admin/:id',function(req,res){
  
});

//update admin
router.put('/admin/:id',function(req,res){
  
});*/


//show all admins
/*router.get('/',
    (req,res,next)=>{
        let reqObj = {};
        if(typeof req.query != undefined)
            reqObj = req.query;
        console.log("sadasd");
        admin_mg.getAdmin(reqObj)
        .then(function(data){
            if (data)
                res.status(200).json(data);
            else
                res.status(204).send();
        })
        .catch(function(error){
            next(error);
        });
    }
);*/

//show all admins
router.get('/',
    (req,res,next)=>{
        User.create(req.body)
        .then(user => res.json(user))
    }
);





module.exports = router;