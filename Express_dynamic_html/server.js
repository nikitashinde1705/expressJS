const express = require("express");

const app = express();

// app.set("view engine", "ejs");  //ejs - embedded javascript
// app.set("view engine", "pug");  
app.set("view engine", "hbs");  //handlebars

app.get("/users", (req, res) => {
    const users = ["Nikita", "Bharti", "Asif"];

    res.render("users", {users});
})



PORT=4000;
app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})