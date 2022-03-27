const modal = document.getElementById("signUpModal");
const btnSignUp = document.querySelector("#btnModal");
const iconSignUp = document.querySelector(".btn-modal");
const span = document.getElementsByClassName("close")[0];
const btnSuccess = document.getElementById("successMessage")
const alertMessage = document.querySelector(".alert__container");
const signUpField = document.querySelector(".sign-up-fieldset");

btnSignUp.onclick = function() {
  modal.style.display = "block";
}

iconSignUp.onclick = function() {
  modal.style.display = "block";
}

btnSuccess.onclick = function() {
  modal.style.display = "block";
  alertMessage.style.display = "block";
  btnSuccess.style.display = "none";
  signUpField.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}