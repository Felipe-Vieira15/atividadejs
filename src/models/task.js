const database = require('../config/database');
const User = require('../models/user');
const Project = require('../models/project');

class Task {
    constructor() {
        this.model = database.db.define('tasks', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.db.Sequelize.STRING
            },
            status: {
                type: database.db.Sequelize.STRING
            }
        });
        this.model.belongsTo(User, { foreignKey: 'id' });
        this.model.belongsTo(Project, { foreignKey: 'id' });
    }
}

module.exports = (new Task).model;