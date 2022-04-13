const Comments = require('../models/CommentsModel')
const Constants = require('../constants')
const {
    success,
} = Constants
//create
const createComment = async (req, res) => {
    const {
        post,
        body
    } = req.body
    const id = req.user.uid
    try {
        const comment = await Comments.create({
            body,
            post,
            author: id
        });
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err)
    }
};

//get all comments of current post
const getAllComments = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const comments = await Comments.find({
            post: id
        }).populate('author', "_id name")
        res.status(200).json(comments)
    } catch (err) {
        res.status(500).json(err)
    }
}


//delete
const deleteComment = async (req, res) => {
    try {
        const {
            id
        } = req.params
        Comments.findByIdAndRemove(id, (err, doc) => {
            if (!err) {
                res.status(200).json({
                    status: success
                })
            }
        });
    } catch (err) {
        res.status(500).json(err)
    }
}

//update
const updateComment = async (req,res) => {
    const {
        body
    } = req.body
    const {
        id
    } = req.params
    try {
        Comments.updateOne({
            _id: id
        }, {
            $set: {
                body
            }
        }, (err, doc) => {
            if (!err) {
                res.status(200).json({
                    status: success
                })
            }
        });
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createComment,
    getAllComments,
    deleteComment,
    updateComment
}