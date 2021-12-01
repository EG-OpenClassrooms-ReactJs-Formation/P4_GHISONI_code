function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const crossBtn = document.querySelectorAll(".close")

// Form data
const firstNameField = document.getElementById("first")
const lastNameField = document.getElementById("last")
const emailField = document.getElementById("email")
const birthDateField = document.getElementById("birthdate")
const formSubmitButton = document.getElementsByClassName("btn-submit")
const radios = document.getElementsByClassName('checkbox-input');
const generalCondition = document.getElementById('checkbox1');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
crossBtn.forEach((btn) => btn.addEventListener("click", closeModal));
crossBtn.forEach((btn) => btn.addEventListener("click", validate));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

function validate() {
  const isEmailValid = emailField.checkValidity();
  const isFirstNameValide = firstNameField.checkValidity();
  const isLastNameValide = lastNameField.checkValidity();
  const isBirthDateValide = birthDateField.checkValidity();
  const isGeneralConditionValide = generalCondition.checked;
  var isOneRadioChecked = false;
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {
          // get value, set checked flag or do whatever you need to
          isOneRadioChecked = true
      }
  }

  if(isEmailValid && isFirstNameValide && isLastNameValide && isBirthDateValide && isOneRadioChecked && isGeneralConditionValide) {
    console.log("valide")
    return true;
  }
  else {
    console.log("invalide")
    return false;
  }
  
}