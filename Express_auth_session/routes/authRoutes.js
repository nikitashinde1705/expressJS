const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

router.get("/" , (req,res) => {
    res.render("login");
});

//login logic
router.post("/login", (req, res) => {

    const{username, password} = req.body;

    if(username === "admin" && password === "1234"){
        req.session.user = username;

        return res.redirect('/dashboard');
    }
    res.send("Invalid username and password");
});

router.get("/dashboard",authMiddleware, (req, res) => {
    res.render("dashboard", {user: req.session.user});
});

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

module.exports = router;