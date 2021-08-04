const express = require('express');
const app = new express();
const port = process.env.PORT || 7500;
nav = [
    {
        link: "/books",
        name: "Books"
    },
    {
        link: "/authors",
        name: "Authors"
    },
    {
        link: "/newbook",
        name: "Add new book"
    },
    {
        link: "/newauthor",
        name: "Add new author"
    },
    {
        link: "/login",
        name: "Log In"
    },
    {
        link: "/signup",
        name: "Signup"
    }
]
const loginsRouter = require('./src/routes/loginRoutes')(nav);
const signupsRouter = require('./src/routes/signupRoutes')(nav);
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const newbookRouter = require('./src/routes/newbookRoutes')(nav);
const newauthorRouter = require('./src/routes/newauthorRoutes')(nav);
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use('/login',loginsRouter);
app.use('/signup',signupsRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/newbook',newbookRouter);
app.use('/newauthor',newauthorRouter);
app.get('/',function(req,res)
{
    res.render("index",
    {
nav, 
title:"Library"
    });
});
app.listen(port,()=>{console.log("Server ready at" + port)});