
var age = Number(prompt("How old are you?"));
if (age < 0){
	Console.log("ERROR");
}

if (age == 21){
	Console.log("Happy 21st birthday");
}

if(age%2 === 1 )
{
	Console.log("your age is odd!");
}

if (age % Math.sqrt(age) === 0)
{ Console.log("perfect square");

}
