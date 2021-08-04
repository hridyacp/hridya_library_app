const express = require("express");
const authorsRouter = express.Router();
function router(){
    var authors = [
        {
            name: 'Sidney Sheldon',
            books: 'The other side of midnight,Memories of midnight',
            img: 'sidney.jpg',
            genre: 'Thriller, Drama',
            info: 'Sidney Sheldon was an American writer, director and producer. Sheldon was prominent in the 1930s, first working on Broadway plays and then in motion pictures, notably writing the successful comedy The Bachelor and the Bobby-Soxer which earned him an Oscar in 1948.'
        },
        {
            name: 'P G Wodehouse',
            books: 'Psmith in the city, Invictible Jeeves ',
            img: 'pgwodehouse.jpg',
            genre: 'Comedy, Drama',
            info: 'Sir Pelham Grenville Wodehouse, KBE was an English author and one of the most widely read humorists of the 20th century. Born in Guildford, the third son of a British magistrate based in Hong Kong, Wodehouse spent happy teenage years at Dulwich College, to which he remained devoted all his life.'
        },
        {
            name: 'Jeffery Archer',
            books: 'Only time will tell, Nothing ventured',
            img: 'jeffery.jpg',
            genre: 'Thriller, Drama',
            info: 'Jeffrey Howard Archer, Baron Archer of Weston-super-Mare is an English novelist, former politician, convicted perjurer, and peer of the realm. Before becoming an author, Archer was a Member of Parliament.'
        },
        {
            name: 'Arthur Miller',
            books: 'A view from a bridge, The misfits',
            img: 'arthur.jpg',
            genre: 'Drama',
            info: 'Arthur Asher Miller was an American playwright and essayist in the 20th-century American theater. Among his most popular plays are All My Sons, Death of a Salesman, The Crucible, and A View from the Bridge. He wrote several screenplays and was most noted for his work on The Misfits.'
        },
        {
            name: 'Liesbet Slegers',
            books: 'Chefs and what they do, Kevin and Katie',
            img: 'liesbet.jpg',
            genre: 'Kids',
            info: 'Liesbet Slegers (1975, Belgium) studied Graphics and Illustrations at the Saint-Lucas institute of Antwerp. She works as a full-time graphic designer and illustrator. With her simple, recognizable style and vivid colors, she knows how to attract the attention of every toddler.'
        },
        {
            name: 'Rachel Bright',
            books: 'The squirrels who squabbled, Love monster',
            img: 'rachel.jpg',
            genre: 'Kids',
            info: 'Rachel Bright is a bestselling author and illustrator, as well as being the brains behind the multi-million selling global card and gift phenomenon, the brightside. Her picture book hits include Love Monster, which has now been adapted into an irresistible TV series for CBeebies.'
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:"Authors",
            authors
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("author",
        {
            nav,
            title:"Author",
            author: authors[id]
        });
    });
    return authorsRouter;
}
module.exports = router;
