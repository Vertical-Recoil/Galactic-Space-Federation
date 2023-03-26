var shipx;              //ship position X
var shipy;              //ship position Y
var x;                  //Stars alignment X
var y;                  //Stars alignment Y
var health;             //Player Health Counter
var score;              //Player Score Counter
var playerBulletX;      //Player Laser Postion X
var playerBulletY;      //Player Laser Postion Y
var lifeboxX;           //Life Pool top left X
var lifeboxY;           //Life Pool top left Y
var song;               //Variable that stores the soundtrack
var songtracker;        //Boolean that only allows the song to play once (no overlap)
var pewpewSound;        //Variable that stores the blaster sound effect
var begin;              //Boolean that determines the launch of the actual game post title screen
var ty;                 //String that holds the title screen location mesh
var keydown;            //Variable that determines whether a key is pressed
var lost;               //Lose condition video storage variable
var timing;             //Stops the game after a couple seconds when the video stops playing

//NEW VARIABLES
var invinboxX;          //Invincibility box
var invinboxY;          //Invincibility box
var invincible;         //bool for invincibility
var invincibilityEndTime;   //timer
var duration;           //timer


<<<<<<< Updated upstream
=======
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

//
var emp;                //Variable that determines whether of not the user has emp
var empX;               //Variable that determines the X location of the emp power-up
var empY;               //Variable that determines the Y location of the emp power-up
var empT;               //Variable that determines how long emp has left

//Power-Up Variables END
>>>>>>> Stashed changes
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
var e1hullR;
var e1hullG;
var e1hullB;

//LVL 2
var enemyX2;
var enemyY2;
var enemyBulletX2;
var enemyBulletY2;
var enemyXSpeed2;
var enemyBulletXSpeed2;
var hitReg2;
var e2hullR;
var e2hullG;
var e2hullB;

//LVL 3
var enemyX3;
var enemyY3;
var enemyBulletX3;
var enemyBulletY3;
var enemyXSpeed3;
var enemyBulletXSpeed3;
var hitReg3;
var e3hullR;
var e3hullG;
var e3hullB;


/*
    ALL ENEMY VARIABLES END
*/

function preload() {
    soundFormats('ogg', 'mp3');
    song = loadSound("GameMusic.mp3");
    pewpewSound = loadSound("LaserBlaster.mp3");
<<<<<<< Updated upstream
    pewpewSound.setVolume(0.3);
=======
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
>>>>>>> Stashed changes
}


/*
    ALL ENEMY LOGIC START
*/

function enemyLvl1() {
<<<<<<< Updated upstream
    fill(190, 0, 0)
=======
    fill(e1hullR, e1hullG, e1hullB)
>>>>>>> Stashed changes
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
        if (hitReg1 == true) {
            //only affect health if not invincible
            if (!invincible) {
                health--
                hitReg1 = 0
            }
        }

    }

    if (enemyBulletX1 == enemyX1) {
        hitReg1 = 1
    }

    if (enemyX1 <= -30) {
        enemyX1 = random(800, 900)
        enemyY1 = random(50, 550)
        score = score - 100
    }
    if (playerBulletX >= enemyX1 && playerBulletX <= enemyX1 + 40 && playerBulletY >= enemyY1 && playerBulletY <= enemyY1 + 40) {
        enemyX1 = random(800, 900)
        enemyY1 = random(50, 550)
        score = score + int(random(59, 217))
    }
}

function enemyLvl2() {
<<<<<<< Updated upstream
    fill(0, 190, 0)
=======
    fill(e2hullR, e2hullG, e2hullB)
>>>>>>> Stashed changes
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
        if (hitReg2 == true) {
            //only affect health if not invincible
            if (!invincible) {
                health--
                hitReg2 = 0
            }
        }

    }

    if (enemyBulletX2 == enemyX2) {
        hitReg2 = 1
    }

    if (enemyX2 <= -30) {
        enemyX2 = random(800, 900)
        enemyY2 = random(50, 550)
        score = score - 100
    }
    if (playerBulletX >= enemyX2 && playerBulletX <= enemyX2 + 40 && playerBulletY >= enemyY2 && playerBulletY <= enemyY2 + 40) {
        enemyX2 = random(800, 900)
        enemyY2 = random(50, 550)
        score = score + int(random(59, 217))
    }
}

