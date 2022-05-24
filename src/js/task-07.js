const refs = {
  fontSizeControl: document.querySelector('#font-size-control'),
  textValue: document.querySelector('#text'),
};

refs.fontSizeControl.addEventListener('input', changeFontSize);
window.addEventListener('dblclick', resetInput);

function changeFontSize() {
  refs.textValue.style.fontSize = refs.fontSizeControl.value + 'px';
  console.log('font-size:', refs.textValue.style.fontSize);
}

function resetInput() {
  refs.fontSizeControl.value = '';
  refs.textValue.style.fontSize = '';
}