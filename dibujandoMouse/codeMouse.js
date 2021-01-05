
document.addEventListener("mousemove", dibujarMouse)
document.addEventListener("mousedown", presionarMouse)
document.addEventListener("mouseup", soltarMouse)

var cuadroDibujo = document.getElementById("areaDibujo")
var papel = cuadroDibujo.getContext("2d")
var x;
var y;
var estado = 0;
var colorLinea = "red";


function presionarMouse(evento)
{   
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}


function dibujarMouse(evento)
{   
    if(estado == 1)
    {
        dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY,papel)
    }
    x = evento.layerX;
    y = evento.layerY;
}

function soltarMouse(evento)
{   
    estado = 0;
    x = evento.layerX;
    y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

