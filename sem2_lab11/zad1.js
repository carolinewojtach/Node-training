const MongoClient = require("mongodb").MongoClient;

(async () => {
  const url = "mongodb://localhost:27017";
  const dbName = "users";

  const client = await MongoClient.connect(url, { useNewUrlParser: true });

  const db = client.db(dbName);
  const usersCollection = db.collection("users");

  // insert
  // const result = await usersCollection.insertOne({ name: "piotr" });

  // change
  // const result = await usersCollection
  //   .updateMany({ name: "Adam" }, { $set: { name: "Jan" } });

  // get all
  const result = await usersCollection.find().toArray();
  console.log(result);
})();
