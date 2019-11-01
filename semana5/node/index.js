//sempre vou chamar esse arquivo para iniciar minha aplicação -> esta configurado no main do packege.json
const express = require('express'); /*/indica que vou utilizar a dependencia express, estou 
fazendo uma atribuição em uma constante -- trazendo ele pra dentro do meu projeto, apontando onde 
ele vai pegar| diretorio*/

const server = express();/*/para instanciar esse metodo e jogar dentro de outra variável, no caso 
a server -- indica que ele é uma grande \função -- agregou como uma função*/

// server.get('/'/**/, 
//     function(req, res)/*a função vai trabalhar com requisições e com respostas,requisições 
//     solicita informações e aguarda a responsta(send) */
//     {/*/vou passar uma rota como primeiro argumento e após irei passar uma função 
//         -- '/' a primeira rota que irá abrir, é sempre a primeira aplicação que a rota encontra 
//         nela*/
//     res.send('hello world');

// });
server.listen(3000);/*/porta 3000, boa prática para quem desenvolve servidor node, mas quem 
define a porta é quem esta desenvolvendo, não é recomendavel colocar portas abaixo de 1024 
porque são portas muito conhecidas e utilizadas*/

server.get('/', function(req,res){
    return res.json('root');
});
server.get('/about', function(req,res){
    return res.json('about');
});
server.get('/users/:username', (req,res,next) =>{
    return res.json(req.params);
});
server.get('/books/:bookId', (req,res,next) =>{
    return res.json(req.params);
});
server.get('/users/:username/books/:bookId', (req,res,next) =>{
    return res.json(req.params);//parametros
});

server.get('/search', (req,res,next)=>{//query string
    return res.json(req.query)
});