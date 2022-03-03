const express = require("express");
const router = express.Router();

let users=[
    {
        name:"Vedansh",
        id:1
    },
    {
        name:"Satvik",
        id:2
    }
]


//create user
router.post("/",(req,res,next)=>{
    users.push(req.body);
    res.json({message:"This is coming from api/routes/user.js but through post"});
})


//get all users
router.get("/",(req,res,next)=>{
   //res.write("This is from api/routes/user.js");
    res.json({users:users});
});
//get single user
//update single user
//delete single user

module.exports = router;