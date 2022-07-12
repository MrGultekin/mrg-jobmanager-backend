import express from "express";

const app = express();
const port = process.env.PORT || 3045;

app.get("/", (req, res) => {
  res.send("<h1>Job Manager API</h1>");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
