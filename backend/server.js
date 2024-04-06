const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const router =express.Router();

const app = express();
require("./auth.js");
const PORT = process.env.PORT || 5000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

function isLoggedIn(req, res , next){
    req.user ? next():res.sendStatus(401);
}

app.get('/', (req,res)=>{
    res.sendFile('index.html');
});

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure'
}));

app.get('/auth/google/failure',isLoggedIn, (req, res)=>{
    res.send("Something went wrong!");
});


app.get('/auth/protected',isLoggedIn, (req, res)=>{
    let name = req.user.displayName;
    res.send(`Hello ${name}!`);
});


app.use("/api/users", router);

mongoose.connect("mongodb://127.0.0.1:27017/parichayy")

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const UserModel = mongoose.model("user", UserSchema)

app.get("/",(req,res)=>{
res.send("Welcome!");
});

app.get("/getUsers",(req,res)=>{
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        console.log(err)
    })
})

app.listen(PORT, ()=>{
    console.log("Server is running.")
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
})