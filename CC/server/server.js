require("dotenv").config();
const express = require("express");
const db = require("./db");

var morgan = require("morgan");

const app = express();

app.use(express.json());

app.get("/getX1", async (req, res) => {
  res.status(200).json({
    status: "success",
    food: "burger",
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`gserver is up and listening on port ${port}`);
});
