const refs = {
  textInput: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.textInput.addEventListener('input', inputValueChange);

function inputValueChange(event) {
  event.target.value !== ''
    ? (refs.output.textContent = event.currentTarget.value)
    : (refs.output.textContent = 'Anonymous');
}