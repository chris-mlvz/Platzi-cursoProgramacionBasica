var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

aplicacion.use(express.static("public"));
aplicacion.use("/static", express.static("public"));


function inicio(peticion, resultado)
{
    resultado.send(__dirname + "prueba.html");
}

function cursos(peticion, resultado)
{
    resultado.send("Estos son los <strong>cursos</strong>");
}

aplicacion.listen(8989);

console.log("Servidor express escuchando");