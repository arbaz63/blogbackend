const userController = require('../controllers/userController')
const {validateSignup, validateLogin} = require('../middlewares/validateUser')

module.exports = (app)=>{
    //signup
    app.post("/users/signup", validateSignup, userController.signup);
    
    //login
    app.post("/users/login", validateLogin, userController.login);
}