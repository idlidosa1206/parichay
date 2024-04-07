const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const router =express.Router();
const authRoutes = require('./routes/auth-routes.js');
const profileRoutes = require('./routes/profile-routes.js');
const passportSetup = require('./config/auth.js');
const cookieSession = require('cookie-session');
const keys=require('./config/keys')
const passport = require('passport');


const app = express();
const PORT = process.env.PORT || 5000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys:[keys.session.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session());

// set up auth routes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

// Middleware
app.use(express.json());




app.get('/', (req,res)=>{
    res.render('home', {user:req.user});
});






app.use("/api/users", router);

mongoose.connect("mongodb://127.0.0.1:27017/parichayy")


app.get("/",(req,res)=>{
res.send("Welcome!");
});



app.listen(PORT, ()=>{
    console.log("Server is running.")
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
})
