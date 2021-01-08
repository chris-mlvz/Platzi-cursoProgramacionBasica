
 int rojo = 3;
 int amarillo = 4;
 int milisegundos = 1000;

void setup()
{
  pinMode(rojo, OUTPUT);
  pinMode(amarillo, OUTPUT);
}

void loop()
{
  digitalWrite(rojo, HIGH);  
  digitalWrite(amarillo, LOW);
  delay(milisegundos);                      
  digitalWrite(rojo, LOW);   
  digitalWrite(amarillo, HIGH);
  delay(milisegundos);                     
}
