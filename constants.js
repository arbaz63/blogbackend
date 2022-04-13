const Constants = {
    titleError: "Title should be atleast 3 characters long",
    bodyError: "Body should be atleast 3 characters long",
    requiredPostError: "Fill all fields",
    serverError: "Server error",
    commentRequired: "Comment is required",
    nameRequired: "Name is required",
    passwordRequired: "Password is required",
    emailRequired: "Email is required",
    emailError: "Email is invalid",
    nameError: "Name should be atleast 3 characters long",
    passwordError: "Password should be atleast 3 characters long",
    emailReg: /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
    invalidCredentials: "Invalid credentials",
    userExist: "User already exist",
    registerRequired: "Name, email and password is required",
    success: "Success",
    loginRequired: "Email and password id required",
    postRequired: "Post is required"
}

module.exports = Constants