function descreverDia(dia){
    switch(dia){
        case 1:
            return 'Domingo';
        case 2: 
            return 'Segunda-feira';
        case 3:
            return 'Terça-feira';
        case 4:
            return 'Quarta-feira';
        case 5: 
            return 'Quinta-feira'
        case 6: 
            return 'Sexta-feira';
        case 7: 
            return 'Sábado';
        default:
            return 'Esse dia da semana não existe';
    
    }
}
console.log(descreverDia(10));
console.log(descreverDia(5));