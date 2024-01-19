// const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv");
const mongoose = require("mongoose");
// load env vars
// const config = require("./config");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/practice_mongodb", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
        
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  connectDb,
};

// const sequelize = new Sequelize(
//   config.DB_NAME,
//   config.DB_USERNAME,
//   config.DB_PASSWORD,
//   {
//     host: config.DB_HOST,
//     port: config.DB_PORT,
//     dialect: "postgres",
//     logging: false,
//     define: {
//       underscored: true,
//       createdAt: "created_at",
//       updatedAt: "updated_at",
//     },
//   }
// );

// const connectPostgreSQL = () => {
//   sequelize
//     .authenticate()
//     .then(() =>
//       console.log(`PostgreSQl Database connected successfull`.yellow.bold)
//     )
//     .catch((err) => console.log(`Error ${err}`));
// };

// module.exports = {
//   sequelize,
//   Sequelize,
//   connectPostgreSQL,
// };
