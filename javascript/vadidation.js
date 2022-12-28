
function saveCustomerInfo() {
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var dateOfBirth = document.getElementById('DOB').value
    var email = document.getElementById('email').value
    var phoneNumber = document.getElementById('phn').value
    var password = document.getElementById('pass').value
    var password1 = document.getElementById('pass1').value
    var ele = document.getElementsByName('gender');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
               var gender = ele[i].value
               //console.log("Gender: "+ele[i].value);
    }
    var shipping = document.getElementById('shipping').value
    //console.log(firstName,lastName,dateOfBirth,email,phoneNumber,password,password1,gender,shipping)
    // console.log(gender)
    if(firstName == '' || lastName == '' || dateOfBirth == '' || email == '' || phoneNumber == '' || gender == '' || shipping == ''){
        alert("input feilds should not be empty")
    }
    if(password != " "){
        if (password != password1){
            alert("Passwords doesn't match")
        }
    }
    else{
        alert("Password feild should not be empty")
    }
    

    // validationPage(password1,email)
}

function clearAll(){
    document.getElementById("444").reset()
}


