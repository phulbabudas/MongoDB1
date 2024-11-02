const express = require("express");
const PipeModule = require("../model/pipe");
const createCtrl = async (request, response) => {
  //localhost:9000/pipe
  const body = request.body;

  try {
    const Pipe = await PipeModule.create(body);
  } catch (error) {
    console.log(error);
    return response.status(400).send("error");
  }
  return response.status(200).send(body);
};
const readCtrl = async (req, res) => {
  const Pipe = await PipeModule.find({});
  res.send(Pipe);
};
const updateOne = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const update = await updateOne({ _id: id }, body);
  res.send(updateOne);
};
const deleteOne = async (req, res) => {
  const id = req.params.id;

  const deletedData = await deleteOne.deleteOne({ _id: id }); // delete

  res.send(deleteOne);
};

module.exports = { createCtrl, readCtrl, updateOne, deleteOne };
