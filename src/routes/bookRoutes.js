const express = require("express");
const booksRouter = express.Router();
function router(){
    var books = [
        {
            title: 'The other side of midnight',
            author: 'Sidney Sheldon',
            img: 'midnight.jpg',
            genre: 'Thriller',
            synopsis: 'Welcome to the dazzling and surprising novel of suspense from master storyteller Sidney Sheldon. In Paris…Washington…and a fabulous villa in Greece, an innocent American girl becomes a bewildered, horror-stricken pawn in a game of vengeance and betrayal.'
        },
        {
            title: 'Psmith in the city',
            author: 'P G Wodehouse',
            img: 'psmith.jpg',
            genre: 'Comedy',
            synopsis: 'Mike Jackson, cricketer and scion of a cricketing clan, finds his dreams of studying and playing at Cambridge upset by news of his fathers financial troubles, and must instead take a job with the New Asiatic Bank.'
        },
        {
            title: 'Beginning Javascript',
            author: 'Russ Ferguson',
            img: 'javascript.jpg',
            genre: 'Education',
            synopsis: 'JavaScript is notorious for being misunderstood. It is often derided as being a toy, but beneath its layer of deceptive simplicity, powerful language features await. JavaScript is now used by an incredible number of high-profile applications, showing that deeper knowledge of this technology is an important skill for any web or mobile developer.'
        },
        {
            title: 'Chefs and what they do',
            author: 'Liesbet Slegers',
            img: 'chefkids.jpg',
            genre: 'Kids',
            synopsis: 'Chefs prepare food for the people who come to their restaurants and they have a whole team of cooks to help. Chefs have to work hard and fast to create delicious, healthy dishes. Learn more about chefs and their duties in this captivating beautifully picturized book.'
        },
        {
            title: 'Memories of midnight',
            author: 'Sidney Sheldon',
            img: 'memmid.jpg',
            genre: 'Thriller',
            synopsis: 'Yet another thriller by Sidney Sheldon. The novel begins at the end of The Other Side of Midnight, with Catherine Douglas recovering in a convent, knowing only her name. Everyone except Constantin Demiris, known as Costa, thinks she was killed by her husband, Larry Douglas, and his mistress, Noelle Page.'
        },
        {
            title: 'Inimitible Jeeves',
            author: 'P G Wodehouse',
            img: 'jeeves.jpg',
            genre: 'Comedy',
            synopsis: 'In typical Wodehouse fashion, The Inimitable Jeeves doesnt focus on a central plot, but instead a mapping of mini-escapades centered around the fashionably clueless Bertie and his clever butler, Jeeves.'
        }, 
        {
            title: 'Complete Node Js',
            author: 'Richard Haltman',
            img: 'nodejs.jpg',
            genre: 'Education',
            synopsis: 'Node JS is a cross-platform, open-source runtime environment, which is used for the development of server-side web applications. The growing popularity of Node JS can be contributed to the fact that it permits to build large scale, scalable and real time web and mobile applications with JavaScript alone.'
        },          
        {
            title: 'The squirrels who squabbled',
            author: 'Rachel Bright',
            img: 'squirrels.jpg',
            genre: 'Kids',
            synopsis: 'Two greedy squirrels learn to share in the third hilarious rhyming adventure from the bestselling creators of The Lion Inside and The Koala Who Could. Greedy squirrels Cyril and Bruce both have their sights on a very special prize: THE VERY LAST NUT OF THE SEASON!'
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:"Books",
            books
        });
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("book",
        {
            nav,
            title:"Book",
            book: books[id]
        });
    });
    return booksRouter;
}
module.exports = router;
