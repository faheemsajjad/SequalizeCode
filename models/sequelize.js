require("dotenv").config({ path: require('app-root-path') + "/.env" });
const Sequelize = require('sequelize')
const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, 
{ 
  host: process.env.DB_HOST,
  dialect: 'mysql',
  'port' : 3306
})


let db = {};

fs
  .readdirSync(__dirname)
  .filter(dir => {return (dir !== basename);})
  .forEach(dir => { 

      let directory = __dirname + "/" + dir;

      fs
        .readdirSync(directory)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(file => { 

            var model = sequelize['import'](path.join(directory, file));

            db[model.name] = model;
        });

         Object.keys(db).forEach(modelName => {
          if (db[modelName].associate) {
            db[modelName].associate(db);
          }
        });


  });

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  }
)

module.exports = db