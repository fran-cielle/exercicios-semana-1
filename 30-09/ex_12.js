function Baskara(a,b,c){
    let delta = (b**2) - (4*a *c); 
    
    

    if(delta < 0){
        return 'A equação não tem raízes';        
    }else if(delta === 0){
        let x1 = (-b + Math.sqrt(delta))/ (2*a);
       return 'A equação tem 1 raiz ' + x1;

    }else{
        let x1 = (-b + Math.sqrt(delta))/ (2*a);
        let x2 = (-b - Math.sqrt(delta))/ (2*a);
        return 'A equação tem duas raizes x1: ' + x1 + ' x2: ' + x2;
    }
}
console.log(Baskara(2,3,-5));
console.log(Baskara(1,-10,25));
console.log(Baskara(1,2,3))