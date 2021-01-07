class Billete
{
    constructor(valor, cantidad) 
    {
        this.value = valor;
        this.amount = cantidad;;

        this.imagen = new Image();
        this.imagen.src = imagenes[this.value];
    }
}

var imagenes = [];
imagenes["10"] = "billete10.png";
imagenes["20"] = "billete20.png";
imagenes["50"] = "billete50.png";

var boton = document.getElementById("botonExtraer");
var resultado = document.getElementById("resultado");
boton.addEventListener("click", entregarDinero);

var caja = [];
caja.push (new Billete (50, 20));
caja.push (new Billete (20, 20));
caja.push (new Billete (10, 20));

contarTotal();

function entregarDinero()
{
    let t = document.getElementById("textDinero")
    var dinero = parseInt(t.value);
    let entregado = [];
    let div = 0;
    var papeles = 0;

    if(dineroCaja >= dinero)
    {
        for(let bi of caja)
        {
            if(dinero > 0)
            {
                div = Math.floor(dinero / (bi.value));
                if(div > bi.amount)
                {
                    papeles = bi.amount;    
                }
                else
                {
                    papeles = div;
                }
                
                bi.amount -= papeles;
                for(let i = 0; i < papeles; i++ )
                {
                    entregado.push(new Billete (bi.value, 1));
                }
                dinero -= (bi.value * papeles);
            }
        }

        if(dinero == 0)
        {
            for (var e of entregado)
            {
                resultado.innerHTML += "<img src=" + e.imagen.src + " />";
            }
            resultado.innerHTML += "<hr />";
        contarTotal();
        }
        else
        {
            resultado.innerHTML += "No existen los billetes para entregar esa cantidad, intenta otro valor <hr / >";
        }
    }
    else
    {
        resultado.innerHTML += "No se tiene el dinero suficiente <hr />";
    }

}

function contarTotal()
{
    dineroCaja = 0;
    for(let i of caja)
    {
        dineroCaja += (i.value * i.amount);
    }
}

