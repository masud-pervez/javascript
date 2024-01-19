const { Sequelize, sequelize } = require("../../../config/db");

const bootcampModel = sequelize.define('bootcamps', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: Sequelize.STRING,
    website: Sequelize.STRING,
    address: Sequelize.STRING,
    location: Sequelize.STRING,
    slug: Sequelize.STRING,
    description: Sequelize.STRING
})


module.exports = bootcampModel;