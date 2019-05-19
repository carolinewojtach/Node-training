const { ObjectId } = require("mongodb");
const dbInstance = require("./db");

(async () => {
  const db = await dbInstance();
  const todosCollection = db.collection("todos");

  const task = {
    label: "kupic mleko",
    isCompleted: false
  };

  const task2 = {
    label: "kupic jajka",
    isCompleted: false
  };

  // insert
  //   const result = await todosCollection.insertOne(task);

  //   change
  //   const result = await todosCollection.updateOne(
  //     { _id: ObjectId("5cd7daf2cd799633d093bca4") },
  //     { $set: task2 }
  //   );

  //   get all
  //   const result = await todosCollection.find().toArray();
  //   console.log(result);

  //   delete
  const result = await todosCollection.deleteOne({
    _id: ObjectId("5cd7daf2cd799633d093bca4")
  });
  console.log(result);
})();
