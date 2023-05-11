const { validateEmptyFields, validateEmail, validatePhone, validateMessageLength } = require('./main');

describe('Form Validation Tests', () => {
  test('checkFieldsNotEmpty should return false if any field is empty', () => {
    const fields = {
      name: 'John',
      email: '',
      phone: '123',
      message: 'Hello',
    };
    expect(validateEmptyFields(fields.name, fields.email, fields.phone, fields.message)).toBe(true);
  });

  test('checkFieldsNotEmpty should return true if all fields are filled', () => {
    const fields = {
      name: 'John',
      email: 'john@example.com2',
      phone: '1234567890',
      message: 'Hello',
    };
    expect(validateEmptyFields(fields.name, fields.email, fields.phone, fields.message)).toBe(false);
  });

  test('checkEmailValidity should return true for valid email address', () => {
    const email = 'john@example.com';
    expect(validateEmail(email)).toBe(true);
  });

  test('checkEmailValidity should return false for invalid email address', () => {
    const email = 'john@example';
    expect(validateEmail(email)).toBe(false);
  });

  test('checkPhoneValidity should return true for valid phone number', () => {
    const phone = '1234567890';
    expect(validatePhone(phone)).toBe(true);
  });

  test('checkPhoneValidity should return false for invalid phone number', () => {
    const phone = '+1-234-567-8901';
    expect(validatePhone(phone)).toBe(false);
  });

  test('checkMessageLengthValidity should return true for message length between 1 and 200 characters', () => {
    const message = 'Hello';
    expect(validateMessageLength(message)).toBe(true);
  });

  test('checkMessageLengthValidity should return false for message length less than 1 character', () => {
    const message = '';
    expect(validateMessageLength(message)).toBe(false);
  });

  test('checkMessageLengthValidity should return false for message length greater than 200 characters', () => {
    const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id nulla ut enim malesuada sodales. Suspendisse potenti. Mauris auctor neque eu mi venenatis vehicula. Integer et turpis lorem. Aliquam vel sagittis ante. Fusce tincidunt nulla eu orci tristique tristique. Cras varius metus nec justo bibendum congue. Nullam blandit nunc at nibh pharetra, nec suscipit libero hendrerit.';
    expect(validateMessageLength(message)).toBe(false);
  });
});
