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
const tournamentField = document.getElementById("quantity");
const formSubmitButton = document.getElementsByClassName("btn-submit");
const radios = document.getElementsByClassName('checkbox-input');
const generalCondition = document.getElementById('checkbox1');




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
crossBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// close modal event for close button
document.getElementById("modal-form-close-button").addEventListener("click", closeModal);

//formSubmitButton.forEach((btn) => btn.addEventListener("click", validate));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  clearForm();
}

function closeModal() {
  clearForm();
  modalbg.style.display = "none";
  hideOverlay();
  
}

document.addEventListener('invalid', (function(){
  return function(e) {
    //prevent the browser from showing default error bubble / hint
    e.preventDefault();
    
    // optionally fire off some custom validation handler
    
  };
})(), true);

document.addEventListener('submit', (function(){
  return function(e) {
    //prevent the browser from showing default error bubble / hint
    e.preventDefault();
    
    // optionally fire off some custom validation handler
    // myValidation();
  };
})(), true);

function clearForm() {

  // Returns in the initial state the differents fields
  firstNameField.value = firstNameField.defaultValue;
  lastNameField.value = lastNameField.defaultValue;
  emailField.value = emailField.defaultValue;
  birthDateField.value = birthDateField.defaultValue;
  tournamentField.value = tournamentField.defaultValue;
  generalCondition.value = generalCondition.defaultValue;

  // Clear radios button check
  document.querySelectorAll('.checkbox-input').forEach(component => {
    component.checked = false;
  });
  
  

}

function showErrorMessage(validated, id){
  if(validated === false){
    console.log(id + " invalide");
    
    document.getElementById(id).style.display = "block";
  }
  else{
    console.log(id  + " valide");
    document.getElementById(id).style.display = "none";
  }
}

function clearErrorIndicators(){
  console.log("Clear error");
  // Clear for check box
  document.getElementsByClassName("formData")[5].style.border = "0";
  document.getElementById("custom-error-message-city").style.display = "none";
  document.getElementsByClassName("formData")[6].style.border = "0";
  
  showErrorMessage(true, "custom-error-prenom");
  showErrorMessage(true, "custom-error-nom");
  showErrorMessage(true, "custom-error-email");
  showErrorMessage(true, "custom-error-birthdate");
  showErrorMessage(true, "custom-error-tournament");
  showErrorMessage(true, "custom-error-message-condition");
  
}

function displayOverlay(){
  console.log("display modal");
  //document.getElementsByClassName("modal-component-overlay").style.display= 'block';
  const components = document.querySelectorAll('.modal-component-overlay');
  components.forEach(component => {
    component.style.display= 'block';
  });
  document.getElementById("modal-form-overlay").style.opacity = 0;
}
function hideOverlay(){
  console.log("hide modal");
  //document.getElementsByClassName("modal-component-overlay").style.display= 'block';
  const components = document.querySelectorAll('.modal-component-overlay');
  components.forEach(component => {
    component.style.display= 'none';
  });
  document.getElementById("modal-form-overlay").style.opacity = 1;
}

function validate() {
  
  var isFirstNameValide = firstNameField.checkValidity();
  var isLastNameValide = lastNameField.checkValidity();
  var isEmailValid = emailField.checkValidity();
  var isBirthDateValide = birthDateField.checkValidity();
  var isTournamentValide = tournamentField.checkValidity();
  var isGeneralConditionValide = generalCondition.checked;
  var isOneRadioChecked = false;


  
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {
          // get value, set checked flag or do whatever you need to
          isOneRadioChecked = true
      }
  }

  if(isEmailValid && isFirstNameValide && isLastNameValide && isBirthDateValide && isTournamentValide && isOneRadioChecked && isGeneralConditionValide) {
    console.log("valide");
    clearErrorIndicators();
    console.log(firstNameField.value);
    console.log(lastNameField.value);
    console.log(emailField.value);
    console.log(birthDateField.value);
    console.log(tournamentField.value);
    console.log(generalCondition.checked);
    console.log(isOneRadioChecked);
    displayOverlay();
    return true;
  }
  else {
    
    showErrorMessage(isFirstNameValide, "custom-error-prenom");
    showErrorMessage(isLastNameValide, "custom-error-nom");
    showErrorMessage(isEmailValid, "custom-error-email");
    showErrorMessage(isBirthDateValide, "custom-error-birthdate");
    showErrorMessage(isTournamentValide, "custom-error-tournament");
    showErrorMessage(isGeneralConditionValide, "custom-error-message-condition");
    
    // Handle the radio error messages
    
    if(isOneRadioChecked === false){
      // If no radio button is checked
      document.getElementsByClassName("formData")[5].style.border = "2px solid #e54858";
      document.getElementById("custom-error-message-city").style.display = "block";
    }
    else {
      document.getElementsByClassName("formData")[5].style.border = "0";
      document.getElementById("custom-error-message-city").style.display = "none";
    }
    
    
    //document.getElementsByClassName("formData")[5].style.border = "none";
    console.log("invalide");
    return false;
  }
  
}