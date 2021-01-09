var jf = require("johnny-five");
var circuito = new jf.Board();
var ledRojo;
var ledAmarillo;
var motor;
var fotoCelda;
var turno = 0;

circuito.on("ready", prender);

function prender()
{
    var configuracion = 
    {
        pin: "A0",
        freq: 50
    };
    fotoCelda = new jf.Sensor(configuracion);

    ledRojo = new jf.Led(3);
    ledAmarillo = new jf.Led(4);

    motor = new jf.Servo(8);
    motor.to(0);

    moverServo();
}

function moverServo()
{
    console.log("Luz: " + fotoCelda.value);
    var luz = fotoCelda.value
    if(luz > 500)
    {
        if(turno == 1)
        {
            turno = 0;
            motor.to(60);
            ledRojo.on(500);
            ledAmarillo.off();
        }
        else
        {
            turno = 1;
            motor.to(120);
            ledAmarillo.on(500);
            ledRojo.off();
        }
        
    }
    else
    {
        motor.to(0);
        ledRojo.off();
        ledAmarillo.off();
    }
    setTimeout(moverServo, 1000);
}

