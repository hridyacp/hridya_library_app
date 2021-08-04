const express = require("express");
const loginsRouter = express.Router();
function routers(nav){
    loginsRouter.get('/',function(req,res){
        res.render("login",
        {
            nav,
            title:"Login"
        });
    });
     return loginsRouter;
 }
module.exports = routers;
