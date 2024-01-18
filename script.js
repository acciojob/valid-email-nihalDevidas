function validEmail(str) {
  //your JS code here.
	if(str.length === 0){
		console.log(1)
		return false;
	}
	
	let index = chechAtTheRate(str); // index of @
	if(index !== -1){
		if(index === 0 || index === str.length-1){
			console.log(2)
			return false;
		}	
	}
	else if(index === -1){  // @ is not present
	    console.log(3)
		return false;
	}

	
	let str1 = str.split("@");
	if(str1[0].includes(".")){  // check first half before @
		console.log(4)
		return false;
	}
	
	// validation for second half
	if(!str1[1].includes(".")){  // if there is no dot
		console.log(5)
		return false;
	}
	let f_index = str1[1].indexOf(".", 0);
	let l_index = str1[1].lastIndexOf(".");
	
	if(l_index === str1[1].length-1){   // dot is at last
		console.log(6)
		return false
	}
	
	if(l_index !== f_index){
		let len = l_index-f_index-1;
			if(len < 2 ||  len > 4){
				console.log(7)
				return false;
			}
	}

	return true;
}

function chechAtTheRate(str){
	return (str.indexOf("@",0));
}
//Do not change the code below.
const str = prompt("Enter an email address.");    
alert(validEmail(str.trim()));      
