const express = require("express");

const app = express();

app.get("/info", (req, res) => {
    console.log("URL : ", req.url);
    console.log("Method : ",req.method);

    res.send("Check console output");
});

const PORT=3000;

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})