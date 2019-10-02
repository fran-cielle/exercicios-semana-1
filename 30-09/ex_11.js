function calcularTriangulo(ang1,ang2,ang3){
    if(ang1 + ang2 + ang3  === 180){
        return 'Este triangulo é válido';
    }else{
        return 'Este triangulo é inválido';
    }
}
console.log(calcularTriangulo(80,50,50));
console.log(calcularTriangulo(100,50,50));