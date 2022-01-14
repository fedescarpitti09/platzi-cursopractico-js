var lista1 = [
    100,
    200,
    300, 
    400,
    1,
    
    
];

//primero tengo que ordenar la lista
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/*lista1.sort(
    function (elementoA, elementoB) {
      return elementoA - elementoB;
    }
  ); //funcion flecha en vez de funcion comparar
*/

lista1.sort(((a,b)=>a-b));



const mitadlista1 = parseInt(lista1.length/ 2); //redondea MENOS

function esPar(largolista1) {
    if (largolista1 % 2 === 0) {
        return true;
    } else {
        return false;
    }
};


let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadlista1];
    const elemento2 = lista1[mitadlista1+1];

    mediana = (elemento1+elemento2)/2;

} else {
    mediana = lista1[mitadlista1];
};
