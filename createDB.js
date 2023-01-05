var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("hunters");
database.dropDatabase()
database = client.db("hunters");
const hunters = database.collection("hunters");
const result = await hunters.insertMany(data);
console.log(`${result.insertedCount} documents were inserted`);
for (const key in result) {
            console.log(`${key}: ${result[key]}`);
            }
} finally {
await client.close();
}
}
run()
