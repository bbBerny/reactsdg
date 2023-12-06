const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt'); 

const app = express();

var reactViews = require('express-react-views');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

console.log("HELLOOOO");

const mongoUrl = `mongodb+srv://0253018:5GjE2lGFkLpI3hUF@cluster0.vmafkex.mongodb.net/users?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});
userSchema.set("strictQuery", true)
const User = mongoose.model("User", userSchema);

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

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
        const { email, password } = req.body.logInForm;

        // Check if the username or email already exists
        const userExists = await User.findOne({ email }).exec();

        if (userExists) {
            // If user exists, send a conflict status code
            res.status(409).json({ message: "Username or email already registered." });
            console.log("Registered");

            if (userExists.comparePassword && await userExists.comparePassword(password)) {
                // Passwords match, authentication successful
                res.status(200).json({ message: "Authentication successful" });
            } else {
                // Passwords do not match, send an unauthorized status code
                res.status(401).json({ message: "Authentication failed. Incorrect password." });
            }
        } else {
            // If user does not exist, create a new user
            const newUser = new User({
                email: email,
                password: password,
            });
            await newUser.save();
            res.status(201).json(newUser);
            console.log("New user created ------------------------------------");
        }
    });




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log("Listening to port " + PORT);

});