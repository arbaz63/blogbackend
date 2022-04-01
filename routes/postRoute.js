const express = require('express');
const Posts = require('../models/PostsModel')
const router = express.Router();
const auth = require('../auth')

//get posts
router.get("/", async (req, res)=>{
    try {
        const post = await Posts.find({draft:false}).populate("author","_id name")
        res.json(post)
    } catch (err) {
        res.status(400).json(err)
    }
})

//get all posts of current logged in user
router.get("/userposts",auth, async (req, res)=>{
    try {
        const id= req.user.uid
        const post = await Posts.find({author:id})
        res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err)
    }
})

//create
router.post("/create",auth, async (req, res) => {

    try {
      
      const post = await Posts.create({
        title: req.body.title,
        body: req.body.body, 
        author: req.user.uid,
        draft:req.body.draft
      });
      res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err)
    }
  });
  
//delete
router.delete("/:id",auth, async (req, res) => {
    try {
        Posts.findByIdAndRemove(req.params.id, (err, doc) => {
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
    try {
        Posts.updateOne({_id:req.params.id},{$set:{title:req.body.title, body:req.body.body}}, (err, doc) => {
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

//Publish
router.put("/publish/:id", async (req, res) => {
    try {
        Posts.updateOne({_id:req.params.id},{$set:{draft:false}}, (err, doc) => {
            if (!err) {
                res.status(200).json({status:"published successfully"});
            } else {
                res.status(400).json({error:"Error in publishing post"})
            }
        });
    } catch (err) {
        res.status(400).json(err)
    }
});

//draft
router.put("/draft/:id", async (req, res) => {
    try {
        Posts.updateOne({_id:req.params.id},{$set:{draft:true}}, (err, doc) => {
            if (!err) {
                res.status(200).json({status:"Draft successfully"});
            } else {
                res.status(400).json({error:"Error in draft post"})
            }
        });
    } catch (err) {
        res.status(400).json(err)
    }
});
module.exports = router;