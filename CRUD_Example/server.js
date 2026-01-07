const express = require("express");

const app = express();

//middlware to read JSON body
app.use(express.json());

//Import routes
const userRoutes = require('./routes/userRoute.js');

//use routes
app.use('/users', userRoutes);

//start server
const PORT=3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})

