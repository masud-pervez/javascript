
const mongoose = require("mongoose");
const connectdb = async () => {
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
  connectdb,
};
