var theCanvas = document.getElementById("villaplatzi");
var lienzo2D = theCanvas.getContext("2d");
document.addEventListener("keydown", moverCerdo)

var x = aleatorio(0, 420);
var y = aleatorio(0, 420);

var teclas =
{
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40
};

var fondo = 
{
    url: "tile.png",
    cargaOk: false
};

var cerdo = 
{
    url: "cerdo.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar(x,y)
}

function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar(x,y)
}

function dibujar(x, y)
{
    if(fondo.cargaOk)
    {
        lienzo2D.drawImage(fondo.imagen, 0, 0);
    }
    if(cerdo.cargaOk)
    {
            lienzo2D.drawImage(cerdo.imagen, x, y);
    }
    
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.round(Math.random() * (max - min))+ min;
    return resultado;
}

function moverCerdo(evento)
{   
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujar(x, y - movimiento)
            if (y < -60)
            {
                y = 500
            }
            else
            {
                y = y - movimiento    
            }
        break; 
        case teclas.DOWN:
            dibujar(x, y + movimiento)
            if (y > 500)
            {
                y = -60
            }
            else
            {
                y = y + movimiento    
            }
        break; 
        case teclas.LEFT:
            dibujar(x - movimiento, y)
            if (x < -60)
            {
                x = 500
            }
            else
            {
                x = x -movimiento    
            }
        break; 
        case teclas.RIGHT:
            dibujar(x + movimiento, y)
            if (x > 500)
            {
                x = -60
            }
            else
            {
                x = x + movimiento    
            }
        break;  
        default:
            console.log("Otra tecla - Presiona solo las flechas")
        break;  
    }
}

console.log(x + " " + y)
