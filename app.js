const mainContainer = document.querySelector('.main-container');

const bubble_create = () => {
  let newBubble = document.createElement('div');
  newBubble.classList.add('bubble');
  mainContainer.appendChild(newBubble);
  console.log(newBubble);
};

window.addEventListener('click', bubble_create);
