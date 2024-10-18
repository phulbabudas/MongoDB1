const express = require('express')
const mongoose = require('mongoose')

const productModel = require("./productModel")
const product = require('./productModel')

const app = express()
const port = 4000;


// Connect to MongoDB
mongoose.connect("mongodb+srv://mongo-learning:QiONskrtrJrIcAvc@cluster0.9kl2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err))


// body-parser
app.use(express.json())

/**
 * routes
 * middleware
 */

//costom middileware to validate  body data for  create
const validateBody  = (req,res,next) => {
  if (!incomingData.name){
return res.send("productName is required, fill")

  }
  
    if (!incomingData.name){
      return res.send("pricePerKg is required, fill")
        
  }
  if (!incomingData.name){
    return res.send("stockInKg is required, fill")
      
}
if (!incomingData.name){
  return res.send("unitBag is required, fill")
    
}
next()
}


app.post("/create", async (req, res) => {
  const body = req.body;
  console.log(body)
  const product = await productModel.create(body) // create
  console.log(body)
  res.send(body)
})

app.get("/read", async (req, res) => {
  const product = await productModel.find({}) // read
  console.log(product)
  res.send(product)
})
app.put("/update/:id", async(req, res) => {
  const id = req.params.id;
  const body = req.body;
  //update
  const product = await productModel.updateOne({_id: id}, body)
  console.log(body)
  res.send(product)
})

app.delete("/delete/:id", async(req, res) => {
  const id = req.params.id;
  const deletedData = await productModel.deleteOne({_id: id}) // delete
  console.log(product)
  res.send(deletedData)
})

app.listen(port, () => {
  console.log(`crud app listening on port number ${port}`)
})



