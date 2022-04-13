const commentController = require('../controllers/commentController')
const auth = require('../middlewares/auth')
const validateComment = require('../middlewares/validateComment')

module.exports = (app) => {
    //create
    app.post("/comments/create", auth, validateComment, commentController.createComment);
    
    //get all comments of current post
    app.post("/comments/:id", commentController.getAllComments)
    
    
    //delete
    app.delete("/comments/:id", auth, commentController.deleteComment);
    
    //update
    app.put("/comments/:id", auth, validateComment, commentController.updateComment);
}