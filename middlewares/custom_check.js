const Task = require("../models/task");

const taskExists = async (req, res, next) => {
  const { name } = req.body;
  const filter = (await Task.find({ name }));
  if (filter.length>=1) {
    return res.status(400).json({ message: "Task already exists" });
  }
  next();
};

module.exports = {
  taskExists,
};
