let board = document.querySelector(".board");
let score = 0;

let foodX, foodY;
let snakeX = 3, snakeY = 5;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let gameOver=false;
let setIntervalId;

let gameOverSound=new Audio("gameover.mp3");
let eatFruitSound=new Audio("eatfruit.mp3");
let turnOnClickSound=new Audio("turnonclick.mp3");

let keys=document.querySelectorAll(".key");

// Generate random food position
function randomFoodPosition() {
    foodX = Math.floor(Math.random() * 14) + 1; // 1-14
    foodY = Math.floor(Math.random() * 14) + 1; // 1-14
}

// Moves the snake
function moveSnake(e) {
    if (e.key === "ArrowUp" && velocityY!=1) { velocityX = 0; velocityY = -1; turnOnClickSound.play();}
    else if (e.key === "ArrowDown" && velocityY!= -1) { velocityX = 0; velocityY = 1; turnOnClickSound.play();}
    else if (e.key === "ArrowLeft" && velocityX!= 1) { velocityX = -1; velocityY = 0; turnOnClickSound.play();}
    else if (e.key === "ArrowRight" && velocityX!= -1) { velocityX = 1; velocityY = 0;turnOnClickSound.play(); }
}
function showGameOver(){
    if(gameOver){
        clearInterval(setIntervalId);
      
        //for removing the effect of key

        document.removeEventListener("keydown",moveSnake);
        turnOnClickSound.pause();
       
         gameOverSound.play();

         setTimeout(()=>{
            alert(`Game Over, Your Final Score: ${score}`)
         },100);

    }
}
/*. What are snakeX and snakeY?

They represent the coordinates of the snake’s head on the grid.

Think of your board as a grid (14 × 14 in your code).

Each cell has an x (column) and y (row) position.

snakeX = current column of head.

snakeY = current row of head.

let snakeX = 3, snakeY = 5;

That means: head is at (3,5) → column 3, row 5.

🔹 2. What is snakeBody?

It’s an array of positions [x,y] for the entire snake.
Example:

snakeBody = [
  [3,5],   // head
  [2,5],   // body part
  [1,5]    // tail
];


Each element = [snakeX, snakeY] of that body segment.

What is i in the loop?
for (let i = 0; i < snakeBody.length; i++) {
    // i = index of each segment
}


i = 0 → head (snakeBody[0] = [snakeX, snakeY])

i = 1 → first body part

i = 2 → second body part (and so on)

So i is just the index telling us which part of the snake we are looking at.

 /*Purpose

👉 The purpose of this loop is to shift each body segment forward, so every part of the snake moves into the position of the segment in front of it.

This makes the snake appear as one continuous body that follows the head.

🔹 Why it goes backwards

It starts from the last segment (tail) and moves towards the head.

That way, when you update snakeBody[i], it doesn’t overwrite the position of the segment that still needs to move.


push() puts a new coordinate at the end of the array.*/
       

       
    
 
function main() {
    if (gameOver) {
        return showGameOver();
    }

    // Move head
    snakeX += velocityX;
    snakeY += velocityY;

    // Check wall collision
    if (snakeX <= 0 || snakeX > 14 || snakeY <= 0 || snakeY > 14) {
        gameOver = true;
        return showGameOver();
    }

    // Shift body forward
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    // Update head position
    snakeBody[0] = [snakeX, snakeY];

    // Check self-collision
    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeBody[0][0] === snakeBody[i][0] &&
            snakeBody[0][1] === snakeBody[i][1]) {
            gameOver = true;
            return showGameOver();
        }
    }

    // Eat food
    if (snakeX === foodX && snakeY === foodY) {
        eatFruitSound.play();
        let lastSegment = snakeBody[snakeBody.length - 1];
        snakeBody.push([lastSegment[0], lastSegment[1]]);
        score++;
        document.getElementById('performance').innerText= "Scores: " +score;
        randomFoodPosition();
    }

    // Render snake + food
    let setHTML = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;
    for (let i = 0; i < snakeBody.length; i++) {
        setHTML += `<div class="snake-head" id="div${i}" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
    }

    board.innerHTML = setHTML;


}

// Initialize
randomFoodPosition();
setIntervalId=setInterval(main,300); //automatic movement of the snake calling the main function automatically
document.addEventListener("keydown", moveSnake);

//Reset Function : loads the page again
function reset(){
    location.reload();
}
keys.forEach((key)=>{
    //simulate a keyboard event object
    key.addEventListener('click',()=>moveSnake({key:key.dataset.key}));
})

