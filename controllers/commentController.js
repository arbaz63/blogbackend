const Comments = require('../models/CommentsModel')
const Constants = require('../constants')
const commentService = require('../services/commentService')
//create
const createComment = async (req, res) => {
    commentService.createComment(req,res)
};

//get all comments of current post
const getAllComments = async (req, res) => {
    commentService.getAllComments(req,res)
}


//delete
const deleteComment = async (req, res) => {
    commentService.deleteComment(req,res)
}

//update
const updateComment = async (req, res) => {
    commentService.updateComment(req,res)
    
}

module.exports = {
    createComment,
    getAllComments,
    deleteComment,
    updateComment
}