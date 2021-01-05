
document.addEventListener("keydown", dibujarTeclado)
var cuadroDibujo = document.getElementById("areaDibujo")
var papel = cuadroDibujo.getContext("2d")

var teclas =
{
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40
};
var x = 150;
var y = 150;

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

function dibujarTeclado(evento)
{   
    var colorLinea = "red"
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorLinea,x,y,x,y-movimiento,papel);
            y = y - movimiento
        break; 
        case teclas.DOWN:
            dibujarLinea(colorLinea,x,y,x,y+movimiento,papel);
            y = y + movimiento
        break; 
        case teclas.LEFT:
            dibujarLinea(colorLinea,x,y,x-movimiento,y,papel);
            x = x - movimiento
        break; 
        case teclas.RIGHT:
            dibujarLinea(colorLinea,x,y,x+movimiento,y,papel);
            x = x + movimiento
        break;  
        default:
            console.log("Solo flechas")
        break;  
    }
}

dibujarLinea("red", x-1 , y-1 , x+1, y+1, papel)