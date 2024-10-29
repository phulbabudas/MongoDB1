const express = require('express'); // Express
const mongoose = require('mongoose'); // Mongoose  
const app = express();
const route =require("./route/index") 
app.use(express.json()); // JSON पार्सिंग के लिए
app.use('/', route); // रूट का उपयोग करें

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
app.use(bodyParser.json()); // json ko pass karne ke liye middilware ka use kare 

// MongoDB to connect me 
mongoose.connect('mongodb+srv://mongo-learning:QiONskrtrJrIcAvc@cluster0.9kl2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {

}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
  app.use("/",route)
  
   module.exports = app;

  