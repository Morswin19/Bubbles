class Bubble {
    constructor(width = '200px', xPosition = '300px', speed = "5"){
        this.width = width;
        this.height = width;
        this.xPosition = xPosition;
        this.speed = speed;
    }
    //events
    //methods
    createBubble(){
       let bubble = document.createElement('div');
       bubble.style.width = this.width;
       bubble.style.height = this.width;
       bubble.classList.add('bubble');
       return bubble;
    }
}

export default Bubble