function enemyLvl3() {
<<<<<<< Updated upstream
    fill(0, 0, 190)
=======
    fill(e3hullR, e3hullG, e3hullB)
>>>>>>> Stashed changes
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
        if (hitReg3 == true) {
            //only affect health if not invincible
            if (!invincible) {
                health--
                hitReg3 = 0
            }
        }

    }

    if (enemyBulletX3 == enemyX3) {
        hitReg3 = 1
    }

    if (enemyX3 <= -30) {
        enemyX3 = random(800, 900)
        enemyY3 = random(50, 550)
        score = score - 100
    }
    if (playerBulletX >= enemyX3 && playerBulletX <= enemyX3 + 40 && playerBulletY >= enemyY3 && playerBulletY <= enemyY3 + 40) {
        enemyX3 = random(800, 900)
        enemyY3 = random(50, 550)
        score = score + int(random(59, 217))
    }

}

/*
    ALL ENEMY LOGIC END
*/

function setup() {
<<<<<<< Updated upstream
    createCanvas(800, 600);

    //Video Setup
    lost = createVideo(['LoseVid.mp4']);
    lost.size(800, 600);
    lost.hide()
    song.setVolume(1)
    lost.volume(1)


    //Variables
    shipx = 100
    shipy = 300
    x = 400
    y = 300
    health = 5
    hitReg1 = true
    hitReg2 = true
    hitReg3 = true
    score = 0
    playerBulletY = shipy
    playerBulletX = 800
    lifeboxX = 1500
    lifeboxY = random(50, 550)

    invinboxX = 3000                    //set up for invincibility box
    invinboxY = random(50, 550)

    ty = 600
    timing = 0
    songtracker = 0

    enemyX1 = random(850, 900)
    enemyY1 = random(50, 550)
    enemyBulletX1 = enemyX1
    enemyBulletY1 = enemyY1
    enemyXSpeed1 = 5
    enemyBulletXSpeed1 = 10

    enemyX2 = random(1000, 1200)
    enemyY2 = random(50, 550)
    enemyBulletX2 = enemyX2
    enemyBulletY2 = enemyY2
    enemyXSpeed2 = 5
    enemyBulletXSpeed2 = 10

    enemyX3 = random(1300, 1500)
    enemyY3 = random(50, 550)
    enemyBulletX3 = enemyX3
    enemyBulletY3 = enemyY3
    enemyXSpeed3 = 5
    enemyBulletXSpeed3 = 10

    background(0, 0, 50)
    stars()

=======
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
        playerBulletYTop = shipy + 20
        playerBulletYBottom = shipy - 20
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
        e1hullR = 190
        e1hullG = 0
        e1hullB = 0

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
        quick = false;
        quickX = random(1500, 2000)
        quickY = random(50, 550)
        quickT = 0

        //Multi-shot
        mult = false;
        multX = random(1500, 2000)
        multY = random(50, 550)
        multT = 0

        //EMP
        emp = false;
        empX = random(1500, 2000)
        empY = random(50, 550)
        empT = 0

        background(0, 0, 50)
        stars()
    } else {
        // Assets are still loading
    }

}
>>>>>>> Stashed changes

}

//Shoots laser when mouse is pressed
function mousePressed() {

<<<<<<< Updated upstream
    if (mousePressed) {
        if (playerBulletX >= 800) {
            fill(0, 255, 0)
            playerBulletX = shipx
            playerBulletY = shipy
            pewpewSound.play()
        }
        console.log("YES")
        fill(255)
    }

=======
    document.addEventListener('mousedown', (event) => {
        if (event.button === 0) {
            //playerBulletX -= playerBulletXSpeed
            if (playerBulletX >= 800) {
                fill(0, 255, 0)
                playerBulletX = shipx
                playerBulletY = shipy
                if (mult === true) {
                    playerBulletX2 = shipx
                    playerBulletX3 = shipx
                    playerBulletYTop = shipy + 20
                    playerBulletYBottom = shipy - 20
                }
                pewpewSound.play()
            }
        }
    });
>>>>>>> Stashed changes
}


