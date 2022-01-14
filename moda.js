const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const lista1Count = {}; //objeto
  
  //recorro array y voy contando elementos y agrupando
  lista1.map(
    function (elemento) {
      if (lista1Count[elemento]) { //busca dentro del objero ese elemento
        lista1Count[elemento] += 1; //si lo encuentra le suma 1 al valor
      } else {
        lista1Count[elemento] = 1; //si no lo encuentra va 1 por 1ra vez
      }
    }
  ); 

  //FORMA 1
  //transformo objeto en array y lo ordeno
  /*const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );*/

  
  //FORMA 1
//transformo objeto en array y lo ordeno
const lista1Array = Object.entries(lista1Count).sort(((a,b)=>(a[1]-b[1])));

  const moda = lista1Array[lista1Array.length - 1]