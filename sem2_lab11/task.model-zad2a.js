// without mongoose
const dbInstance = require("./db");

module.exports = class Task {
  //   constructor(label, isCompleted) {
  //     this.label = label;
  //     this.isCompleted = isCompleted;
  //   }

  //to samo
  constructor(task) {
    Object.assign(this, task);
  }
  async save() {
    const db = await dbInstance();
    return await db.collection("todos").insertOne(this);
  }
};
