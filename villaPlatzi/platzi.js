var z;


function aleatorio(min, max)
{
    var resultado;
    resultado = Math.round(Math.random() * (max - min))+ min;
    return resultado;
}

for (var i=0; i<10; i++)
{
    z = aleatorio(0, 10);
    document.write(z + ", ");
}
