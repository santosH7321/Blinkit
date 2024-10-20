import "dotenv/config";
import express from "express";
import { connectDB } from "./src/config/connect.js";

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.listen({ port: PORT, host: "0.0.0.0" }, (err, addr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Blinkit server listening on ${PORT}`);
    }
  });
};

start();
