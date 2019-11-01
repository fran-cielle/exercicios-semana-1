//Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. 
// Um número primo é aquele que é divisível somente por ele mesmo e por 1.
let numero = 3;
let divisores = 0;

for(let i = 1; i <= numero; i++){
    if(numero % i === 0){

        divisores++;
    }
}

if(divisores === 2){
    console.log(numero + ' é primo.');
} else{
    console.log(numero + ' não é primo.');
}
