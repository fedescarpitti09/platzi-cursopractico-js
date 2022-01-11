// Codigo del cuadrado
console.group("Cuadrados"); //para agrupar console.log

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
};

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo (lado1,lado2,base) {
    return Number(lado1) + Number(lado2) + Number(base);
};

function areaTriangulo (altura,base) {
    return (Number(base)*Number(altura))/2;
};

console.groupEnd();

// Codigo del Circulo
console.group("Circulo");

function diametroCirculo(radio) {
    return radio *2;
};
  
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio); //llamo a funcion dentro de funcion
    return diametro * Math.PI;
};

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}
console.groupEnd();

// INTERACTUANDO CON HTML
function calcularPerimetroCuadrado() { // declaro funcion
    const input = document.getElementById("InputCuadrado"); //tomo valor del imput
    const value = input.value; //lo paso a una constante
        
    const perimetro = perimetroCuadrado(value);//llam a la funcion que calculaba el perimetro y le meto el valor del input
    alert(perimetro); //tiro alerta dentro de html
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
        
    const area = areaCuadrado(value);
    alert(area);
}


// PARA TRIANGULO
function calcularPerimetroTriangulo() { // declaro funcion
    const inLado1 = document.getElementById("InputLado1Triangulo"); //tomo valor del imput
    const lado1 = inLado1.value; //lo paso a una constante

    const inLado2 = document.getElementById("InputLado2Triangulo"); //tomo valor del imput
     lado2 = inLado2.value; //lo paso a una constante

    const inBase = document.getElementById("InputBaseTriangulo"); //tomo valor del imput
    const base = inBase.value; //lo paso a una constante
        
    const perimetroT = perimetroTriangulo(lado1, lado2, base);//llama a la funcion que calculaba el perimetro y le meto el valor del input
    alert(perimetroT)
}

function calcularAreaTriangulo() { // declaro funcion
    const inAltura = document.getElementById("InputAlturaTriangulo"); //tomo valor del imput
    const altura = inAltura.value; //lo paso a una constante

    const inBase = document.getElementById("InputBaseTriangulo"); //tomo valor del imput
    const base = inBase.value; //lo paso a una constante
        
    const areaT = areaTriangulo(altura, base);//llama a la funcion que calculaba el perimetro y le meto el valor del input
    alert(areaT)
}
