const contactForm = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const alertMessage = document.querySelector(".alert__container");

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const emailValidation = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();

  if(nameValue === '') {
    setError(name, 'Please enter first and last name');
  } else {
    setSuccess(name);
  }
  if (emailValue === '') {
    setError(email, 'Please enter your email');
  } else if (!emailValidation(emailValue)) {
    setError(email, 'Please provide a valid email address');
  } else {
    setSuccess(email);
  }
  if(subjectValue === '') {
    setError(subject, 'Please enter a subject');
  } else {
    setSuccess(subject);
  }
  return alertMessage.innerHTML = `<p> Your message has been sent! </p>`;
}