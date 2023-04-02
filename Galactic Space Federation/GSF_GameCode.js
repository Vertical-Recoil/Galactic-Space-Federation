import { getStats, addStat, db } from "./CRUD.js";

// Parse the query string to extract the username value
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');

// Use the username value as needed
console.log(`Welcome, ${username}!`);


var shipx;              //ship position X
var shipy;              //ship position Y
var x;                  //Stars alignment X
var y;                  //Stars alignment Y
var health;             //Player Health Counter
var score;              //Player Score Counter
var playerBulletX;      //Player Laser Postion X
var playerBulletX2;     //Player Laser Postion X2
var playerBulletX3;     //Player Laser Postion X3
var playerBulletY;      //Player Laser Postion Y
var playerBulletYTop;   //Player Laser Postion Y Top
var playerBulletYBottom;//Player Laser Postion Y Bottom
var playerBulletXSpeed; //Player Laser Speed
var song;               //Variable that stores the soundtrack
var songtracker;        //Boolean that only allows the song to play once (no overlap)
var pewpewSound;        //Variable that stores the blaster sound effect
var begin;              //Boolean that determines the launch of the actual game post title screen
var ty;                 //String that holds the title screen location mesh
var keydown;            //Variable that determines whether a key is pressed
var lost;               //Lose condition video storage variable
var assetsLoaded = false;       //condition to see when preload is done
var loadAssetBuffer;

//Database counter
var dataBaseLockVar = false;

//Ship Hull colors
var hullR;
var hullG;
var hullB;
//Ship Engine colors
var engineR;
var engineG;
var engineB;

var threat0;            //VLRT Image
var threat1;            //LRT Image
var threat2;            //MRT Image
var threat3;            //HRT Image
var threat4;            //VHRT Image
var threat5;            //ERT Image

var ttextboxcounter;    //Variable that acts as a boolean, either letting or not letting the text screen play
var threattextbox;      //Variable that creates a buffer for how long the level up screen should stay

var timing;             //Stops the game after a couple seconds when the video stops playing

//Power-Up Variables START
//Health
var lifeboxX;           //Life Pool top left X
var lifeboxY;           //Life Pool top left Y

//
var iddqd;              //Variable that determines whether or not the user has invulnerability (Doom easter egg)
var iddqdX;             //Variable that determines the X location of the invulnerability power-up
var iddqdY;             //Variable that determines the Y location of the invulnerability power-up
var iddqdT;             //Variable that determines how long iddqd has left;

//
var quick;              //Variable that determines whether of not the user has quickshot
var quickX;             //Variable that determines the X location of the quickshot power-up
var quickY;             //Variable that determines the Y location of the quickshot power-up
var quickT;             //Variable that determines how long quick has left

//
var mult;               //Variable that determines whether of not the user has multishop
var multX;              //Variable that determines the X location of the multishot power-up
var multY;              //Variable that determines the Y location of the multishot power-up
var multT;              //Variable that determines how long multishot has left

//Power-Up Variables END
/*
    ALL ENEMY VARIABLES START

    Each enemy has 7 Variables, and they are in order:

    Enemy Ship Position X
    Enemy Ship Position Y
    Enemy Bullet Position X
    Enemy Bullet Position Y
    Enemy Ship Speed X (Only has X because ships will only move left) (CAN BE CHANGED LATER)
    Enemy Bullet Speed X (Only has X because bullets will only move left) (WILL NOT BE CHANGED)
    Enemy Hit Registration (Each enemy module needs this so that 2 or more intersecting bullets both have a chance to proc damage)
*/

//LVL 1
var enemyX1;
var enemyY1;
var enemyBulletX1;
var enemyBulletY1;
var enemyXSpeed1;
var enemyBulletXSpeed1;
var hitReg1;

//LVL 2
var enemyX2;
var enemyY2;
var enemyBulletX2;
var enemyBulletY2;
var enemyXSpeed2;
var enemyBulletXSpeed2;
var hitReg2;

//LVL 3
var enemyX3;
var enemyY3;
var enemyBulletX3;
var enemyBulletY3;
var enemyXSpeed3;
var enemyBulletXSpeed3;
var hitReg3;


//LVL SUBBOSS
var enemyXSubBoss;
var enemyYSubBoss;
var enemyBulletXSubBoss;
var enemyBulletYSubBoss;
var enemyXSpeedSubBoss
var enemyBulletXSpeedSubBoss;
var hitRegSubBoss;
var isSubBossDead;

//LVL BOSS
var enemyXBoss;
var enemyYBoss;
var enemyBulletXBoss;
var enemyBulletYBoss;
var enemyXSpeedBoss
var enemyBulletXSpeedBoss;
var hitRegBoss;
var bossHealth;
var isBossDead;

//ENEMY DEBUFF
var slowed;
var slowedDuration;

/*
    ALL ENEMY VARIABLES END
*/

function preload() {
  soundFormats('ogg', 'mp3');
  song = loadSound("GameMusic.mp3");
  pewpewSound = loadSound("LaserBlaster.mp3");
  pewpewSound.setVolume(0.3)

  threat0 = loadImage('Threat0.png');
  threat1 = loadImage('Threat1.png');
  threat2 = loadImage('Threat2.png');
  threat3 = loadImage('Threat3.png');
  threat4 = loadImage('Threat4.png');
  threat5 = loadImage('Threat5.png');

  //Video Setup
  lost = createVideo(['LoseVid.mp4']);
  lost.hide()
  song.setVolume(1)
  lost.volume(1)

  return Promise.all([song]);
}

/*
-----------------------------------------
    ALL ENEMY LOGIC START
-----------------------------------------
*/

