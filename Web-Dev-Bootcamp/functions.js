alert("connected");

/*is even*/
function isEven(num){
	if (num %2 !== 0){
		return false;
	}
	else {
		return true;
	}

}


function factorial(yourNum){
 if (yourNum === 0 ){
 	return 1;
 }
 else {
 	var sum = 1;
 	for (var i = yourNum; i > 0 ; i-- ){
 		 sum = sum * i

 	}
 	return sum;
 }
}

function kebabToSnake(yourString){
	newString = yourString.replace(new RegExp("-", 'gi'), "_");
	return newString;
}

