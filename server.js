const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const axios = require('axios');

const app = express();

var reactViews = require('express-react-views');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

console.log("HELLOOOO");

const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const mongoUrl = `mongodb+srv://0253018:5GjE2lGFkLpI3hUF@cluster0.vmafkex.mongodb.net/users?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});
userSchema.set("strictQuery", true)
const User = mongoose.model("User", userSchema)

var apiPath = "";

if (process.env.NODE_ENV === "production") {

    apiPath = "/api";

}

axios.post(apiPath + "/Signin", {

    user: userProfile.user,

    pass: userProfile.password,

})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.route("/")
    .get((req, res) => {
        res.render("App");
    })
    .post((req, res) => {
        res.redirect("/");
    })

app.route("/Map")
    .post(async (req, res) => {
        const { username, email } = req.body.user;
        // Check if the username or email already exists
        const userExists = await User.findOne({ $or: [{ email }, { password }] }).exec();

        if (userExists) {
            // If user exists, send a conflict status code
            res.status(409).json({ message: "Username or email already registered." });
        } else {
            // If user does not exist, create a new user
            const newUser = new User({
                email: req.body.user.name,
                password: req.body.user.password,
            });
            await newUser.save();
            res.status(201).json(newUser);
        }
    });



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log("Listening to port " + PORT);

});