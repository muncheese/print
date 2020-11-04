


init = () => {

  let testObject = [];

  const button = document.getElementById("buttonID1");
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");

  button.addEventListener("click", function () {
    testObject.push({
      firstname: firstname.value,
      lastname: lastname.value,
      phone: phone.value,
      email: email.value,

    })
    console.log(testObject)




  })


}

printIT = () => {

  document.getElementById("printhere").innerHTML = "Name:  " + firstname.value;
  document.getElementById("printhere2").innerHTML = "Last name: " + lastname.value;
  document.getElementById("printhere3").innerHTML = "Phone number: " + phone.value;
  document.getElementById("printhere4").innerHTML = "E-mail: " + email.value;

}


