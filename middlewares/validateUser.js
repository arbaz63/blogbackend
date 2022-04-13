const Constants = require('../constants')
const Users = require('../models/UsersModel')
const {
    emailError,
    nameError,
    passwordError,
    registerRequired,
    userExist,
    loginRequired
} = Constants
const validateSignup = async (req, res, next) => {
    const {
        name,
        email,
        password
    } = req.body
    if (name && email && password) {
        const oldUser = await Users.findOne({
            email
        });
        if (oldUser) {
            return res.status(400).json(userExist);
        }
        //validations
        const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        const valid = emailRegex.test(email);
        if (!valid)
            return res.status(400).json({
                Error: emailError
            })
        if (name.length < 3)
            return res.status(400).json({
                Error: nameError
            })
        if (password.length < 3)
            return res.status(400).json({
                Error: passwordError
            })

    } else {
        res.status(400).json({
            Error: registerRequired
        })
    }
    next()
};

const validateLogin = (req, res, next) => {
    const {
        email,
        password
    } = req.body
    if (!(email && password)) {
        res.status(400).json({
            Error: loginRequired
        })

    }
    next()
};
module.exports = {
    validateSignup,
    validateLogin
};