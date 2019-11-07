const admin_m = require('../models/LMS/admin');
const objection = require("objection");
const Knex      = require('knex');

class Admin{
	
	static getAdmin(reqObj){

		if ('admin_id' in reqObj)
			reqObj.admin_id = JSON.parse(reqObj.admin_id);

		let knexObj = admin_m.query().where("admin_id", reqObj.admin_id);

		return knexObj.debug().then((data)=>{
            return data
           
        }).catch((err)=>{
            return err;
        });
	}
}


module.exports = Admin;