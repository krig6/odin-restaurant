export const initializeFormValidation = () => {
  const firstNameField = document.getElementById('first-name');
  const emailAddressField = document.getElementById('email-address');

  if (firstNameField) {
    firstNameField.addEventListener('input', () => {
      validateField(firstNameField, {
        validationPattern: /^[a-zA-Z\s]+$/,
        formatValue: (value) =>
          value
            .replace(/\s+/g, ' ')
            .toLowerCase()
            .replace(/(^|\s)\S/g, (match) => match.toUpperCase()),
        errorMessage: 'Numbers are not allowed in this field.'
      });
    });
  }

  if (emailAddressField) {
    emailAddressField.addEventListener('input', () => {
      validateField(emailAddressField, {
        validationPattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        errorMessage: 'Please enter a valid email address.'
      });
    });
  }
};

const validateField = (field, options) => {
  const { validationPattern, formatValue, errorMessage, successMessage } =
    options;
  let value = field.value;

  if (formatValue) {
    value = formatValue(value);
    field.value = value;
  }

  if (value.trim() === '') {
    setFieldValidity(field, false, 'This field cannot be empty.');
  } else if (validationPattern && !validationPattern.test(value)) {
    setFieldValidity(field, false, errorMessage);
  } else {
    setFieldValidity(field, true, successMessage || '');
  }
};

const setFieldValidity = (field, isValid, message) => {
  if (isValid) {
    field.setCustomValidity('');
    field.style.border = '2px solid green';
  } else {
    field.setCustomValidity(message);
    field.style.border = '2px solid red';
  }
  field.reportValidity();
};
