import Task from "../models/task.js";


//Create(post)
export async function Create(req,res){
 try {
    var task = new Task({
        ...req.body,
    });
    const result = await task.save();
    return res.status(201).json({
        task: result,
    });
 } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
 }
}
//find by id
export async function FindById(req,res){
    try {
     
       const result = await Task.findById(req.params.id);
       return res.status(201).json({
           task: result,
       });
    } catch (error) {
       return res.status(500).json({ message: "Internal server error", error: error.message });
    }
   }

//Read ALL(get)
export function GetAll(req,res){
    Task
    .find({})
    .then(docs =>{
        res.status(200).json(docs);
    })
    .catch(err=>{
        res.status(200).json(users);
    });
}

//Update many docs
export function UpdateAll(req,res){
    Task
    .updateMany({},{})
    .then(doc =>{
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    });
}

//Update one doc
export async function UpdateOnce(req,res){
   try {
    var task = await Task.findById(req.params.id)

    if (!task) {
        return res.status(404).json({
            message: "Task not found!",
        });
    }

    const updatedTask = await Task.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true }
    );

    return res.status(200).json({
        task: updatedTask,
    });
   } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error", error: error });

   }
}


//Delete one doc 
export function DeleteById(req,res){
    Task
    .findByIdAndDelete(req.params.id)
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    });
}

//Delete many docs
export function DeleteAll(req,res){
    Task
    .deleteMany({})
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error:err});
    });
}