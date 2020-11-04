




const guestFirstName = "Anna";
const guestLastName = "Berzina";
const guestPhone = "12345678";
const guestEmail = "anna@gmail.com";
const confirmationMSG = "";


let firstname = document.getElementById("firstname").innerHTML;
let lastname = document.getElementById("lastname").innerHTML;
let phone = document.getElementById("phone").innerHTML;
let email = document.getElementById("email").innerHTML;
let message = document.getElementById("confirmationMSG").innerHTML;

const regButton = document.getElementById("buttonID1");
regButton.addEventListener("click", getGuestData);
function getGuestData(e) {
    e.preventDefault();
    if (firstname.innerHTML === guestFirstName && lastname.innerHTML === guestLastName && phone.innerHTML === guestPhone && email.innerHTML === guestEmail) {
        message.innerText = "Reģistrācija veiksmīga"
    } else {
        message.innerText = "Reģistrācija neizdevās. Lūdzu, pārbaudiet ievadīto informāciju"
    }
}

function clearGuestData(e) {
    e.preventDefault();
    message.innerText = "";
    firstname.innerText = "";
    lastname.innerText = "";
    phone.innerText = "";
    email.innerText = "";
}
