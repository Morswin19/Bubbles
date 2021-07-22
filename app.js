const mainContainer = document.querySelector('.main-container');

const bubble_create = () => {
  let newBubble = document.createElement('div');
  newBubble.classList.add('bubble');
  mainContainer.appendChild(newBubble);
  console.log(newBubble);
  let h = Math.round(Math.random() * 360);
  let s = Math.round(Math.random() * 100);
  let l = Math.round(Math.random() * 100);
  console.log(h, s, l);
  let newColor = `hsl(${h},${s}%,${l}%)`;
  console.log(newColor);
  newBubble.style.background = newColor;
};

window.addEventListener('click', bubble_create);
