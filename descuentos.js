
function calcular(precio, descuento) {
    
    const precioFinal = (precio*(1-(descuento/100)));

    return precioFinal;
    
};

function onClickButtonPriceDiscout(){ //funcion que se llama desde el boton
    const inputPrice = document.getElementById("InputPrice"); //tomo valor del input
    const priceValue = inputPrice.value; // lo paso a una constante

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    //llamo a la funcion que habia creado en JS y le paso los valores que traigo del html
    const calcularDescuento = calcular(priceValue, discountValue) 

    //paso el resultado a un parrafo en html para mostrarlo
    const resultPrice = document.getElementById("ResultPrice"); //lo traigo a JS
    resultPrice.innerText = "El precio con descuento es: $" + calcularDescuento; //lo mando a html

}