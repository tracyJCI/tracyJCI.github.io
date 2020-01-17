alert("connected");

console.log("Printing all numbers between -10 and 19");
for (var count = -10 ; count<20; count ++)
{
	console.log(count);
	
}

console.log("Printing all even numbers between 10 and 40");
for (var count = 10 ; count <41; count +=2 )
{
	
		console.log(count);
	}
	


console.log("Printing all odd numbers between 300 and 333");
for (var count = 300; count <334; count++){
	if (count%2 !== 0){
		console.log(count);
}
	}
	

console.log("Printing all odd numbers divisible by 5 and 3 between 5 and 50");
for(var count = 5; count <51; count ++){
	if(count % 5 ===0 && count % 3 === 0){
		console.log(count);
		}
		
}