const mainContainer = document.querySelector('.main-container');

const bubble_create = () => {
  let newBubble = document.createElement('div');
  newBubble.classList.add('bubble');
  mainContainer.appendChild(newBubble);
  let h = Math.round(Math.random() * 360);
  let s = 100;
  let l = Math.round(Math.random() * 100);
  let bubbleNewColor = `hsl(${h},${s}%,${l}%)`;
  let bubbleSize = Math.round(Math.random() * 100) + 'px';
  newBubble.style.background = bubbleNewColor;
  setTimeout(function() {
    newBubble.style.width = bubbleSize;
    newBubble.style.height = bubbleSize;
  }, 1);
};

window.addEventListener('click', bubble_create);
