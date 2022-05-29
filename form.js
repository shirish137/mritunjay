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

	 //receiving checkbox responses
	x=document.getElementById('chk1');
	y=document.getElementById('chk2');
	z=document.getElementById('chk3');
	var res="";
	if(x.checked){
	    res=res+x.value+" ";
	}
	if(y.checked){
	  res=res+y.value+" ";
	}
	if(z.checked){
	  res=res+z.value+" ";
	}
	
        localStorage.setItem('skill',res);

	return true;
}






