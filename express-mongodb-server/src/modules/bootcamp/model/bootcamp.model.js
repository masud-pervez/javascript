const { Schema, model } = require("mongoose");

const bootcampModel = new Schema({
  name: String,
  website: String,
  address: String,
  location: String,
  slug: String,
  description: String,
});

module.exports = model("bootcamps", bootcampModel);
