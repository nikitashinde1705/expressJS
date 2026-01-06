const express = require("express");
const app = express();

//custome middleware

app.use((req, res, next) => {
    console.log("Middleware Executed");
    next();
});

app.get('/', (req,res) => {
    res.send("Welcome to express");
});

const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});