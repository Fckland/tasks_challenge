const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  password: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Task", taskSchema);