function enemyLvl1(){
    fill(190, 0, 0)
    rect(enemyX1, enemyY1, 40, 40)

    fill(120)
    rect(enemyX1 - 10, enemyY1 + 13, 35, 12)
    enemyX1 -= enemyXSpeed1

    fill(255, 0, 0)
    rectMode(CENTER)
    rect(enemyBulletX1 - 20, enemyBulletY1 + 18, 30, 10)
    rectMode(CORNER)
    enemyBulletX1 -= enemyBulletXSpeed1
    if (enemyBulletX1 <= -30) {
        enemyBulletX1 = enemyX1
        enemyBulletY1 = enemyY1
    }

    if (enemyBulletX1 >= shipx - 10 && enemyBulletX1 <= shipx + 35 && enemyBulletY1 >= shipy - 35 && enemyBulletY1 <= shipy + 10) {
        if (hitReg1 == true && iddqd == false) {
            health--
            hitReg1 = 0
        }

    }

    if (enemyBulletX1 == enemyX1) {
        hitReg1 = 1
    }

    if (enemyX1 <= -30) {
        enemyX1 = random(800, 900)
        enemyY1 = random(115, 550)
        score = score - 100
    }
    if (playerBulletX >= enemyX1 && playerBulletX <= enemyX1 + 40 && playerBulletY >= enemyY1 && playerBulletY <= enemyY1 + 40 || (playerBulletX2 >= enemyX1 && playerBulletX2 <= enemyX1 + 40 && playerBulletYTop >= enemyY1 && playerBulletYTop <= enemyY1 + 40) || (playerBulletX3 >= enemyX1 && playerBulletX3 <= enemyX1 + 40 && playerBulletYBottom >= enemyY1 && playerBulletYBottom <= enemyY1 + 40)) {
        enemyX1 = random(800, 900)
        enemyY1 = random(115, 550)
        score = score + int(random(59, 217))
    }
}

function enemyLvl2(){
    fill(0, 190, 0)
    rect(enemyX2, enemyY2, 40, 40)

    fill(120)
    rect(enemyX2 - 10, enemyY2 + 13, 35, 12)
    enemyX2 -= enemyXSpeed2

    fill(255, 0, 0)
    rectMode(CENTER)
    rect(enemyBulletX2 - 20, enemyBulletY2 + 18, 30, 10)
    rectMode(CORNER)
    enemyBulletX2 -= enemyBulletXSpeed2
    if (enemyBulletX2 <= -30) {
        enemyBulletX2 = enemyX2
        enemyBulletY2 = enemyY2
    }

    if (enemyBulletX2 >= shipx - 10 && enemyBulletX2 <= shipx + 35 && enemyBulletY2 >= shipy - 35 && enemyBulletY2 <= shipy + 10) {
        if (hitReg2 == true && iddqd == false) {
            health--
            hitReg2 = 0
        }

    }

    if (enemyBulletX2 == enemyX2) {
        hitReg2 = 1
    }

    if (enemyX2 <= -30) {
        enemyX2 = random(800, 900)
        enemyY2 = random(115, 550)
        score = score - 100
    }
    if (playerBulletX >= enemyX2 && playerBulletX <= enemyX2 + 40 && playerBulletY >= enemyY2 && playerBulletY <= enemyY2 + 40 || (playerBulletX2 >= enemyX2 && playerBulletX2 <= enemyX2 + 40 && playerBulletYTop >= enemyY2 && playerBulletYTop <= enemyY2 + 40) || (playerBulletX3 >= enemyX2 && playerBulletX3 <= enemyX2 + 40 && playerBulletYBottom >= enemyY2 && playerBulletYBottom <= enemyY2 + 40)) {
        enemyX2 = random(800, 900)
        enemyY2 = random(115, 550)
        score = score + int(random(59, 217))
    }
}

function enemyLvl3(){
    fill(0, 0, 190)
    rect(enemyX3, enemyY3, 40, 40)

    fill(120)
    rect(enemyX3 - 10, enemyY3 + 13, 35, 12)
    enemyX3 -= enemyXSpeed3

    fill(255, 0, 0)
    rectMode(CENTER)
    rect(enemyBulletX3 - 20, enemyBulletY3 + 18, 30, 10)
    rectMode(CORNER)
    enemyBulletX3 -= enemyBulletXSpeed3
    if (enemyBulletX3 <= -30) {
        enemyBulletX3 = enemyX3
        enemyBulletY3 = enemyY3
    }

    if (enemyBulletX3 >= shipx - 10 && enemyBulletX3 <= shipx + 35 && enemyBulletY3 >= shipy - 35 && enemyBulletY3 <= shipy + 10) {
        if (hitReg3 == true && iddqd == false) {
            health--
            hitReg3 = 0
        }

    }

    if (enemyBulletX3 == enemyX3) {
        hitReg3 = 1
    }

    if (enemyX3 <= -30) {
        enemyX3 = random(800, 900)
        enemyY3 = random(115, 550)
        score = score - 100
    }
    if (playerBulletX >= enemyX3 && playerBulletX <= enemyX3 + 40 && playerBulletY >= enemyY3 && playerBulletY <= enemyY3 + 40 || (playerBulletX2 >= enemyX3 && playerBulletX2 <= enemyX3 + 40 && playerBulletYTop >= enemyY3 && playerBulletYTop <= enemyY3 + 40) || (playerBulletX3 >= enemyX3 && playerBulletX3 <= enemyX3 + 40 && playerBulletYBottom >= enemyY3 && playerBulletYBottom <= enemyY3 + 40)) {
        enemyX3 = random(800, 900)
        enemyY3 = random(115, 550)
        score = score + int(random(59, 217))
    }
}

