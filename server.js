import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { JobSource } from './models/JobSource.js';
import express from "express";


 dotenv.config();

 const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mrg-jobmanager';
 mongoose.connect(MONGODB_URI)

const app = express();
const port = process.env.PORT || 3045;

app.get("/", (req, res) => {
  res.send("<h1>Job Manager API</h1>");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
