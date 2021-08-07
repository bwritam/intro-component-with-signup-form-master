document.querySelector(".btn").addEventListener("click", displayError);


function displayError() {
	var fname = document.querySelector("#fname").value;
	var lname = document.querySelector("#lname").value;
	var pwd = document.querySelector("#pwd").value;
	var email = document.querySelector("#email").value;
	// var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (fname === "") {
		document.querySelector(".text-one").innerHTML = "First Name cannot be empty";
	}

	if (lname === "") {
		document.querySelector(".text-two").innerHTML = "Last Name cannot be empty";
	}

	if (email === "") {
		document.querySelector(".text-three").innerHTML = "Looks like this is not an email";
	}

	if (pwd === "") {
		document.querySelector(".text-four").innerHTML = "Password cannot be empty";
	}
}