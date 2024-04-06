const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const router =express.Router();
const authRoutes = require('./routes/auth-routes.js');
const passportSetup = require('./config/auth.js')

const app = express();
const PORT = process.env.PORT || 5000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// set up auth routes
app.use('/auth',authRoutes);

// Middleware
app.use(express.json());




app.get('/', (req,res)=>{
    res.render('home');
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
