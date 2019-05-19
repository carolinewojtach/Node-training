const Task = require("./task.model-zad2a");

(async () => {
  const task = new Task({
    label: "kupic jajka",
    isCompleted: false
  });

  await task.save();

  console.log(task);
})();
