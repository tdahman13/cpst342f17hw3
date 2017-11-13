let main = function (){
	"use strict";

	let name = window.prompt("Enter Your Name: ");
	if (name !== null && name !==""){
		document.getElementById("user-name").innerHTML = "Welcome " + name;
	};
};

main();