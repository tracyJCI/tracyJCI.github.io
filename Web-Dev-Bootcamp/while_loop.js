alert("connected");

console.log("Printing all numbers between -10 and 19");
var count = -10;
while (count<20)
{
	console.log(count);
	count++;
}

console.log("Printing all even numbers between 10 and 40");
var count = 10;
while (count <41 )
{
	if(count%2 === 0){
		console.log(count);
	}
	count ++;
}

console.log("Printing all odd numbers between 300 and 333");
var count = 300;
while(count <334){
	if(count % 2 === 1){
		console.log(count);

	}
	count ++
}

console.log("Printing all odd numbers divisible by 5 and 3 between 5 and 50");
var count = 5;
while(count <51){
	if(count % 5 ===0 && count % 3 === 0){
		console.log(count);
		}
		count ++;
}