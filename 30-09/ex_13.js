function calculadora(num1,num2,operacao){
   
    switch(operacao){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        default:
            return 'Não é válido';
    }
}
console.log('Soma: ', calculadora(6,2,'+'));
console.log('Subtração: ', calculadora(6,2,'-'));
console.log('Multiplicação: ', calculadora(6,2,'*'));
console.log('Divisão: ',calculadora(6,2,'/'));