function enemyLvlSubBoss(){
    fill(255, 165, 0); // orange rectangle
    rect(enemyXSubBoss, enemyYSubBoss, 40, 40);
    fill(120);
    rect(enemyXSubBoss - 10, enemyYSubBoss + 13, 35, 12);
    enemyXSubBoss -= enemyXSpeedSubBoss;
    
    fill(0, 0, 255); // blue laser
    rectMode(CENTER);
    rect(enemyBulletXSubBoss - 20, enemyBulletYSubBoss + 18, 30, 10);
    rectMode(CORNER);
    enemyBulletXSubBoss -= enemyBulletXSpeedSubBoss;
    
    if (enemyBulletXSubBoss <= -30) {
        if(isSubBossDead)
        {
          enemyBulletXSpeedSubBoss = 0;
          enemyBulletXSubBoss = enemyXSubBoss;
          enemyBulletYSubBoss = enemyYSubBoss;
        }
        else{
          enemyBulletXSubBoss = enemyXSubBoss;
          enemyBulletYSubBoss = enemyYSubBoss;
        }
        
      }
    
    if (enemyBulletXSubBoss >= shipx - 10 && enemyBulletXSubBoss <= shipx + 35 && enemyBulletYSubBoss >= shipy - 35 && enemyBulletYSubBoss <= shipy + 10) {
      if (hitRegSubBoss == true && iddqd == false) {
        health--;
        hitRegSubBoss = 0;
        slowed = true; //set slowed to true
      }
    }

    if (slowed){
        setTimeout(function(){
            slowed = false;
        }, slowedDuration * 1000);
    }
    
    if (enemyBulletXSubBoss == enemyXSubBoss) {
      hitRegSubBoss = 1;
    }
    
    if (enemyXSubBoss <= -30) {
        isSubBossDead = true;
        enemyXSubBoss = 850; //move subboss off screen
        enemyYSubBoss = random(115, 550);
        enemyXSpeedSubBoss = 0;
        setTimeout(function() {
            isSubBossDead = false;
            enemyXSpeedSubBoss = 2;
            if(score >= 35000){
                enemyXSpeedSubBoss = 3;
            }
            enemyBulletXSpeedSubBoss = 8;
          score = score + int(random(59, 217));
        }, 4000); // 4 seconds delay
      score = score - 100;
    }
    
    if (playerBulletX >= enemyXSubBoss && playerBulletX <= enemyXSubBoss + 40 && playerBulletY >= enemyYSubBoss && playerBulletY <= enemyYSubBoss + 40 || (playerBulletX2 >= enemyX3 && playerBulletX2 <= enemyX3 + 40 && playerBulletYTop >= enemyY3 && playerBulletYTop <= enemyYSubBoss + 40) || (playerBulletX3 >= enemyXSubBoss && playerBulletX3 <= enemyXSubBoss + 40 && playerBulletYBottom >= enemyYSubBoss && playerBulletYBottom <= enemyYSubBoss + 40)) {
        isSubBossDead = true;
        enemyXSubBoss = 850; //move subboss off screen
        enemyYSubBoss = random(115, 550);
        enemyXSpeedSubBoss = 0;
        score = score + int(random(59, 217));
        setTimeout(function() {
            isSubBossDead = false;
            enemyXSpeedSubBoss = 2;
            if(score >= 35000){
                enemyXSpeedSubBoss = 3;
            }
            enemyBulletXSpeedSubBoss = 8;
        }, 4000); // 4 seconds delay
    }
  }

  function enemyLvlBoss(){
    fill(255, 255, 255); // white rectangle
    rect(enemyXBoss, enemyYBoss, 40, 40);
    fill(120); 
    rect(enemyXBoss - 10, enemyYBoss + 13, 35, 12);
    enemyXBoss -= enemyXSpeedBoss;
    
    fill(255, 255, 255);; // white laser
    rectMode(CENTER);
    rect(enemyBulletXBoss - 20, enemyBulletYBoss + 18, 30, 10);
    rectMode(CORNER);
    enemyBulletXBoss -= enemyBulletXSpeedBoss;
    
    //Constraining the boss movement
    enemyYBoss = constrain(enemyYBoss, 115,550);
    enemyXBoss = constrain(enemyXBoss, 550,950);

    //Move the boss up or down based on player
    if (enemyYBoss < shipy){
        enemyYBoss +=1;
    }
    else if(enemyYBoss > shipy)
    {
        enemyYBoss -=1;
    }

    if (enemyBulletXBoss <= -30) {
      if(isBossDead)
      {
        enemyBulletXSpeedBoss = 0;
        enemyBulletXBoss = enemyXBoss;
        enemyBulletYBoss = enemyYBoss;
      }
      else{
        enemyBulletXBoss = enemyXBoss;
        enemyBulletYBoss = enemyYBoss;
      }
      
    }
    
    if (enemyBulletXBoss >= shipx - 10 && enemyBulletXBoss <= shipx + 35 && enemyBulletYBoss >= shipy - 35 && enemyBulletYBoss <= shipy + 10) {
      if (hitRegBoss == true && iddqd == false) {
        health--;
        hitRegBoss = 0;
        slowed = true; //set slowed to true
      }
    }

    if (slowed){
        setTimeout(function(){
            slowed = false;
        }, slowedDuration * 1000);
    }
    
    if (enemyBulletXBoss == enemyXBoss) {
      hitRegBoss = 1;
    }
    
    if (playerBulletX >= enemyXBoss && playerBulletX <= enemyXBoss + 40 && playerBulletY >= enemyYBoss && playerBulletY <= enemyYBoss + 40 || (playerBulletX2 >= enemyXBoss && playerBulletX2 <= enemyXBoss + 40 && playerBulletYTop >= enemyYBoss && playerBulletYTop <= enemyYBoss + 40) || (playerBulletX3 >= enemyXBoss && playerBulletX3 <= enemyXBoss + 40 && playerBulletYBottom >= enemyYBoss && playerBulletYBottom <= enemyYBoss + 40)) {
        bossHealth--;
        if (bossHealth <= 0){
            isBossDead = true;
            enemyXBoss = 850; // move boss off screen
            enemyYBoss = random(115, 550);
            enemyXSpeedBoss = 0;
            score = score + int(random(59, 217));
            setTimeout(function() {
                isBossDead = false;
                enemyXSpeedBoss = 2;
                enemyBulletXSpeedBoss = 8;
              bossHealth = 5; //reset boss health
            }, 10000); // 10 seconds delay
          }
     
    }
  }
