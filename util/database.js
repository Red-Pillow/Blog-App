// util/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog', 'root', '1234567890', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
