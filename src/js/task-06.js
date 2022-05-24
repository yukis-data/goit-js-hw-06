const refs = {
  validationInput: document.querySelector('#validation-input'),
  valueInput: document.querySelector('input[data-length]'),
};

const number = Number(refs.valueInput.dataset.length);

refs.validationInput.addEventListener('blur', validationInputValue);

function validationInputValue(event) {
  event.currentTarget.value.length === number
    ? refs.validationInput.setAttribute('class', 'valid')
    : refs.validationInput.setAttribute('class', 'invalid');
}