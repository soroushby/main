const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS,PUT"
  );
  next();
});

app.post("/api/patients", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({ message: "successful" });
});
app.get("/api/patients", (req, res, next) => {
  const patients = [
    { name: "maryam", age: 32, number: 461789417947891 },
    { name: "maryami", age: 99, number: 4691 },
  ];
  res.status(200).json({ message: "im the response", patients });
});

module.exports = app;
