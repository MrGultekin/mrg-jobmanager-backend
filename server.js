import dotenv from "dotenv";
import mongoose from "mongoose";
import { JobSource } from "./models/JobSource.js";
import express from "express";
import cors from 'cors';


dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mrg-jobmanager";
mongoose.connect(MONGODB_URI, (err) => {
  if (err) {
    console.log({
      error: "Cannot connect to MongoDB database.",
      err: `"${err}"`,
    });
  }
});

const app = express();
const port = process.env.PORT || 3045;
app.use(cors());


app.get("/", (req, res) => {
  res.send("<h1>Job Manager API</h1>");
});

app.get("/job-sources", async (req, res) => {
  const jobSources = await JobSource.find();
  res.status(200).json(jobSources);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
