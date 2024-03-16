
const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://172.17.0.2:27017/practice_mongodb", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    });
    console.log("Database connection successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  connectdb,
};
