console.log("connected...!")

function passvalues(){
	var newname =document.getElementById('name').value;
	localStorage.setItem("kname",newname);

	var newemail =document.getElementById('email').value;
	localStorage.setItem("kemail",newemail);

	var newphone =document.getElementById('phone').value;
	localStorage.setItem("kphone",newphone);

	var newdob =document.getElementById('dob').value;
	localStorage.setItem("kdob",newdob);

	var newage =document.querySelector('input[name="age"]:checked').value;
	localStorage.setItem("kage",newage);

	var newgender =document.querySelector('input[name="gender"]:checked').value;
	localStorage.setItem("kgender",newgender);

	 


	return true;
}






