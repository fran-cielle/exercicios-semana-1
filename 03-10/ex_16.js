let qnt = 5;
let cara = 0;
let coroa = 0;

for (let i = 0; i < qnt; i++){
    if(Math.floor(Math.random()*2) == 0){
        cara++
    }else{
        coroa++
    }
}


console.log('Cara ' + cara + ' e coroa ' + coroa)