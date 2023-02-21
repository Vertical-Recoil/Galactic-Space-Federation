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

/*
    ALL ENEMY VARIABLES END
*/

function preload() {
    soundFormats('ogg', 'mp3');
    song = loadSound("GameMusic.mp3");
    pewpewSound = loadSound("LaserBlaster.mp3");
    pewpewSound.setVolume(0.3);
}


/*
    ALL ENEMY LOGIC START
*/

function enemyLvl1() {
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


}

//Shoots laser when mouse is pressed
function mousePressed() {

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
    if (keyCode == 77 && songtracker == 0) {
        song.loop()
        songtracker = 1
    }
    else {
        //console.log("It's not m fam")
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

//sets invincibility duration
function setInvincibility(duration) {
    invincible = true;
    invincibilityEndTime = millis() + duration;
}

//Chaos in a can. Used to create the arcade screen and the ending text.
function draw() {
    titleScreen()

    if (keyCode == 81) {
        begin = true
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
*/