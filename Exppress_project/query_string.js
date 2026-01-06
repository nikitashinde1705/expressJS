const express = require("express");

const app = express();

//Query Parameter Example
app.get("/search", (req,res) => {
    res.send("Search Name: "+ req.query.name);
});

const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});