const express = require("express");
const route = express.Router();
const {
  createCtrl,
  deleteOne,
  readCtrl,
  updateOne,
} = require("../controller/index.js");

const validateBody = (req, res, next) => {
  const incomingData = req.body;
};



route.post("/create", createCtrl);

route.get("/read", readCtrl);

route.put("/update/:id", updateOne);

route.delete("/delete/:id", deleteOne);

module.exports = route;
