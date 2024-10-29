const express = require ("express")
const route = express.Router();
const {createCtrl, deleteone , readCtrl,updateOne} = require("../controller/index.js");
const app = require("../index.js");
const validateBody = (req,res , next) =>{
const incomingData = req.body;

};

 route .post('/create', async (req,res) => {
    try {
        const Pipe = new Pipe(req.body);
        await Pipe.save();
        res.status(201).send(pipe);
    } catch (error) {
        res.status(400).send(error);
    }
});
route.get('/read', async (req, res) => {
    try {
        const Pipe = await Pipe.find();
        res.status(200).send(pipes);
    } catch (error) {
        res.status(400).send(error);
    }
});
route.put('/update/:id', async (req, res) => {
    try {
        const Pipe = await Pipe.findByIdAndupdate(req.params.id);
        if (!Pipe) {
            return res.status(400).send();
        }
        res.send(Pipe);
    } catch (error) {
        res.status(400).send(error);
    }
});
route.delete('/delete/:id', async (req, res) => {
    try {
        const Pipe = await Pipe.findByIdAndDelete(req.params.id);
        if (!Pipe) {
            return res.status(400).send();
        }
        res.send(Pipe);
    } catch (error) {
        res.status(400).send(error);
    }
});
app.use('/', route); 
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
     console.log(`Server is running on ${PORT}`);
}); 
route.post("/create", createCtrl);

route.get("/read", readCtrl);

route.put("/update/:id",updateOne)

route.delete("/delete/:id" ,deleteone)

module.exports =route
