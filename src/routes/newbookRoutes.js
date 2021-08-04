const express = require("express");
const newbookRouter = express.Router();
function routers(nav){
    newbookRouter.get('/',function(req,res){
        res.render("newbook",
        {
            nav,
            title:"Add new book"
        });
    });
     return newbookRouter;
 }
module.exports = routers;