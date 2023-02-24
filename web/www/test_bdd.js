import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import mongoose from "mongoose";

const mongoConfig =
  "mongodb+srv://tompagpro:tvcTD7siEUeHebav@cluster0.r9hjvfn.mongodb.net/?retryWrites=true&w=majority";

console.log(`${mongoConfig}\n\n`);

mongoose.connect(mongoConfig, {
  connectTimeoutMS: 3000,
  socketTimeoutMS: 20000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log(`connexion OK !`);
});


// import { MongoClient, ServerApiVersion } from "mongodb";
// const uri =
//   ;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   console.log('connection OK !')
//   // perform actions on the collection object
//   client.close();
// });
