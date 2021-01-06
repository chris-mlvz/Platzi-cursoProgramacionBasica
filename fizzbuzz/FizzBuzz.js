Fizz=[];
Buzz=[];
FizzBuzz=[];

for (let i = 1; i<=100; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        FizzBuzz.push(i);
        document.write("FizzBuzz");
    }
    else if(i % 3 == 0)
    {
        Fizz.push(i);
        document.write("Fizz");
    }
    else if(i % 5 ==0)
    {
        Buzz.push(i);
        document.write("Buzz");
    }
    else
    {
        document.write(i);
    }
    document.write("<br/>")
}

console.log(Fizz);
console.log(Buzz);
console.log(FizzBuzz);
