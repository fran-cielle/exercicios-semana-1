function LeitorDeCodigo(codigo,quantidade){
    switch(codigo){
        case 100:
            return 'Cachorro quente' + quantidade*1.7;
    
        case 101:
            return 'Bauru Simples' + quantidade*2.3;
        case 102:
            return 'Bauru com Ovo' + quantidade*2.6;
        case 103:
            return 'Hambúrguer' + quantidade*2.4;
        case 104:
            return 'Cheeseburguer' + quantidade*2.5;
        case 105:
            return 'Refrigerante' + quantidade;
        default: 
            return 'Código inválido';

    }  
}
console.log(LeitorDeCodigo(100,3));
console.log(LeitorDeCodigo(103,8));
console.log(LeitorDeCodigo(101,12));
console.log(LeitorDeCodigo(104,13));
console.log(LeitorDeCodigo(102,24));
console.log(LeitorDeCodigo(105,7));
console.log(LeitorDeCodigo(200,5));