//índice diferente de valor

const numeros=[1,2,3,4,5]

for(let numero of numeros){// FOR OF - me traz o valor
console.log('for of: ' + numero)
}

for(let numero in numeros){//FOR IN - sempre me traz a chave(indice posição)
console.log('for in:' + numero)
} 