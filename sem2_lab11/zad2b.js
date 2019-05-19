const Task = require("./task.model-zad2b");

(async () => {
  //   const task = new Task({
  //     label: "kupic banany",
  //     isCompleted: false
  //   });

  // save
  // await task.save();
  // console.log(task);

  // find one and change
  const task = await Task.findById("5cd7f1c8b6c5cd1914506f21");
  task.label = "kupic chleb";
  await task.save();
  console.log(task);
})();
