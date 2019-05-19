// with mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo-list", {
  useNewUrlParser: true
});

module.exports = mongoose.model("todo-list", {
  label: String,
  isCompleted: Boolean
});