//Your Millenium Falcon :D (Visuals)
function ship() {

    fill(120)
    triangle(shipx - 25, shipy + 25, shipx - 25, shipy - 25, shipx + 30, shipy)

    fill(0, 80, 0)
    rect(shipx - 30, shipy - 19, 40, 10)
    rect(shipx - 30, shipy + 8, 40, 10)

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
        else if (score <= 10000) {
            text("Better luck next time, rookie!", 215, 575)
        }
        else if (score <= 15000) {
            text("At least you can aim, marine!", 215, 575)
        }
        else if (score <= 20000) {
            text("Very good work, comrade", 240, 575)
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
<<<<<<< Updated upstream
    if (keyCode == 77 && songtracker == 0) {
        song.loop()
        songtracker = 1
    }
    else {
        //console.log("It's not m fam")
=======
    if (loadAssetBuffer <= 0) {
        if (keyCode == 77 && songtracker == 0) {
            song.loop()
            songtracker = 1
        }
        else {

        }
    } else {

>>>>>>> Stashed changes
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
    text("M = Music (PRESS ONCE)", 220, ty + 500)
    text("Insert Coin (Q) to start!", 240, ty + 550)
    text("1 Credit: $1.25", 280, ty + 700)

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
        shipx -= 5;

    }

    if (keyIsDown(68)) {
        shipx += 5;

    }

    if (keyIsDown(87)) {
        shipy -= 5;
        //playerBulletY += 5
    }

    if (keyIsDown(83)) {
        shipy += 5;
        //playerBulletY -= 5
    }
}

<<<<<<< Updated upstream
//sets invincibility duration
function setInvincibility(duration) {
    invincible = true;
    invincibilityEndTime = millis() + duration;
=======
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
    if (iddqdT > 0) {
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
        rect(10, 550, iddqdT / 10, 25)
    } else {
        iddqd = false;
    }
}//Invulnerability End

//Quickshot start
function quickshot() {
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
    if (quickT > 0) {
        hullR = 255;
        hullG = 155;
        hullB = 0;
        quick = true; //While timer of quickshot has juice, give player quickshot, decrease timer by 60 per second.
        quickT--;

        playerBulletX += 40
        if (mult) {
            playerBulletX2 += 40
            playerBulletX3 += 40
        }

        rectMode(CORNER)
        rect(10, 515, quickT / 10, 25)
    } else {
        hullR = 120;
        hullG = 120;
        hullB = 120;
        //playerBulletXSpeed = 0;
        quick = false;

        playerBulletX += 20
        if (mult) {
            playerBulletX2 += 20
            playerBulletX3 += 20
        }
    }
}//Quickshot end

//multishot start
function multishot() {
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
    if (multT > 0) {
        hullR = 255;
        hullG = 120;
        hullB = 120;
        mult = true; //While timer of multishot has juice, give player multishot, decrease timer by 60 per second.
        multT--;
        console.log(multT);

        playerBulletX += 20
        playerBulletX2 += 20
        playerBulletX3 += 20

        rectMode(CORNER)
        rect(10, 480, multT / 10, 25)
    } else {
        hullR = 120;
        hullG = 120;
        hullB = 120;
        //playerBulletXSpeed = 0;
        mult = false;

        playerBulletX2 = 800
        playerBulletX3 = 800
    }
}//multishot end


//EMP Start
function empbomb() {
    //EMP visuals
    strokeWeight(5)
    stroke(128)
    fill(255, 255, 0)
    rectMode(CENTER)

    //EMP location logic
    rect(empX, empY, 50, 50)
    empX -= 2
    if (empX <= -25) {
        empX = random(1200, 2000)
        empY = random(50, 550)
    }

    //EMP interaction
    if (empT <= 0 && playerBulletX >= empX - 25 && playerBulletX <= empX + 25 && playerBulletY >= empY - 25 && playerBulletY <= empY + 25) {
        empT = 500;
        empT = constrain(empT, 0, 900);
        empX = random(1200, 2000);
        empY = random(50, 550);
    }

    //EMP activity logic
    if (empT > 0) {
        emp = true;
        enemyBulletX1 = (0, 0)
        enemyBulletX2 = (0, 0)
        enemyBulletX3 = (0, 0)

        e1hullR = 255
        e1hullG = 255
        e1hullB = 0

        e2hullR = 255
        e2hullG = 255
        e2hullB = 0

        e3hullR = 255
        e3hullG = 255
        e3hullB = 0

        enemyBulletXSpeed1 = 0;
        enemyBulletXSpeed2 = 0;
        enemyBulletXSpeed3 = 0;
        
        empT--;
        rectMode(CORNER)
        rect(10, 445, empT / 10, 25)
    } else {
        emp = false;
        e1hullR = 190
        e1hullG = 0
        e1hullB = 0

        e2hullR = 0
        e2hullG = 190
        e2hullB = 0

        e3hullR = 0
        e3hullG = 0
        e3hullB = 190

        enemyBulletXSpeed1 = 8;
        enemyBulletXSpeed2 = 8;
        enemyBulletXSpeed3 = 8;
    }
}//EMP End


function difficulty() {

    if (score < 5000) {                                   //VLRT (Very Low-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(0, 255, 0);
        text("VLRT", 615, 60);

        threat0.resize(100, 100);
        image(threat0, 680, 15);

        strokeWeight(2);

        enemyXSpeed1 = 2;
        enemyLvl1();
    } else if (score >= 5000 && score < 11000) {           //LRT (Low-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(0, 175, 0);
        text("LRT", 615, 60);

        threat1.resize(100, 100);
        image(threat1, 680, 15);

        strokeWeight(2);

        enemyXSpeed1 = 5;
        enemyLvl1();
    } else if (score >= 11000 && score < 18000) {          //MRT (Moderate-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(175, 175, 0);
        text("MRT", 615, 60);

        threat2.resize(100, 100);
        image(threat2, 680, 15);

        strokeWeight(2);

        enemyXSpeed1 = 5;
        enemyXSpeed2 = 2;
        enemyLvl1();
        enemyLvl2();
    } else if (score >= 18000 && score < 26000) {          //HRT (High-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(175, 0, 0);
        text("HRT", 615, 60);

        threat3.resize(100, 100);
        image(threat3, 680, 15);

        strokeWeight(2);

        enemyXSpeed1 = 5;
        enemyXSpeed2 = 5;
        enemyLvl1();
        enemyLvl2();
    } else if (score >= 26000 && score < 35000) {          //VHRT (Very High-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(255, 0, 0);
        text("VHRT", 615, 60);

        threat4.resize(100, 100);
        image(threat4, 680, 15);

        strokeWeight(2);

        enemyXSpeed1 = 5;
        enemyXSpeed2 = 5;
        enemyXSpeed3 = 2;
        enemyLvl1();
        enemyLvl2();
        enemyLvl3();
    } else if (score >= 35000) {                           //ERT (Extreme-Risk Targets)
        strokeWeight(0);
        stroke(0);
        fill(255, 128, 0);
        text("ERT", 615, 60);

        threat5.resize(100, 100);
        image(threat5, 680, 15);

        strokeWeight(2);

        enemyXSpeed1 = 5;
        enemyXSpeed2 = 5;
        enemyXSpeed3 = 5;
        enemyLvl1();
        enemyLvl2();
        enemyLvl3();
    }
>>>>>>> Stashed changes
}


//Chaos in a can. Used to create the arcade screen and the ending text.
function draw() {
<<<<<<< Updated upstream
    titleScreen()

    if (keyCode == 81) {
        begin = true
=======
    titleScreen();
    loadAssetBuffer = constrain(loadAssetBuffer, 1, 300);
    loadAssetBuffer--;
    console.log(keyCode);
    if (loadAssetBuffer > 0) {
        keyCode = 0;
    } else if (loadAssetBuffer <= 0) {
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


                if (dataBaseLockVar == false) {
                    addStat(db, username, score);
                    console.log(getStats(db));
                    dataBaseLockVar = true;
                } else {

                }
                if (timing >= 7.9) {
                    text("Thanks for playing Galacti-tron Space Federation!", 20, 50)
                    noLoop()
                } else {

                }
            }

            //if statement will move bullet out of bounds so that it does not interact with anything offscreen
            if (playerBulletX > 800) {
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
            empbomb();

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
    } else {
        begin = false;
>>>>>>> Stashed changes
    }
    if (begin) {

        background(0, 0, 50)

        //Plays death animation (requires beefy computer)
        if (health == 0) {
            image(lost, 0, 75)
            lost.play()
            timing += 0.017
            lifeboxX = 1000
            lifeboxX -= 0

            invinboxX = 1000
            invinboxX -= 0

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

            if (timing >= 7.9) {
                text("Thanks for playing Galacti-tron Space Federation!", 20, 50)
                noLoop()
            }
        }

        // packets()

        playerBulletX += 20
        stars()
        ship()
        textEffect()
        shipMove()


        //Boolet
        rect(playerBulletX, playerBulletY - 8, 30, 15)
        shipx = constrain(shipx, 10, 790)
        shipy = constrain(shipy, 10, 590)
        health = constrain(health, 0, 5)
        hitReg1 = constrain(hitReg1, 0, 1)
        hitReg2 = constrain(hitReg2, 0, 1)
        hitReg3 = constrain(hitReg3, 0, 1)

        enemyLvl1();
        enemyLvl2();
        enemyLvl3();

        //Health box
        strokeWeight(5)
        stroke(255)
        fill(0, 255, 0)
        rectMode(CENTER)
        rect(lifeboxX, lifeboxY, 50, 50)
        lifeboxX -= 2
        if (lifeboxX <= -25) {
            lifeboxX = random(1200, 2000)
            lifeboxY = random(50, 550)
        }
        if (playerBulletX >= lifeboxX - 25 && playerBulletX <= lifeboxX + 25 && playerBulletY >= lifeboxY - 25 && playerBulletY <= lifeboxY + 25) {
            if (health == 5) {
                score = score + 1000
            }
            health = health + 1
            lifeboxX = random(1200, 2000)
            lifeboxY = random(50, 550)

        }
        // //Health box end

        //invincibilty box

        strokeWeight(5);
        stroke(255);
        fill(192, 192, 192);
        beginShape();
        vertex(invinboxX, invinboxY - 25);
        vertex(invinboxX + 25, invinboxY);
        vertex(invinboxX, invinboxY + 25);
        vertex(invinboxX - 25, invinboxY);
        endShape(CLOSE);

        noStroke();
        // Draw smaller blue diamond inside
        fill(0, 160, 255);
        beginShape();
        vertex(invinboxX, invinboxY - 10);
        vertex(invinboxX + 10, invinboxY);
        vertex(invinboxX, invinboxY + 10);
        vertex(invinboxX - 10, invinboxY);
        endShape(CLOSE);

        invinboxX -= 2
        if (invinboxX <= -25) {
            invinboxX = random(3000, 4000)
            invinboxY = random(50, 550)
        }
        if (playerBulletX >= invinboxX - 25 && playerBulletX <= invinboxX + 25 && playerBulletY >= invinboxY - 25 && playerBulletY <= invinboxY + 25) {
            setInvincibility(4000); // set invincibility for 5 seconds (5000 milliseconds)
            invinboxX = random(4000, 5000)
            invinboxY = random(50, 550)
        }

        if (invincible && millis() > invincibilityEndTime) {
            invincible = false;
        }

        strokeWeight(1)
        stroke(0)
        rectMode(CORNER)
        fill(0, 255, 255)
        textSize(20)

        if (invincible) {
            // Display "Invincible" text with remaining time
            let remainingTime = invincibilityEndTime - millis();
            text(`Invincible (${Math.ceil(remainingTime / 100)}ds)`, 25, 100);
        }
        fill(255)
        //invulerable box end

        //multishot
        // strokeWeight(5);
        // stroke(255);
        // fill(255, 255, 0);
        // ellipseMode(CENTER);
        // ellipse(invinboxX, invinboxY, 50, 50);


        strokeWeight(1)
        stroke(0)
        rectMode(CORNER)
        //console.log(hitReg1)
        fill(255, 0, 0)
        textSize(20)
        if (health == 1) {
            text("Critical Hull Warning!!!", 75, 50)
        }
        fill(255)
    }
    reticle()

    console.log(timing)

}

<<<<<<< Updated upstream







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
 
[X]    Add invurenablity
[ ]    Add multishot
 
*/



/*================================================================


The game will be expanded by introducing:

-Working Difficulty functions:
  These functions will scale the game up as it progresses.
  Players will notice an increase of enemy movement speed and count.
  Players will notice an increase of enemy health and laser speeds.
    -These can be implemented by tracking session lifetime, or player score and increasing
     the proper parameters as either of those tracked metrics increase

-Working Upgrade functions:
  These functions will balance the difficulty.
  Players can get temporary time based power ups that enchances their gameplay.
  These can be in the form of:
    -Invulnerability (Player will interact with the enemy bullet, but not take damage)
    -Multi-Shot      (Player will fire 2 or 3 rounds instead of 1)
    -Quick-Shot      (Player will fire a laser that is faster than normal)
    -ChronoSphere    (Slows down time, aka enemy movement speeds)
  The upgrades can have visuals applied to their ship to dictate that they have the aforementioned upgrade.
  The upgrades can have their names be displayed in big letters on the screen shortly to tell the player what they got.
  The upgrades can have a bar near the health that will decrease and dicatate how long they have the effect for.

-Working Ammo function (MAYBE):
  Players only have a pool of 5 ammo.
  Players will generate 1 ammo per 1.5 to 2 seconds.
  Players will not be able to fire their laser if they have no ammo left.
  A new "upgrade" called "Recharge" will recharge the ammo pool.
  A new "upgrade" called "Overcharge" will cause the player to use NO ammo when firing for a short time.
=======
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
>>>>>>> Stashed changes
*/