/*
-----------------------------------------
    ALL ENEMY LOGIC END

    SETUP PHASE START (RUNS ONCE AT BEGINNING)
-----------------------------------------
*/

function setup() {
            preload();
            if (assetsLoaded) {
                // Do something with the loaded assets
                let canvas = createCanvas(800, 600);

                // Calculate the x and y position of the canvas to center it
                let canvasX = (windowWidth - width) / 2;
                let canvasY = (windowHeight - height) / 5;
    
                // Set the position of the canvas using the style() function
                canvas.style('position', 'absolute');
                canvas.style('left', canvasX + 'px');
                canvas.style('top', canvasY + 'px');
                
            //Variables
                //Ship Variables
                shipx = 100
                shipy = 300
                hullR = 120
                hullG = 120
                hullB = 120
                engineR = 0
                engineG = 80
                engineB = 0

                x = 400
                y = 300
                health = 5
                hitReg1 = 0
                hitReg2 = 0
                hitReg3 = 0
                score = 0
                playerBulletY = shipy
                playerBulletYTop = shipy +20
                playerBulletYBottom = shipy -20
                playerBulletX = 800
                playerBulletX2 = 800
                playerBulletX3 = 800
                ty = 600
                timing = 0
                songtracker = 0
                loadAssetBuffer = 300;

                enemyX1 = random(850, 900)
                enemyY1 = random(50, 550)
                enemyBulletX1 = enemyX1
                enemyBulletY1 = enemyY1
                enemyXSpeed1 = 2
                enemyBulletXSpeed1 = 8

                enemyX2 = random(850, 900)
                enemyY2 = random(50, 550)
                enemyBulletX2 = enemyX2
                enemyBulletY2 = enemyY2
                enemyXSpeed2 = 2
                enemyBulletXSpeed2 = 8

                enemyX3 = random(850, 900)
                enemyY3 = random(50, 550)
                enemyBulletX3 = enemyX3
                enemyBulletY3 = enemyY3
                enemyXSpeed3 = 2
                enemyBulletXSpeed3 = 8
                
                enemyXSubBoss = random(1050, 1100);
                enemyYSubBoss = random(50, 550);
                enemyBulletXSubBoss = enemyXSubBoss;
                enemyBulletYSubBoss = enemyYSubBoss;
                enemyXSpeedSubBoss = 2;
                enemyBulletXSpeedSubBoss = 8;
                isSubBossDead = false;

                enemyXBoss = random(1050, 1100);
                enemyYBoss = random(50, 550);
                enemyBulletXBoss = enemyXSubBoss;
                enemyBulletYBoss = enemyYSubBoss;
                enemyXSpeedBoss = 1;
                enemyBulletXSpeedBoss = 8;
                bossHealth = 5;
                isBossDead = false;
            //Debuff
                slowed = false;
                slowedDuration = 10;
            //Power-Up Default Values
                //Health
                lifeboxX = random(1500, 2000)
                lifeboxY = random(50, 550)

                //Invulnerability
                iddqd = false;
                iddqdX = random(1500, 2000)
                iddqdY = random(50, 550)
                iddqdT = 0
                
                //Quick-shot
                quick =false;
                quickX = random(1500, 2000)
                quickY = random(50, 550)
                quickT = 0

                //Multi-shot
                mult = false;
                multX = random(1500, 2000)
                multY = random(50, 550)
                multT = 0

                background(0, 0, 50)
                stars()
              } else {
                // Assets are still loading
              }

        }

/*
-----------------------------------------
    SETUP PHASE END

    CORE FUNCTIONS START
-----------------------------------------
*/

//Shoots laser when mouse is pressed
function mousePressed() {

    document.addEventListener('mousedown', (event) => {
        if (event.button === 0) {
            //playerBulletX -= playerBulletXSpeed
            if (playerBulletX >= 800) {
                fill(0, 255, 0)
                playerBulletX = shipx
                playerBulletY = shipy
                if(mult === true){
                    playerBulletX2 = shipx
                    playerBulletX3 = shipx
                    playerBulletYTop = shipy+20
                    playerBulletYBottom = shipy-20
                }
                pewpewSound.play()
            }
        }
        });
}


//Your Millenium Falcon :D (Visuals)
function ship() {

    //Hull Color and Shape
    fill(hullR, hullG, hullB);
    triangle(shipx - 25, shipy + 25, shipx - 25, shipy - 25, shipx + 30, shipy)

    //Engine Color and Shape
    fill(engineR, engineG, engineB)
    rect(shipx - 30, shipy - 19, 40, 10)
    rect(shipx - 30, shipy + 8, 40, 10)

    //Reset Color
    fill(255)


}


