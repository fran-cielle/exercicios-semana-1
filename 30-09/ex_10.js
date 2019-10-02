function vogalOuConsoante(letra){
    switch(letra){
        case 'a':           
        case 'e': 
        case 'i':
        case 'o':
        case 'u': 
            return 'Essa letra é uma vogal';
        default:
            return 'Essa letra é uma consoante';
    
    }
}
console.log(vogalOuConsoante('a'));
console.log(vogalOuConsoante('z'));
