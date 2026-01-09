const express = require("express");
const session = require("express-session");

const app = express();

//To read from Data
app.use(express.urlencoded({extended : true}));

//session middleware
app.use(
    session({
        secret:"myScreteKey",
        resave:false,
        saveUninitialized:false
    })
);

app.set("view engine" , "ejs");

const authRoutes = require("./routes/authRoutes");
app.use("/", authRoutes);


const PORT=5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})