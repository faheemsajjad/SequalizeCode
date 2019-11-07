/*
const { Model } = require('objection');
const Knex      = require('knex');


const knex = Knex({
client: 'mysql',

connection: {
  host: '192.168.1.51',
  user: 'zameen_lms',
  password: 'imzee691',
  database: 'zameen_lms'
}

});

Model.knex(knex);

class Admin extends Model {

  static get jsonSchema() {
    return {
      default : ["admin_id", "login", "password", "super_admin", "full_name", "email", "crm_manager", "phone", "cell", "designation",
                 "is_suspended", "extensions", "extension_platform", "password_timestamp", "password_key", "added_by","admin_team_id"]
    }
  }

  static get tableName() {

    return 'zn_admin';
  }
}

module.exports = Admin;*/

module.exports = (sequelize, type) => {
    return sequelize.define('user2', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING
    })
}