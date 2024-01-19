const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')

// load env vars
const config = require('./config')
// dotenv.config({ path: './src/config/config.env' });

const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USERNAME,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        port: config.DB_PORT,
        dialect: 'postgres',
        logging: false,
        define: {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const connectPostgreSQL = () => {
    sequelize.authenticate()
        .then(() => console.log(`PostgreSQl Database connected successfull`.yellow.bold))
        .catch((err) => console.log(`Error ${err}`))
}

module.exports = {
    sequelize,
    Sequelize,
    connectPostgreSQL
}