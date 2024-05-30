const express = require("express");
const Logger = require("./middleware/logger");
const app = express();
const port = 7700;

// uncomment below to use the logger middleware
// but first you will need to run npm run setup-logs
// this will create the server/logs folder that will be used to store the server logs
// app.use(Logger);

app.get("*", (req, res) => {
  res.send("###### request endpoint not found. #######");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
