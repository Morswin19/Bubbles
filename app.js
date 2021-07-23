const mainContainer = document.querySelector('.main-container');

const bubble_create = () => {
  let newBubble = document.createElement('div');
  newBubble.classList.add('bubble');
  mainContainer.appendChild(newBubble);
  let h = Math.round(Math.random() * 360);
  let s = 100;
  let l = Math.round(Math.random() * 100);
  let newColor = `hsl(${h},${s}%,${l}%)`;
  newBubble.style.background = newColor;
};

window.addEventListener('click', bubble_create);
