const express = require("express");
const bodyParser = require("body-parser");
const Patient = require("./models/patient");

const app = express();
app.use(bodyParser.json());

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://soroushby:heNuE5e9pRnhj0lF@clinic.zpmgh.mongodb.net/clinic?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to data base");
  });

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
  const patient = new Patient({
    name: req.body.name,
    age: req.body.age,
    number: req.body.number,
    parity: req.body.parity,
  });
  patient.save();
  console.log(patient);
});

app.get("/api/patients", (req, res, next) => {
  Patient.find().then((data) => {
    res.status(200).json({ message: "im the response", patients: data });
  });
});

app.delete("/api/patients/:id", (req, res, next) => {
  Patient.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "patient deleted" });
  });
});

module.exports = app;
