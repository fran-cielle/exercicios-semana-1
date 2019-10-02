function retornarMaior(numero1,numero2){
    if(numero1 > numero2){
        return'O valor do primeiro número é maior que o outro';
    }else if(numero2 > numero1){
        return'O valor do segundo número é maior que o outro';
    }else{
        return'Os valores são iguais';
    }
}
console.log(retornarMaior(3,6));
console.log(retornarMaior(6,6));
console.log(retornarMaior(7,6));