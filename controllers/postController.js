const Posts = require("../models/PostsModel");
const Comments = require("../models/CommentsModel");
const Constants = require("../constants");
const postService = require('../services/postService')
const {
    success
} = Constants;
//gett posts
const getAllPosts = async (req, res) => {
    postService.getAllPosts(req, res)
};

//get single post
const getSinglePost = async (req, res) => {
    postService.getSinglePost(req, res)
};

//get all posts of current logged in user
const getUserPosts = async (req, res) => {
    postService.getUserPosts(req, res)
};

//create
const createPost = async (req, res) => {
    postService.createPost(req, res)
};

//delete
const deletePost = async (req, res) => {
    postService.deletePost(req, res)
};

//update
const update = async (req, res) => {
    postService.update(req, res)
};

//Publish
const publish = async (req, res) => {
    postService.publish(req, res)
};

//draft
const draft = async (req, res) => {
    const drafted = postService.draft(req, res)
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