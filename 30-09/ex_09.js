function descreverMes(mes){
    switch(mes){
        case 1:
            return 'Janeiro tem 31 dias';
        case 2: 
            return 'Fevereiro tem 28 dias';
        case 3:
            return 'Março tem 31 dias';
        case 4:
            return 'Abril tem 30 dias';
        case 5: 
            return 'Maio tem 31 dias'
        case 6: 
            return 'Junho tem 30 dias';
        case 7: 
            return 'Julho tem 31 dias';
        case 8:
            return 'Agosto tem 31 dias';
        case 9:
            return 'Setembro tem 30 dias';
        case 10: 
            return 'Outubro tem 31 dias';
        case 11:
            return 'Novembro tem 30 dias';
        case 12:
            return 'Dezembro tem 31 dias';
        default:
            return 'Esse mês não existe';
    
    }
}
console.log(descreverMes(10));