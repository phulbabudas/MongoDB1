const express = require("express");
const mongoose = require("mongoose");

const productModel = require("./productModel");
const product = require("./productModel");

const app = express();
const port = 4000;
console.clear();
// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://mongo-learning:QiONskrtrJrIcAvc@cluster0.9kl2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// body-parser
app.use(express.json());

/**
 * routes
 * middleware
 */

//costom middileware to validate  body data for  create
const validateBody = (req, res, next) => {
  const incomingData = req.body;
  //console.log(incomingData);
  if (!incomingData.productName) {
    return res.status(400).send("productName is required, fill");
  }

  if (!incomingData.pricePerKg) {
    return res.status(400).send("pricePerKg is required, fill");
  }
  const pricePerKg = incomingData.pricePerKg;
  if (pricePerKg <= 0) {
    return res.status(400).send("pricePerKg must been in zero");
  }
  if (!incomingData.stockInKg) {
    return res.status(400).send("stockInKg is required, fill");
  }
  const stockInKg = incomingData.pricePerKg;
  if(pricePerKg <=10){
    return res.send("pricePerKg must been or ten")
  }
  console.log(incomingData.unitBag)
  if (!incomingData.unitBag) {
    return res.send("unitBag is required, fill");
  }
  const unitBag = incomingData.unitBag;
  if(typeof unitBag !== "number")
  {
    return res.send("uniBag must be a number")
  }
  console.log(typeof unitBag)
  if (unitBag>=50){
    return res.send("Unit bag will be less than zero or fifty")
  }
  // next();
};
app.post("/create", validateBody, async (req, res) => {
  //localhost:4000/product
  //devloper
});
app.post("/create", async (req, res) => {
  try {
  const body = req.body;
  console.log(body);
  const product = await productModel.create(body); // create
  res.send(body);
  } catch (error) {
    res.status(500).send("enternar server error");
    console.error(error);
  }
  
});

app.get("/read", async (req, res) => {
  try {
  const product = await productModel.find({}); // read
  res.send(product);
  console.log(product)
  } catch(error){
    res.status(500).send("internal server error");
    console.error(error);
  }
  
});
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  //update
  try{
    const product = await productModel.updateOne({ _id: id }, body);
    //console.log(body);
    res.send(product);
  }catch (error) {
res.status(500).send("internal server error");
console.error(error);
  }
  });
  


app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deletedData = await productModel.deleteOne({ _id: id }); // delete
  console.log(product);
  res.send(deletedData);
});

app.listen(port, () => {
  console.log(`crud app listening on port number ${port}`);
});
