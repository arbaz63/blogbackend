const express = require('express');
const Comments = require('../models/CommentsModel')
const router = express.Router();
const auth = require('../auth')

//create
router.post("/create",auth, async (req, res) => {

    console.log(req.body.body)
    try {
      
      const comment = await Comments.create({
        body: req.body.body,
        post: req.body.post, 
        author: req.user.uid, //req.user.name
      });
      console.log('comment')
      res.status(200).json(comment);
    } catch (err) {
        res.status(400).json(err)
    }
  });

//get all comments of current post
router.post("/:id", async (req, res)=>{
    try {
        const comments = await Comments.find({post:req.params.id}).populate('author',"_id name")
        res.status(200).json(comments)
    } catch (err) {
        res.status(400).json(err)
    }
})

  
//delete
router.delete("/:id",auth, async (req, res) => {
    try {
        Comments.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {
                res.status(200).json({status:"Deleted successfully"});
            } else {
                res.status(400).json({error:"Error in deleting post"})
            }
        });
    } catch (err) {
        res.status(400).json(err)
    }
});

//update
router.put("/:id",auth, async (req, res) => {
    console.log(req.body.body)
    try {
        Comments.updateOne({_id:req.params.id},{$set:{body:req.body.body}}, (err, doc) => {
            if (!err) {
                res.status(200).json({status:"Updated successfully"});
            } else {
                res.status(400).json({error:"Error in updating post"})
            }
        });
    } catch (err) {
        res.status(400).json(err)
    }
});
module.exports = router;