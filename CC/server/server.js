require("dotenv").config();
const express = require("express");

const app = express();

app.get("/getX1", (req, res) => {
  res.status(404).json({
    status: "success",
    food: "burger"
  });
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`gserver is up and listening on port ${port}`);
});
