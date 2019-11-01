let arr = [12,4,23,234,54];
let maior = 0;

for(let i = 0; i < arr.length; i++){//para pegar todas as posições da array
    if (arr[i] > maior){
       
        maior = (arr[i]);
        
    }
}
console.log(maior);
