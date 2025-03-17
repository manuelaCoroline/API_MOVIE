import Comment from "../models/comment.model.js";

export const getAllComments=async(req,res) =>{
  try {
    const comments=await Comment.find();
  res.json(comments);
    
  } catch (err) {
    res.json({message:"ERREur serveur",error: err.message})
  }
}

export const createComments=async(req,res) =>{
  
  try {
    const newComment=await Comment.create(req.body);
    res.json(newComment);
    
  } catch (err) {
    res.json({message:"ERREur serveur",error: err.message})
  }
}

export const updateComments=async(req,res) =>{
  
  try {
    const id=req.params.id;
    const updatedData=req.body;
    const updatedComment=await Comment.findByIdAndUpdate(id,updatedData,{
      new:true,});
    res.json(updatedComment);
    
  } catch (err) {
    res.json({message:"ERREur serveur",error: err.message})
  }
}

export const deleteComments =async(req,res)=>{
  try {
    const id=req.params.id;
    const deletedComment=await Comment.findByIdAndDelete(id)
    res.json(deletedComment);
    
  } catch (err) {
    res.json({message:"ERREur serveur",error: err.message})
  }
}

export const getOneElement =async(req,res)=>{
  try {
    const id=req.params.id;
    const oneComment=await Comment.findById(id)
    res.json(oneComment);
    
  } catch (err) {
    res.json({message:"ERREur serveur",error: err.message})
  }
}