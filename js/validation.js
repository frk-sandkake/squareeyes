const contactForm = document.querySelector(".contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const alertMessage = document.querySelector(".alert__container");

function inputValidation(event) {
  event.preventDefault();
  if(checkLength(name.value, 8) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (emailValidation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if(checkLength(subject.value, 5) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if((checkLength(name.value, 8) === true) && (emailValidation(email.value) === true) && (checkLength(subject.value, 5) === true)) {
    alertMessage.style.display = "block";
  } else {
    alertMessage.style.display = "none";
  }
}
contactForm.addEventListener("submit", inputValidation);

function checkLength(value, len) {
  return value.trim().length > len;
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}