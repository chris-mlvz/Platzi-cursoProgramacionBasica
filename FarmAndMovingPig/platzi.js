var theCanvas = document.getElementById("villaplatzi");
var lienzo2D = theCanvas.getContext("2d");

var cantidadAnimal = aleatorio(0, 10);
var anchoFondo = 420;
var anchoAnimales = 60
var espacioAnimales = anchoFondo/anchoAnimales;

var fondo = 
{
    url: "tile.png",
    cargaOk: false
};

var vaca = 
{
    url: "vaca.png",
    cargaOk: false
};

var pollo = 
{
    url: "pollo.png",
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

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar()
}

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar()
}

function cargarPollos()
{
    pollo.cargaOk = true;
    dibujar()
}

function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar()
}

function dibujar()
{
    console.log(cantidadAnimal)
    if(fondo.cargaOk)
    {
        lienzo2D.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk)
    {
        for(let i=0; i<cantidadAnimal; i++)
        {
            let x = aleatorio(0, espacioAnimales) * anchoAnimales
            let y = aleatorio(0, espacioAnimales) * anchoAnimales
            lienzo2D.drawImage(vaca.imagen, x, y)
        }

    }
    if(pollo.cargaOk)
    {
        for(let i=0; i<cantidadAnimal; i++)
        {
            let x = aleatorio(0, espacioAnimales) * anchoAnimales
            let y = aleatorio(0, espacioAnimales) * anchoAnimales
            lienzo2D.drawImage(pollo.imagen, x, y);
        }
    }
    if(cerdo.cargaOk)
    {
        for(let i=0; i<cantidadAnimal; i++)
        {
            let x = aleatorio(0, espacioAnimales) * anchoAnimales
            let y = aleatorio(0, espacioAnimales) * anchoAnimales
            lienzo2D.drawImage(cerdo.imagen, x, y);
        }

    }
    
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.round(Math.random() * (max - min))+ min;
    return resultado;
}
