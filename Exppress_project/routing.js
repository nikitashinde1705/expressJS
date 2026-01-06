const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
})

//About Route
app.get("/about", (req, res) => {
    res.send("About Page");
});

//Contact Route
app.get("/contact",  (req, res) => {
    console.log("Contact Page");
})

const PORT=3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})