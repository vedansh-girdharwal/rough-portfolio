const express = require("express");
const app = express();
const userRouter = require("../api/routes/user.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");



//configure morgan
app.use(morgan("dev"));

//configure body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use("/users",userRouter);


app.get("/",(req,res,next)=>{
    res.json("This working on / request");
    next();
}); 


// app.listen(4000,()=>{
//     console.log(`Server running on the port 4000`)
// })    we can create server through express also, but we have already created through http in index.js
module.exports = app;