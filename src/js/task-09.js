const refs = {
  onButtonChangeColor: document.querySelector('.change-color'),
  onSpanColorRelevance: document.querySelector('.color'),
};

refs.onButtonChangeColor.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  refs.onSpanColorRelevance.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}