//An assortment of stars... just chillin
function stars() {
    fill(255)
    //left -400
    ellipse(x - 250, y + 111, 5, 5)
    ellipse(x - 300, y - 247, 5, 5)
    ellipse(x - 350, y - 167, 5, 5)
    ellipse(x - 800, y + 198, 5, 5)
    ellipse(x - 450, y - 216, 5, 5)
    ellipse(x - 500, y + 82, 5, 5)
    ellipse(x - 550, y - 122, 5, 5)

    //center do not touch
    ellipse(x + 150, y + 111, 5, 5)
    ellipse(x + 100, y - 247, 5, 5)
    ellipse(x + 50, y - 167, 5, 5)
    ellipse(x - 400, y + 198, 5, 5)
    ellipse(x - 50, y - 216, 5, 5)
    ellipse(x - 100, y + 82, 5, 5)
    ellipse(x - 150, y - 122, 5, 5)

    //right +400
    ellipse(x + 550, y + 111, 5, 5)
    ellipse(x + 500, y - 247, 5, 5)
    ellipse(x + 450, y - 167, 5, 5)
    ellipse(x, y + 198, 5, 5)
    ellipse(x + 350, y - 216, 5, 5)
    ellipse(x + 300, y + 82, 5, 5)
    ellipse(x + 250, y - 122, 5, 5)

    //farright +800
    ellipse(x + 950, y + 111, 5, 5)
    ellipse(x + 900, y - 247, 5, 5)
    ellipse(x + 850, y - 167, 5, 5)
    ellipse(x + 400, y + 198, 5, 5)
    ellipse(x + 750, y - 216, 5, 5)
    ellipse(x + 700, y + 82, 5, 5)
    ellipse(x + 650, y - 122, 5, 5)

    x--

    if (x <= 0) {
        x = x + 400
    }
}


//All the code for your health and what not. Also causes Game Over to work
function textEffect() {
    text("Score: " + score, 600, 575)
    strokeWeight(5)
    stroke(255)
    if (health >= 5) {
        fill(37, 189, 0)
        rect(25, 25, 40, 40)
        rect(85, 25, 40, 40)
        rect(145, 25, 40, 40)
        rect(205, 25, 40, 40)
        rect(265, 25, 40, 40)
    }
    else if (health == 4) {
        fill(37, 189, 0)
        rect(25, 25, 40, 40)
        rect(85, 25, 40, 40)
        rect(145, 25, 40, 40)
        rect(205, 25, 40, 40)
    }
    else if (health == 3) {
        fill(225, 160, 0)
        rect(25, 25, 40, 40)
        rect(85, 25, 40, 40)
        rect(145, 25, 40, 40)
    }
    else if (health == 2) {
        fill(225, 160, 0)
        rect(25, 25, 40, 40)
        rect(85, 25, 40, 40)
    }
    else if (health == 1) {
        fill(179, 0, 0)
        rect(25, 25, 40, 40)
    }
    else {
        song.pause()

        stroke(0)
        strokeWeight(1)
        fill(255, 0, 0)
        textSize(20)
        if (score <= 0) {
            text("Who put YOU in the pilot seat!", 215, 575)
        }
        else if (score <= 5000) {
            text("Your skills are lacking, cadet!", 215, 575)
        }
        else if (score <= 11000) {
            text("Better luck next time, rookie!", 215, 575)
        }
        else if (score <= 18000) {
            text("At least you can aim, marine!", 215, 575)
        }
        else if (score <= 26000) {
            text("Very good work, comrade!", 240, 575)
        }
        else if (score <= 35000) {
            text("I expected nothing less from an ACE!", 200, 575)
        }
        else {
            text("I can  go as far as to say I underestimated you, legend!", 40, 575)
        }
        text("Your score was: " + score, 250, 550)


    }
    stroke(0)
    strokeWeight(1)
}

//If you press M, music plays (requires beefy computer)
function keyPressed() {
    if(loadAssetBuffer <= 0){
        if (keyCode == 77 && songtracker == 0) {
            song.loop()
            songtracker = 1
        }
        else {
            
        }
    }else{

    }
}

function reticle() {
    //Spaceship Aim Down Sight Reticle.
    fill(0, 255, 0)
    noCursor()
    strokeWeight(5)
    stroke(0, 255, 0)
    point(mouseX, mouseY)
    strokeWeight(1)
    stroke(0, 0, 0, 0)
    
    rectMode(CENTER)
    rect(mouseX - 10, mouseY - 12.5, 10, 3)
    rect(mouseX + 10, mouseY - 12.5, 10, 3)
    rect(mouseX - 10, mouseY + 12.5, 10, 3)
    rect(mouseX + 10, mouseY + 12.5, 10, 3)

    rect(mouseX - 12.5, mouseY - 10, 3, 10)
    rect(mouseX - 12.5, mouseY + 10, 3, 10)
    rect(mouseX + 12.5, mouseY - 10, 3, 10)
    rect(mouseX + 12.5, mouseY + 10, 3, 10)
    rectMode(CORNER)
}

