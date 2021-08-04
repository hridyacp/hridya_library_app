const express = require("express");
const signupsRouter = express.Router();
function router(nav){
signupsRouter.get('/',function(req,res){
res.render("signup",
{
    nav,
    title: "Sign up"
});
});
return signupsRouter;
}
module.exports = router;

