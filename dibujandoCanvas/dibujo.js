var texto = document.getElementById("textoLineasID")
var boton= document.getElementById("botonID")
var area = document.getElementById("dibujoID");
var lienzo = area.getContext("2d");
boton.addEventListener("click", dibujoPorClick);

var ancho = area.width
var colorLinea = " #9400D3 ";

function dibujoPorClick()
{   
    let cantidadLineas = parseInt(ancho/texto.value)
    for (i=0; i<=ancho; i+=cantidadLineas)
    {
        dibujarLinea(colorLinea, 0, i, i, ancho);
        dibujarLinea(colorLinea, ancho, ancho-i, i, ancho);
        dibujarLinea(colorLinea, 0, ancho-i, i, 0);
        dibujarLinea(colorLinea, ancho, ancho-i, ancho-i, 0);
    }

}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}



