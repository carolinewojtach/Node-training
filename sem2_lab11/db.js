const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "todo-list";

let client;

module.exports = async () => {
  if (!client) {
    client = await MongoClient.connect(url, { useNewUrlParser: true });
  }
  return client.db(dbName);
};
