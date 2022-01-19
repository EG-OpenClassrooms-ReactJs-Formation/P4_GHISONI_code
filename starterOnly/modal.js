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
const crossBtn = document.querySelectorAll(".close");

// Form data
const firstNameField = document.getElementById("first");
const lastNameField = document.getElementById("last");
const emailField = document.getElementById("email");
const birthDateField = document.getElementById("birthdate");
const formSubmitButton = document.getElementsByClassName("btn-submit");
const radios = document.getElementsByClassName('checkbox-input');
const generalCondition = document.getElementById('checkbox1');




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
crossBtn.forEach((btn) => btn.addEventListener("click", closeModal));
//formSubmitButton.forEach((btn) => btn.addEventListener("click", validate));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  clearForm();
}

function closeModal() {
  clearForm();
  modalbg.style.display = "none";
  
}


function clearForm() {

  firstNameField.value = firstNameField.defaultValue;
  lastNameField.value = lastNameField.defaultValue;
  emailField.value = emailField.defaultValue;
  birthDateField.value = birthDateField.defaultValue;
  //radios.value = radios.defaultValue;
  generalCondition.value = generalCondition.defaultValue;

}

function validate() {
  var isEmailValid = emailField.checkValidity();
  var isFirstNameValide = firstNameField.checkValidity();
  
  var isLastNameValide = lastNameField.checkValidity();
  var isBirthDateValide = birthDateField.checkValidity();
  var isGeneralConditionValide = generalCondition.checked;
  var isOneRadioChecked = false;


  console.log(isFirstNameValide);
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {
          // get value, set checked flag or do whatever you need to
          isOneRadioChecked = true
      }
  }

  if(isEmailValid && isFirstNameValide && isLastNameValide && isBirthDateValide && isOneRadioChecked && isGeneralConditionValide) {
    console.log("valide");
    alert("Merci ! Votre réservation a été reçue.");
    return true;
  }
  else {
    if(isOneRadioChecked === false){
      document.getElementsByClassName("formData")[5].style.border = "2px solid #e54858";
      //alert("Check a radiobutton");
    }
    else{
      document.getElementsByClassName("formData")[5].style.border = "0";
    }
    //document.getElementsByClassName("formData")[5].style.border = "none";
    console.log("invalide");
    return false;
  }
  
}