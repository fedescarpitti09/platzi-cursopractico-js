function calcularPromedio(lista){
    /*
    let sumaLista = 0;
    for (let i=0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    };*/
    
    //el metodo reduceva sumando/multiplicando, etc los valores de la lista entre si
    // tengo que declarar una funcion y llamar al valor acumulado
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );    
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

