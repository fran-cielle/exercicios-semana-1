const express = require("express");
const router = express.Router();//para instanciar apenas as funções/módulos de roteamento que estão dentro do express

router.get("/", function(req, res){
    res.status(200).send({ // a {(chave) significa que estou enviando um objeto
        title: "Reprograma Turma da Kelly",
        version: "0.0.1"
    })
})

module.exports = router;

