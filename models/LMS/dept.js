const Sequelize = require('sequelize')
const Model = Sequelize.Model

class dept extends Model {

  static init(sequelize){
    return sequelize.define(dept.getTableName(),dept.getTableSchema());
  }

  static getTableName(){
    return 'dept';
  }

  static getTableSchema(){
    const schema = {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        dname: Sequelize.STRING,
        dloc:Sequelize.STRING
    }

    return schema;
  }
}

module.exports = (sequelize) => {
  return dept.init(sequelize)
}

