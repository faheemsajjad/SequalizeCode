require("dotenv").config({ path: require('app-root-path') + "/.env" });
const Sequelize = require('sequelize')
const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);

const sequelize = new Sequelize('zameen_lms', 'aatdropshipdb', 'imzee691', { username: 'aatdropshipdb',
  password: 'imzee691',
  database: 'zameen_lms',
  host: '192.168.1.51',
  dialect: 'mysql' 
})


let db = {};

fs
  .readdirSync(__dirname)
  .filter(dir => {return (dir !== basename);})
  .forEach(dir => { 

      var knex = sequelize;
      let directory = __dirname + "/" + dir;

      fs
        .readdirSync(directory)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(file => { 

            let model = require(directory + "/"+file);

            let name = file.split(".");
            
            db[name[0]] = model(sequelize, Sequelize)
        });
  });

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  }
)

module.exports = db