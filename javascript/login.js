var customers = [];
var nithin = {
	"firstName" : 'Nithin',    
	"lastName" : 'Reddy',
	"dateOfBirth" : '05/19/1997',
	"email" : 'qwertyu@gmail.com',
	"phone" : '123456789',
	"gender" : "Male",
	"password" : 'Nithin'
};
var nithesh = {
	"firstName" : 'Nithesh',    
	"lastName" : 'Reddy',
	"dateOfBirth" : '04/08/2000',
	"email" : 'qwerty@gmail.com',
	"phone" : '3612965257',
	"gender" : "Male",
	"password" : 'Nithesh'
};
customers.push(nithin);
customers.push(nithesh);
console.log(customers);

function loginCredentials(){
    var email = document.getElementById('emailLogin').value
    var password = document.getElementById('passLogin').value

    console.log(email,password)

    console.log("Validation started..");
	var errors = "";

	if(email == '' || email == undefined) {
		errors = errors + "Please Enter Email Id.<br>";
	} else {
		var emailIdFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!email.match(emailIdFormat)) {
			errors = errors + "Please Enter Valid Email Id.<br>";
		}
	}

    if(password == '' || password == undefined) {
		errors = errors + "Please Enter Password.<br>";
	}

    var isValidUser = false;
	if(email != '' && email != undefined && 
		password != '' && password != undefined) {
			for (let customer in customers) {
				console.log(customer)
				if(customers[customer].email == email && customers[customer].password == password) {
					if(!isValidUser) {
						isValidUser = true;
					}
				}
				
			}
		}

    if(!isValidUser) {
        errors = errors + "Invalid Credentials.<br>";
    }

    console.log("Validation ended..");

    if(errors == "") {
		var successMessage = "Customer Logged Successfully...";
		alert(successMessage);
		document.getElementById("successMessage").innerHTML = successMessage;
		clearAllTheFields();
		return true;
	} else {
		return false;
	}
}

function clearAllLogin(){
    document.getElementById("443").reset()
}

