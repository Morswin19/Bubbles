import Selectors from "./modules/Selectors.js";
import Bubble from "./modules/Bubble.js";

let selector = new Selectors();

const addBubble = (width, position, speed) => {
    let bubble = new Bubble(width, position, speed);
    let bubbleElement = bubble.createBubble();
    console.log(selector.container)
    document.body.insertBefore(bubbleElement, selector.container);
    console.log(bubble, bubbleElement)
}

addBubble('300px', 0, 0)