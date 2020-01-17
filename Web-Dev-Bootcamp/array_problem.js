
function printReverse(anArray){
	var num = anArray.length;
	for (var i=anArray.length - 1; i >=0  ; i--){
		console.log(anArray[i]);
	}


}


function isUniform(secArray){
	 
	 for (i = 0; i < secArray.length-1; i++)
	 {
	 	if (secArray[i] === secArray[i+1])
	 	{
	 		i++;
	 	}
	 	else 
	 	{
	 	return false;
	 	

			 	}

	}
	return true;

}


function sumArray(thirdArray){
	sum = 0;
	for (j = 0; j < thirdArray.length; j++){
		sum = sum + thirdArray[j];
	}
	return sum;
}


function max(fArray){
	largest = fArray[0];
	
	for (i = 0; i < fArray.length-1; i++)

	 {
	    
	 	if (largest < fArray[i+1])
	 	{

	 		largest = fArray[i+1]
	 	}
	 	else 
	 	{
	 	largest = largest;
	 	

			 	}

	}
	return largest;

}
		
	