function titleScreen() {
    background(0, 0, 50);

    ty -= 1
    ty = constrain(ty, -150, 600)
    textSize(25)
    fill(255, 255, 0)
    
    //Arcade Text
    text("In a land far, far away,", 250, ty)
    text("In the year 2178,", 280, ty + 50)
    text("An alien colony attacks Earth,", 220, ty + 100)
    text("You must defend Earth from them!", 195, ty + 150)
    text("Controls:", 315, ty + 300)
    text("W = Up, S = Down", 260, ty + 350)
    text("A = Left, D = Right", 260, ty + 400)
    text("LMB = Fire", 290, ty + 450)
    text("M = Music", 295, ty + 500)
    text("Insert Coin (Q) to start!", 240, ty + 550)
    text("1 Credit: $1.25", 280, ty + 700)
    text("Please wait for reticle on screen to play", 210, ty + 730)

    //Arcade Screen
    fill(0, 0, 0, 0)
    stroke(0, 255, 0)
    strokeWeight(20)
    rect(0, 0, 800, 600)
    strokeWeight(10)
    stroke(255)
    fill(255, 0, 0)
    rect(30, 50, 200, 50)
    fill(255, 255, 0)
    stroke(0)
    rect(550, 50, 20, 50)
    rect(590, 50, 20, 50)
    rect(630, 50, 20, 50)
    rect(670, 50, 20, 50)
    rect(710, 50, 20, 50)
    fill(150)
    strokeWeight(1)
    ellipse(100, 500, 160, 160)
    strokeWeight(5)
    line(100, 420, 100, 580)
    line(20, 500, 180, 500)
    strokeWeight(7)
    stroke(255, 0, 0)
    point(80, 460)
    point(165, 525)
    point(50, 540)
    strokeWeight(1)
    stroke(0)
    fill(255, 0, 0)
    text("Health", 35, 130)
    text("Radar", 35, 400)
    text("Enemy", 600, 260)
    fill(255, 255, 0)
    text("Galacti-Tron", 600, 500)
    text("Arcade", 600, 525)
    textSize(10)
    text("TM", 680, 515)
    textSize(25)
    text("Ammo", 655, 130)
    fill(0, 255, 0)
    text("YOU", 70, 260)
    text("Medkit", 600, 335)
    fill(255)
    ship()

    fill(190, 0, 0)
    rect(700, 230, 40, 40)
    fill(120)
    rect(700 - 10, 230 + 13, 35, 12)
    fill(0, 255, 0)
    stroke(255)
    strokeWeight(5)
    rect(695, 300, 50, 50)
    stroke(0)
    strokeWeight(1)
}

//Ship Movement
function shipMove() {
    if (keyIsDown(65)) {
        if (slowed)
        {
            shipx -= 3;
        }
        else{
            shipx -= 5;
        }

    }

    if (keyIsDown(68)) {
        if (slowed)
        {
            shipx += 3;
        }
        else{
            shipx += 5;
        }
    }

    if (keyIsDown(87)) {
        if (slowed)
        {
            shipy -= 3;
        }
        else{
            shipy -= 5;
        }
        //playerBulletY += 5
    }

    if (keyIsDown(83)) {
        if (slowed)
        {
            shipy += 3;
        }
        else{
            shipy += 5;
        }
        //playerBulletY -= 5
    }
}

/*
-----------------------------------------
    CORE FUNCTIONS END

    PLAYER BUFFS START
-----------------------------------------
*/

//HealthBox Start
function healthPack() {
    //Healthbox visuals
    strokeWeight(5)
    stroke(255)
    fill(0, 255, 0)
    rectMode(CENTER)

    //Healthbox location logic
    rect(lifeboxX, lifeboxY, 50, 50)
    lifeboxX -= 2
    if (lifeboxX <= -25) {
        lifeboxX = random(1200, 2000)
        lifeboxY = random(50, 550)
    }

    //Healthbox utility logic
    if (playerBulletX >= lifeboxX - 25 && playerBulletX <= lifeboxX + 25 && playerBulletY >= lifeboxY - 25 && playerBulletY <= lifeboxY + 25 || (playerBulletX2 >= lifeboxX - 25 && playerBulletX2 <= lifeboxX + 25 && playerBulletYTop >= lifeboxY - 25 && playerBulletYTop <= lifeboxY + 25) || (playerBulletX3 >= lifeboxX - 25 && playerBulletX3 <= lifeboxX + 25 && playerBulletYBottom >= lifeboxY - 25 && playerBulletYBottom <= lifeboxY + 25)) {
        if (health == 5) {
            score = score + 1000
        }
        health = health + 1
        lifeboxX = random(1200, 2000)
        lifeboxY = random(50, 550)

    }
    
}//HealthBox End

//Invulnerability Start
function invuln() {
    //invuln visuals
    strokeWeight(5)
    stroke(128)
    fill('rgba(0, 0, 255, 1)')
    rectMode(CENTER)
    //invuln location logic
    rect(iddqdX, iddqdY, 50, 50)
    iddqdX -= 2
    
    if (iddqdX <= -25) {
        iddqdX = random(1200, 2000)
        iddqdY = random(50, 550)
    }

    //invuln utility logic
    if (playerBulletX >= iddqdX - 25 && playerBulletX <= iddqdX + 25 && playerBulletY >= iddqdY - 25 && playerBulletY <= iddqdY + 25 || (playerBulletX2 >= iddqdX - 25 && playerBulletX2 <= iddqdX + 25 && playerBulletYTop >= iddqdY - 25 && playerBulletYTop <= iddqdY + 25) || (playerBulletX3 >= iddqdX - 25 && playerBulletX3 <= iddqdX + 25 && playerBulletYBottom >= iddqdY - 25 && playerBulletYBottom <= iddqdY + 25)) {
        iddqdT = iddqdT + 900;
        iddqdT = constrain(iddqdT, 0, 900);
        iddqdX = random(1200, 2000);
        iddqdY = random(50, 550);

    }
    
    //invuln activity logic
    if(iddqdT > 0){
        strokeWeight(1)
        stroke(0, 0, 255)
        fill('rgba(0, 0, 255, 0.25)')
        circle(shipx, shipy, 100)
        iddqd = true; //While timer of invuln has juice, give player invuln, decrease timer by 60 per second.
        iddqdT--;

        strokeWeight(5)
        stroke(128)
        fill('rgba(0, 0, 255, 1)')
        rectMode(CORNER)
        rect(10, 550, iddqdT/10, 25)
    }else{
        iddqd = false;
    }
}//Invulnerability End

