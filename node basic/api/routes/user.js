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


router.post("/",(req,res,next)=>{
    // console.log(req.body);
    users.push(req.body);
    console.log("spreaded", ...users);
    console.log("unspreaded",users);
    res.json({message:"This is coming from api/routes/user.js but through post"});
})


//create user
//get all users
router.get("/",(req,res,next)=>{
   //res.write("This is from api/routes/user.js");
    res.json({users:users});
});
//get single user
//update single user
//delete single user

module.exports = router;