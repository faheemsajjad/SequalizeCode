const Sequelize = require('sequelize')
const Model = Sequelize.Model

class salgrade extends Model {

  static init(sequelize){
    return sequelize.define(salgrade.getTableName(),salgrade.getTableSchema());
  }

  static getTableName(){
    return 'salgrade';
  }

  static getTableSchema(){
    const schema = {
	    grade:{
	      type: Sequelize.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	      },
	    min:Sequelize.STRING,
	    max:Sequelize.STRING
	 }

    return schema;
  }
}

module.exports = salgrade;

module.exports = (sequelize) => {
  return salgrade.init(sequelize)
}