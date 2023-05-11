function validateEmptyFields(name, email, phone, message) {
  if (!name || !email || !phone || !message) {
    return true;
  } else {
    return false;
  }
}
function validateEmail(email) {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    return false;
  } else {
    return true;
  }
}
function validatePhone(phone) {
  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(phone)) {
    return false;
  } else {
    return true;
  }
}
function validateMessageLength(message) {
  if (message.length <= 0 || message.length >= 200) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  validateEmptyFields,
  validateEmail,
  validatePhone,
  validateMessageLength,
};
