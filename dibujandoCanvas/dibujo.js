var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var colorLinea = " #9400D3 ";

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

for (i=0; i<=300; i+=10)
{
    dibujarLinea(colorLinea, 0, i, i, 300);
    dibujarLinea(colorLinea, 300, 300-i, i, 300);
    dibujarLinea(colorLinea, 0, 300-i, i, 0);
    dibujarLinea(colorLinea, 300, 300-i, 300-i, 0);

}

