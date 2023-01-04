var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("hunters");
database.dropDatabase()
database = client.db("hunters");
const hunter = database.collection("hunter");
const result = await hunter.insertOne({name:"Alec"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
