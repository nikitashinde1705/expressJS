const express = require("express");

const app = express();

app.use(express.static("public"));

app.use(express.static("assets"));



const PORT=4000;
app.listen(PORT, () => {
    console.log(`Sever started at http://localhost:${PORT}`);
})