//Quickshot start
function quickshot(){
    //quickshot visuals
    strokeWeight(5)
    stroke(128)
    fill(255, 155, 0)
    rectMode(CENTER)
    //quickshot location logic
    rect(quickX, quickY, 50, 50)
    quickX -= 2
    
    if (quickX <= -25) {
        quickX = random(1200, 2000)
        quickY = random(50, 550)
    }

    //quickshot utility logic
    if (playerBulletX >= quickX - 25 && playerBulletX <= quickX + 25 && playerBulletY >= quickY - 25 && playerBulletY <= quickY + 25 || (playerBulletX2 >= quickX - 25 && playerBulletX2 <= quickX + 25 && playerBulletYTop >= quickY - 25 && playerBulletYTop <= quickY + 25) || (playerBulletX3 >= quickX - 25 && playerBulletX3 <= quickX + 25 && playerBulletYBottom >= quickY - 25 && playerBulletYBottom <= quickY + 25)) {
        quickT = quickT + 900;
        quickT = constrain(quickT, 0, 900);
        quickX = random(1200, 2000);
        quickY = random(50, 550);

    }
    
    //quickshot activity logic
    if(quickT > 0){
        hullR = 255;
        hullG = 155;
        hullB = 0;
        quick = true; //While timer of quickshot has juice, give player quickshot, decrease timer by 60 per second.
        quickT--;

        playerBulletX += 40
        if(mult){
            playerBulletX2 +=40
            playerBulletX3 +=40
        }

        rectMode(CORNER)
        rect(10, 515, quickT/10, 25)
    }else{
        hullR = 120;
        hullG = 120;
        hullB = 120;
        //playerBulletXSpeed = 0;
        quick = false;

        playerBulletX += 20
        if(mult){
            playerBulletX2 += 20
            playerBulletX3 += 20
        }
    }
}//Quickshot end

//multishot start
function multishot(){
    //multishot visuals
    strokeWeight(5)
    stroke(128)
    fill(255, 120, 120)
    rectMode(CENTER)

    //multishot location logic
   rect(multX, multY, 50, 50)
   multX -= 2
   if (multX <= -25) {
       multX = random(1200, 2000)
       multY = random(50, 550)
   }

   //multishot utility logic
   if (playerBulletX >= multX - 25 && playerBulletX <= multX + 25 && playerBulletY >= multY - 25 && playerBulletY <= multY + 25 || (playerBulletX2 >= multX - 25 && playerBulletX2 <= multX + 25 && playerBulletYTop >= multY - 25 && playerBulletYTop <= multY + 25) || (playerBulletX3 >= multX - 25 && playerBulletX3 <= multX + 25 && playerBulletYBottom >= multY - 25 && playerBulletYBottom <= multY + 25)) {
    multT = multT + 900;
    multT = constrain(multT, 0, 900);
    multX = random(1200, 2000);
    multY = random(50, 550);
   }
    //multishot activity logic
    if(multT > 0){
        hullR = 255;
        hullG = 120;
        hullB = 120;
        mult = true; //While timer of multishot has juice, give player multishot, decrease timer by 60 per second.
        multT--;
        console.log(multT);

        playerBulletX +=20
        playerBulletX2 +=20
        playerBulletX3 +=20

        rectMode(CORNER)
        rect(10, 480, multT/10, 25)
    }else{
        hullR = 120;
        hullG = 120;
        hullB = 120;
        //playerBulletXSpeed = 0;
        mult = false;

        playerBulletX2 = 800
        playerBulletX3 = 800
    }
}//multishot end

function difficulty() {

    if(score < 5000){                                   //VLRT (Very Low-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(0,255,0);
        text("VLRT", 615, 60);
        
        threat0.resize(100,100);
        image(threat0, 680, 15);
        
        strokeWeight(2);

        enemyXSpeed1 = 2;
        enemyLvl1();
    }else if(score >= 5000 && score < 11000){           //LRT (Low-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(0,175,0);
        text("LRT", 615, 60);
        
        threat1.resize(100,100);
        image(threat1, 680, 15);
        
        strokeWeight(2);

        enemyXSpeed1 = 5;
        enemyLvl1();
    }else if(score >= 11000 && score < 18000){          //MRT (Moderate-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(175,175,0);
        text("MRT", 615, 60);
        
        threat2.resize(100,100);
        image(threat2, 680, 15);
        
        strokeWeight(2);

        enemyXSpeed1 = 5;
        enemyXSpeed2 = 2;
        enemyLvl1();
        enemyLvl2();
        enemyLvlSubBoss();
    }else if(score >= 18000 && score < 26000){          //HRT (High-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(175,0,0);
        text("HRT", 615, 60);

        threat3.resize(100,100);
        image(threat3, 680, 15);

        strokeWeight(2);

        enemyXSpeed1 = 5;
        enemyXSpeed2 = 5;
        enemyLvl1();
        enemyLvl2();
        enemyLvlSubBoss();
    }else if(score >= 26000 && score < 35000){          //VHRT (Very High-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(255,0,0);
        text("VHRT", 615, 60);
        
        threat4.resize(100,100);
        image(threat4, 680, 15);

        strokeWeight(2);

        enemyXSpeed1 = 5;
        enemyXSpeed2 = 5;
        enemyXSpeed3 = 2;
        enemyLvl1();
        enemyLvl2();
        enemyLvl3();
        enemyLvlSubBoss();
    }else if(score >= 35000){                           //ERT (Extreme-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(255,128,0);
        text("ERT", 615, 60);
        
        threat5.resize(100,100);
        image(threat5, 680, 15);
        
        strokeWeight(2);

        enemyXSpeed1 = 5;
        enemyXSpeed2 = 5;
        enemyXSpeed3 = 5;

        enemyLvl1();
        enemyLvl2();
        enemyLvl3();
        enemyLvlSubBoss();
        enemyLvlBoss();
    }
}

