var theCanvas = document.getElementById("villaplatzi");
var lienzo2D = theCanvas.getContext("2d");

var fondo = new Image();
fondo.src = "tile.png";
fondo.addEventListener("load", dibujarFondo);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVaca);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarPollo);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdo);

function dibujarFondo()
{
    lienzo2D.drawImage(fondo, 0, 0);
}

function dibujarVaca()
{
    let x = aleatorio(0,500)
    let y = aleatorio(0,500)
    lienzo2D.drawImage(vaca, x, y);
}

function dibujarPollo()
{
    let x = aleatorio(0,500)
    let y = aleatorio(0,500)
    lienzo2D.drawImage(pollo, x, y);
}

function dibujarCerdo()
{
    let x = aleatorio(0,500)
    let y = aleatorio(0,500)
    lienzo2D.drawImage(cerdo, x, y);
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.round(Math.random() * (max - min))+ min;
    return resultado;
}
