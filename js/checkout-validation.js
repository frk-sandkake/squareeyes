const checkOutForm = document.getElementById('checkOutForm');
const name = document.getElementById('name');
const cardNumber = document.getElementById('card-number');
const securityCode = document.getElementById('security-code');
const alertMessage = document.getElementById('alertMessage');

checkOutForm.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const nameValue = name.value.trim();
  const cardNumberValue = cardNumber.value.trim();
  const securityCodeValue = securityCode.value.trim();

  if (nameValue === '') {
    setError(name, 'Please enter first and last name');
  } else {
    setSuccess(name);
  }
  if (cardNumberValue <= 5) {
    setError(cardNumber, 'Please enter card number');
  } else {
    setSuccess(cardNumber);
  }
  if (securityCodeValue <= 3) {
    setError(securityCode, 'Please enter CVV number');
  } else {
    setSuccess(securityCode);
  }
  if ((nameValue) && (cardNumberValue) && (securityCodeValue)) {
    alertMessage.style.display = 'block';
  }  else {
    alertMessage.style.display = 'none';
  }
}