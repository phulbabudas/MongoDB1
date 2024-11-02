const express = require("express");
const  mongoose  = require("mongoose");
const pipeSchema = new mongoose.Schema({

  
  pipename: {
    type: String,
    required: true,
  }, // pipe ka name
  meterial: {
    type: String,
    require: true,
  }, // pipe ka meterial (PVC)
  pipesize: {
    type: String,
    require: true,
  }, // pipe ka size ( 2 inch )

  diameter: {
    type: Number,
    require: true,
  }, // diametar pipe in cm
  length: {
    type: Number,
    require: true,
  }, // lenght of the pipe in meter
  application: {
    type: String,
    require: true,
  }, // Application area plumbing

  pipeprice: {
    type: Number,
    require: true,
  }, // pipe price per unit
  pipequantity: {
    type: Number,
    require: true,
  }, //Quantity in stock
  pipeSellingPrice: {
    type: Number,
    require: true,
  }, //Selling price
  piperetailPrice: {
    type: Number,
    require: true,
  }, //retail price
});


const Pipe = mongoose.model("Pipe", pipeSchema);
module.exports = Pipe;