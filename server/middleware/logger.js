const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "..", "logs/server-log.log");

const Logger = (req, res, next) => {
  let x = Math.floor(Math.random() * 1000);
  let time = new Date();
  console.log(
    "#####################" +
      "\n" +
      "Request Id: " +
      x +
      "\n" +
      "Request Type: " +
      req.method +
      "\n" +
      "Request URL: " +
      "http://localhost" +
      req.url +
      "\n" +
      "Requet Timestamp: " +
      time +
      "\n" +
      "#####################"
  );
  const logMessage = `Request Id: ${x} \nRequest Type: ${req.method} \nRequest URL: http://localhost${req.url} \nRequet Timestamp: ${time}\n###########\n`; // log message  to be written to the log file   fs.appendFile() method is used to append the specified content to a file. If the file does not exist, the file will be created: fs.appendFile(filename, data, callback) filename: The name of the file. data: The content to append to the file. callback: This is the callback function which gets two arguments (err, data) where err is the error message if any error occurred during the file writing process. data is the content that is written to the file.
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error("Failed to write to log file", err);
    }
  });

  next();
};

module.exports = Logger;
