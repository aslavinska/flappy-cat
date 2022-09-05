// Background scrolling speed
let backgroundMovingSpeed = 4;

// Constant Gravity value
const gravity = 0.5;

// Getting the cat element
let cat = document.querySelector('.cat');

// Getting the cat element properties
let catProps = cat.getBoundingClientRect();
let background = document.querySelector('.background').getBoundingClientRect();

// Getting reference to the score element
let score = document.querySelector('.score'); //could be broken 
let message = document.querySelector('.message');

// Setting initial game state to start
let gameState = 'Start';

let fanceSeperation = 0;
    
const fenceGap = 35;

// Add an eventlistener
document.addEventListener('keydown', (e) => {
    
    // If the enter key is pressed start the game 
    if (e.key == 'Enter' && gameState != 'Play') {
      document.querySelectorAll('.fence_sprite').forEach((e) => {
        e.remove();
      });
      cat.style.top = '55vh';
      gameInitialState = 'Play';
      message.innerHTML = '';
      score.innerHTML = '0';
      play();
    }
  });

function play(){
move();
callFence.requestAnimationFrame(createFence);
}

function move(){
    // Check if the game is over
    if (gameState != 'Play') return;

    // Check all fence elements
     let fenceSprite = document.querySelectorAll('.fence_sprite');
     fenceSprite.forEach((element)=>{

     })
}

function gravityFall(){
    if (gameState != 'Play') return;
    let catFly = 0;
    catFly = catFly + gravity;
    document.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp' || e.key == ' ') {
        catFly = -7;
      }
    });
  
    // Detect collision between the cat and the fence 
  
    if (catProps.top <= 0 ||
      catProps.bottom >= background.bottom) {
      gameState = 'End';
      message.innerHTML = 'Press Enter To Restart';
      message.style.left = '28vw';
      return;
    }
    cat.style.top = catProps.top + catFly + 'px';
    catProps = cat.getBoundingClientRect();
    requestAnimationFrame(gravityFall);
    requestAnimationFrame(gravityFall);
}

function callFence(){
    if (gameState != 'Play') return;
/**
 * If the distance between two fence panels exceeds a predefined balue create another fence panel
 */
    if (fenceSeperation > 100) {
        fenceSeperation = 0

      // Calculate random position of fence panels  on y axis
      let fencePosition = Math.floor(Math.random() * 40) + 4;
      let fenceInv = document.createElement('div');
      fenceInv.className = 'fence_sprite';
      fenceInv.style.top = fencePosition - 35 + 'vh';
      fenceInv.style.left = '90vw';
        
      // DOM call 
      document.body.appendChild(fenceInv);
      let fenceSprite = document.createElement('div');
      fenceSprite.className = 'fence_sprite';
      fenceSprite.style.top = fencePosition + fenceGap + 'vh';
      fenceSprite.style.left = '100vw';
      fenceSprite.increase_score = '1';
        
      // Append the created fence element in DOM
      document.body.appendChild(fenceSprite);
    }
    fenceSeperation++;
    requestAnimationFrame(createFence);
  }
