// //Dados dois números calcule o MDC deles.

// let num1  = 100
// let num2 = 50

// if( % num1 === 0 && % num2 === 0){

// }
/*
var mdc = function(num1, num2) {

    var resto;

    do {
        resto = num1 % num2;

        num1 = num2;
        num2 = resto;

    } while (resto != 0);

    return num1;
}
console.log(mdc(90,54));*/

let x = 90;
let y = 54;
let divisor = 2;//menor unidade de valor divisível
let mdc = 1;// recebe o resultado do valor mdc

while(x > 1 && y > 1){// enquanto x e y for maior que 1
    if(x % divisor === 0 && y % divisor === 0){
        mdc *= divisor;
        // PARA ATUALIZAR OS VALORES DE X E Y
        x /= divisor;
        y /= divisor;
    }else if (x % divisor === 0){
        x /= divisor;
    }else if (y % divisor === 0){
        y /= divisor;
    }else{
        divisor++;
    }

}
console.log(mdc);