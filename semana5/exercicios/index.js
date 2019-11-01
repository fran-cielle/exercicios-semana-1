const express = require('express');
const server = express();//para o express deixar de ser metodo e se tornar uma função
server.listen(3000);//porta que lera meus arquivos

const usuarios = ['Fran ','Mara ','Regi ','Ste ','Aline '];

// server.get('/',function(req,res){
//    return res.jason('Hello World Mundo');
// });

// server.get('/usuarios',function(req,res){
//     return res.json(usuarios);
// });

// server.get('/users/:user',(req,res)=>{
//     const idUser = req.params.user;
//     return res.json(usuarios[idUser]);
// });





// //Crie um endpoint Get que traga uma lista de livros ao acessar '/books'
// const livros = ['livro0','livro1','livro2','livro3','livro4']
// server.get('/books',(req,res) =>{
//     return res.json(livros);
// });

// //Crie uma rota Get que utilize params para trazer um único livro
// server.get('/books/:book',(req,res)=>{
//     const idBooks = req.params.book;
//     return res.json(idBooks[livros])
// });

// //Crie uma rota get que utilize 2 params e que retorne o usuário e o livro
// server.get('/users/:user/books/:book', (req,res) =>{
//     const {user,book} = req.params;
//     let Ids = usuarios[user] + livros[book]

//     return res.json(Ids);
// });

// //Crie uma rota que utilize query strings que ao acessar '/country' traga 1 pais
// server.get('/country', (req,res,next)=>{//query string
//     //const pais = ['Brasil','Chile','Colombia','Peru'];
    
//     return res.json(req.query.pais)
// });


/*CONCEITO MIDDLEWARE*/

function checkUsersInArray(req,res,next){
    const user = usuarios[req.params.indexUser];
    if(!user){
        return res.status(400).json({error: `Index doesn't exist`});
    }
    req.user = user;
    return next;
}

server.get('/users/:user', checkUsersInArray, (req,res)=>{

    return res.json(usuarios[indexUser]);
});