const postController = require('../controllers/postController')
const auth = require('../middlewares/auth')
const validatePost = require('../middlewares/validatePost')

module.exports = (app) => {
    //get posts
    app.get("/posts/", postController.getAllPosts)

    //get single post
    app.get("/posts/:id", postController.getSinglePost)
    //get all posts of current logged in user
    app.post("/posts/userposts", auth, postController.getUserPosts)

    //create
    app.post("/posts/create", auth, validatePost, postController.createPost);

    //delete
    app.delete("/posts/:id", auth, postController.deletePost);

    //update
    app.put("/posts/:id", auth, validatePost, postController.update);

    //Publish
    app.put("/posts/publish/:id", auth, postController.publish);

    //draft
    app.put("/posts/draft/:id", auth, postController.draft);
}