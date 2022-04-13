const Posts = require("../models/PostsModel");
const Comments = require("../models/CommentsModel");
const Constants = require("../constants");
const {
    success
} = Constants;
//gett posts
const getAllPosts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * pageSize;
    try {
        const post = await Posts.find({
                draft: false
            })
            .populate("author", "_id name")
            .sort({
                createdAt: -1
            })
            .skip(skip)
            .limit(pageSize);
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err);
    }
};

//get single post
const getSinglePost = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const post = await Posts.findById(id).populate(
            "author",
            "_id name"
        );
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

//get all posts of current logged in user
const getUserPosts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * pageSize;
        const id = req.user.uid;
        const post = await Posts.find({
                author: req.user.uid
            })
            .sort({
                createdAt: -1
            })
            .skip(skip)
            .limit(pageSize);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

//create
const createPost = async (req, res) => {
    const {
        title,
        body,
        draft
    } = req.body;
    try {
        const post = await Posts.create({
            title,
            body,
            author: req.user.uid,
            draft,
        });
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err);
    }
};

//delete
const deletePost = async (req, res) => {
    try {
        const {
            id
        } = req.params
        Posts.findByIdAndRemove(id, (err, doc) => {
            if (!err) {
                Comments.deleteMany({
                    post: id
                }, (err, doc) => {
                    if (!err) {
                        res.status(200).json({
                            status: success
                        })
                    }
                });
            }
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

//update
const update = async (req, res) => {
    try {
        const {
            title,
            body
        } = req.body;
        const {
            id
        } = req.params
        Posts.updateOne({
                _id: id
            }, {
                $set: {
                    title,
                    body
                }
            },
            (err, doc) => {
                if (!err) {
                    res.status(200).json({
                        status: success
                    })
                }
            }
        );
    } catch (err) {
        res.status(500).json(err);
    }
};

//Publish
const publish = async (req, res) => {
    try {
        const {
            id
        } = req.params
        Posts.updateOne({
                _id: id
            }, {
                $set: {
                    draft: false
                }
            },
            (err, doc) => {
                if (!err) {
                    res.status(200).json({
                        status: success
                    })
                }
            }
        );
    } catch (err) {
        res.status(500).json(err);
    }
};

//draft
const draft = async (req, res) => {
    try {
        const {
            id
        } = req.params
        Posts.updateOne({
                _id: id
            }, {
                $set: {
                    draft: true
                }
            },
            (err, doc) => {
                if (!err) {
                    res.status(200).json({
                        status: success
                    })
                }
            }
        );

    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getAllPosts,
    getSinglePost,
    getUserPosts,
    createPost,
    deletePost,
    update,
    publish,
    draft
}