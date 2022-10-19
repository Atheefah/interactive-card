const cardholder = document.getElementById("cardholder-name");
const cardnumber = document.getElementById("card-number");
const expiry = Array.from(document.querySelectorAll(".expiry"));
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameoncard = document.querySelector(".cardholder-display");
const numoncard = document.querySelector(".card-number-display");
const expMM = document.querySelector(".expiry-month-display");
const expYY = document.querySelector(".expiry-year-display");
const cvcDisplay = document.querySelector(".cvc-display");
const continueBtn = document.getElementById(".continue");
const form = document.getElementById("myform");
const expiryErroMsg = document.getElementById("expiry-error");


function inputName() {
    nameoncard.innerHTML = cardholder.value;
    if (nameoncard.innerHTML=="") {
        nameoncard.innerHTML = cardholder.Placeholder;
    }
}

function inputCardNum() {
    let cardNumberInput = cardNumber.value;
    //Do not allow users to write invalid characters
    let formattedCardNumber = cardNumberInput,replace(/[^\d]/g,"");
    formattedCardNumber=formattedCardNumber.substring(0,16);
    // split the card number is groups of 4 
    let cardnumberSections = formattedCardNumber.match(/\d{1,4}/g)
}