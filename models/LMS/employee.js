const Sequelize = require('sequelize')
const Model = Sequelize.Model

class employee extends Model {

  static init(sequelize){
    return sequelize.define(employee.getTableName(),employee.getTableSchema());
  }

  static getTableName(){
    return 'employee';
  }

  static getTableSchema(){
    const schema = {
        id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	    },
		emp_name:Sequelize.STRING,
		designation:Sequelize.STRING,
		manager_id:Sequelize.INTEGER,
		hire_date:
		{ 
			type: Sequelize.DATE, 
			defaultValue: Sequelize.NOW 
		},
		salary:Sequelize.INTEGER
    }

    return schema;
  }

  static getAssociations(allModels){
  	allModels.employee.belongsTo(allModels.dept);
  }
}

module.exports = (sequelize) => {
	var emp 		= employee.init(sequelize)
	emp.associate  	= function(allModels){employee.getAssociations(allModels);}  ;

	return emp;
}