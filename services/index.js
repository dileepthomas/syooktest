// requring third party modules
const mongoose = require("mongoose");
// instance of user model
const user = mongoose.model("user")

module.exports = app => {
    // basic api
    app.get("/", (req, res) => {
        res.send({ data: "success" })
    })
    // api for fetching the user
    // api for saving user
    app.post("/api/user", (req, res) => {
        let data = {
            userName: req.body.firstName + req.body.lastName,
            userEmailId: req.body.emailId,
            userPassword: req.body.password
        }
        let newUser = new user(data);
        newUser.save((err, data) => {
            if (err) {
                return res.send(err)
            }
            res.send({ data })
        })
    })
}