let array = [];
for (let i = 0; i < 20;/*Qtd de numeros que irá aparecer no sorteio*/ i++) {
    array.push(Math.floor(Math.random() * 100/*Período de sorteio*/) + 1/*para incluir o numero 100*/);
}

console.log(array);