import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
  name:{
    type:String,
    require:true
},

email:{
    type:String,
    require:true
},
addres:{
    type:String,
    require:true
},
state:{
    type:String,
    require:true
},
contry:{
    type:String,
    require:true
},

})
export default mongoose.model("user", userSchema);