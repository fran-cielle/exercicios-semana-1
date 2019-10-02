let n = 1;
let soma = 0;

do{    
    if(n % 3 === 0 && n % 5 === 0){
       soma += n;
    }
    n++;
    
}while(n < 1000);
console.log(soma);