//Chaos in a can. Used to create the arcade screen and the ending text.
function draw() {
    titleScreen();
    loadAssetBuffer = constrain(loadAssetBuffer, 1, 300);
    loadAssetBuffer--;
    console.log(keyCode);
    if (loadAssetBuffer > 0){
        keyCode = 0;
    }else if (loadAssetBuffer <= 0){
        if (keyCode == 81) {
            begin = true
        }
        if (begin) {

            background(0, 0, 50)
            keyPressed();
            mousePressed();

            //Plays death animation (requires beefy computer)
            if (health == 0) {
                image(lost, 0, 75)
                lost.size(800, 600);
                lost.play()
                timing += 0.017
                lifeboxX = -1000
                lifeboxX -= 0
                
                enemyX1 = 1000
                enemyXSpeed1 = 0

                enemyX2 = 1000
                enemyXSpeed2 = 0

                enemyX3 = 1000
                enemyXSpeed3 = 0

                enemyBulletX1 = 1000
                enemyBulletXSpeed1 = 0
                
                enemyBulletX2 = 1000
                enemyBulletXSpeed2 = 0

                enemyBulletX3 = 1000
                enemyBulletXSpeed3 = 0


                if(dataBaseLockVar == false){
                    addStat(db, username, score);
                    console.log(getStats(db));
                    dataBaseLockVar = true;
                }else{
                    
                }
                if (timing >= 7.9) {
                    text("Thanks for playing Galacti-tron Space Federation!", 20, 50)
                    noLoop()
                }else{

                }
            }

            //if statement will move bullet out of bounds so that it does not interact with anything offscreen
            if(playerBulletX > 800){
                playerBulletY = -10;
                playerBulletYTop = -10;
                playerBulletYBottom = -10;
            }

            stars()
            ship()
            textEffect()
            shipMove()


            //Boolet
            rect(playerBulletX, playerBulletY - 8, 30, 15)
            rect(playerBulletX2, playerBulletYTop - 8, 30, 15)
            rect(playerBulletX3, playerBulletYBottom - 8, 30, 15)
            shipx = constrain(shipx, 10, 790)
            shipy = constrain(shipy, 10, 590)
            health = constrain(health, 0, 5)
            hitReg1 = constrain(hitReg1, 0, 1)
            hitReg2 = constrain(hitReg2, 0, 1)
            hitReg3 = constrain(hitReg3, 0, 1)

            difficulty();

            healthPack();
            invuln();
            quickshot();
            multishot();

            strokeWeight(1)
            stroke(0)
            rectMode(CORNER)
            fill(255, 0, 0)
            textSize(20)
            if (health == 1) {
                text("Critical Hull Warning!!!", 25, 100)
            }
            fill(255)
        }
        reticle()
    }else{
        begin = false;
    }

}

Promise.all([song]).then(() => {
    assetsLoaded = true;
    });

window.setup = setup;
window.draw = draw;

        /*
        
    [X]    background(dark_blue)
    [X]    backgroundeffect(stars.white-transparent.ellipse.circle.no-outline.small)
    [X]    texteffect(
        variant 1: if(var.health = 5){rect.rectangle.red-5x.sidebyside = 5}
        variant 2: if(var.health = 4){rect.rectangle.red-4x.sidebyside = 4}
        variant 3: if(var.health = 3){rect.rectangle.red-3x.sidebyside = 3}
        variant 4: if(var.health = 2){rect.rectangle.red-2x.sidebyside = 2}
        variant 5: if(var.health = 1){rect.rectangle.red-1x.sidebyside = 1}
        final variant: if(var.health = 0){(rect.rectangle.red-0x.sidebyside = 0) + text("Game Over, your score was " + score,centerscreen,centerscreen)})
        
        
    [X]    PlayerShape = triangle.triangle-faceright-grey
    [X]    PlayerBlaster = rect.rectangle-green.2x.symetrical
    [X]    PlayerBlaster.bullet = rect.rectangle-brightgreen.moveright=always
    [X]    PlayerBlaster.bullet-logic = in mousePressed - if(bullet > canvas.right){fire}
    [X]    PlayerHealth = if(enemyBullet = hit PlayerShip){life - 1}
    [X]    PlayerMove = w.up, s.down, a.left, d.right, (combo(w(a-d)) || combo(s(a-d)) = diagonal)
        
        
    [X]    EnemyShape = rect.Square-red
    [X]    EnemyBlaster = rect.rectangle-grey.1x.center
    [X]    EnemyBlaster.bullet = rect.rectangle-brightred.moveleft=always
    [X]    EnemyBlaster.bullet-logic = bullet.create in enemy gun, always moving left. if(bullet < canvas.left || hit player.Ship){enemyfire}. Bullet always respawns at the cannon of enemy ship.
    [X]    EnemyShip.logic = if(player.bullet = hit EnemyShip || EnemyShip < canvas.left){cannon+body = respawn && score + 1}


    ////////////////////////////////////
        CAPSTONE COURSE WORK CHANGELOG
    ////////////////////////////////////
    [X]     Move all possible code to its own functions, and call the functions back in main. This is to make the code neater in the draw() function.
    [X]     Create a difficulty feature by:
             +Keep track of current difficulty level (Threat Level) with the score number. Set increments.
             +Increase amount of enemies (max 3) and their speed on-screen.
                -Follow this metric: Enemy 1, Enemy 1 speed up, Enemy 1 + 2, Enemy 2 speed up, Enemy 1 + 2 + 3, Enemy 3 speed up
                -Score increments for this: 0, 5000, 11000, 18000, 26000, 35000
    [ ]     Create a variety of upgrades:
        [X]     Invulnerability (Player will not take damage when interacting with enemy laser fire)
        [X]     Multi-Shot      (Player will fire multiple lasers rather than one) 
        -- need to add 2 more y and x bullet axis (bullet top and bottom). top +20 on y, bottom -20 ony 
        [X]     Quick-Shot      (Player laser speed will be increased)
        [ ]     ChronoSphere    (Slows down time, decreases enemy movement speed, decreases enemy laser movement speed, decreases background stars movement speed)
        */