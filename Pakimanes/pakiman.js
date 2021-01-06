class Pakiman
{
    constructor(nombre, vida, ataque)
    {
        this.imagen = new Image();
        this.name = nombre;
        this.life = vida;
        this.attack = ataque;

        this.imagen.src = imagenes[this.name];
    }
    talk()
    {
        alert(this.name);
    }
    show()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.name + "</strong><br />");
        document.write("Vida: " + this.life + "<br />");
        document.write("Ataque: " + this.attack);
        document.write("<hr/> </p>");
    }
}