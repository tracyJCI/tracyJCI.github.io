item = prompt("what would you like to do?");
newArray = []

while(item !== "quit"){


if (item === "new"){

	newTodo = prompt("Enter new todo");
	newArray.push(newTodo);
	console.log(newTodo + " Added to todo");

}
else if (item === "list"){
	console.log("*****************");
	newArray.forEach(function (todolist){
	 	
     console.log(newArray.indexOf(todolist) +" : " + todolist);
     
	}
	)
	console.log("*****************");
		
}

else if (item === "delete"){
	num = prompt("which item would you like to delete?");
	newArray.splice(num,1);
	console.log("todo Removed")

	}
item = prompt("what would you like to do?");
}

 
 console.log("YOU QUIT THE APP!*");
