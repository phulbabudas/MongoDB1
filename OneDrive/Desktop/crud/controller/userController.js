import User from "../model/userModel.js"

export const create = async (req, res)=>{
    try {
       const userData = new User(req.body);
      const {email}=userData;
      const userExist = await User.findOne(email)
      if(userExist){
        return res.status(400).json({message : "User allready exists."});

      }
      const savedUser = await userData.save();
      res.status(200).json(savedUser);
    } catch (error) {
        res.status(300).json({error:"internar server error."})  
    }
}

export const fetch = async (req,res)=>{
    try{
  return res.jon("Hello wold.")
    } catch (error)
{
    res.status(300).json({error:"internar server error."})
}
}