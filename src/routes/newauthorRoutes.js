const express = require("express");
const newauthorRouter = express.Router();
function routers(nav){
    newauthorRouter.get('/',function(req,res){
        res.render("newauthor",
        {
            nav,
            title:"Add new author"
        });
    });
     return newauthorRouter;
 }
module.exports = routers;