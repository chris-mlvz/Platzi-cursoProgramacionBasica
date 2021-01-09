var jf = require("johnny-five");
var circuito = new jf.Board();
var led;
var motor; 
var fotoCelda;
var turno = 0;

circuito.on("ready", prender);

function prender()
{
  var configuracion = 
  {
    pin:"A0",
    freq: 50
  };
  fotoCelda = new jf.Sensor(configuracion);

  led = new jf.Led(3);
  led.on();

  motor = new jf.Servo(8);
  motor.to(0);
  moverServo();
}

function moverServo()
{
  console.log("Luz: " + fotoCelda.value);
  var luz = fotoCelda.value;  
  if(luz > 800)
  {
    if(turno == 1)
    {
      turno = 0;
      motor.to(70);
    }
    else
    {
      turno = 1;
      motor.to(110);
    }
  }
  else
  {
      motor.to(150);
  }
  setTimeout(moverServo, 1000);
}
