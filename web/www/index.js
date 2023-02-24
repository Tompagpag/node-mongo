import express from "express";
const app = express();
import mongoose from "mongoose";
//--------------------------------------------------------------------
// Connexion à MongoDB
//--------------------------------------------------------------------
mongoose.connect(config.mongodb, {
  connectTimeoutMS: 3000,
  socketTimeoutMS: 20000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log(`Connexion au serveur MongoDB OK`);
});

app.listen(80);
