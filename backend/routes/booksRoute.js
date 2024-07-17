import express from "express";
import { Book } from "../bookmodels.js";
const router=express.Router()


router.post('/',async (req,res)=>{
  try{
    if(
      !req.body.title ||
      !req.body.author ||
      !req.body.publishyear 
    ){
      return res.status(400).send({
        meassage:'send all required feilds title,author, publishyear'
      })
    }

    const newBook={
      title:req.body.title,
      author:req.body.author,
      publishyear:req.body.publishyear,
    };

    const book= await Book.create(newBook);

    return res.status(201).send(book);

  } catch (err){
    console.log(err)
    res.status(500).send({message:err.message});
  }
})

router.get('/',async (req,res)=>{

  try{
    const books=await Book.find({});
    return res.status(200).json({
      count:books.length,
      data:books
    });
  }catch(err){
    console.log(err.meassage)
    res.status(500).send({meassage:err.meassage});
  }
});

router.get('/:id',async (req,res)=>{

  try{

    const {id}=req.params;

    const book=await Book.findById(id);  
    return res.status(200).json(book);
  }catch(err){
    console.log(err.meassage)
    res.status(500).send({meassage:err.meassage});
  }
});

router.put('/:id',async(req,res)=>{
  try{
    if(
      !req.body.title ||
      !req.body.author ||
      !req.body.publishyear 
    ){
      return res.status(400).send({
        meassage:'send all required feilds title,author, publishyear'
      })
    }

    const {id}=req.params;

    const result = await Book.findByIdAndUpdate(id,req.body)
    if(!result){
      return res.status(404).json({meassage:'Book Not found'})
    }

    return res.status(200).send({message:'Book updated successfully'})

  }catch(err){
    console.log(err.meassage)
    res.status(500).send({message: err.meassage})
  }
})


router.delete('/:id',async (req,res)=>{
  try{

    const {id}=req.params;
    const result = await Book.findByIdAndDelete(id)
    if(!result){
      return res.status(404).json({meassage:'Book Not found'})
    }
    return res.status(200).send({message:'Book deleted successfully'})

  }
  catch(err){
    console.log(err.meassage)
    res.status(500).send({message: err.meassage})
  }
})

export default router;