var shipx;
var shipy;
var x;
var y;
var health;
var score;
var playerBulletX;
var playerBulletY;
var enemyBulletX;
var enemyBulletXSpeed;
var enemyBulletY;
var enemyX;
var enemyXSpeed;
var enemyY;
var healthPoint;
var lifeboxX;
var lifeboxY;
var song;
var songtracker;
var pewpewSound;
var begin;
var ty;
var keydown;
var lost;
var timing;

function preload() {
  soundFormats('ogg', 'mp3');
  song = loadSound("GameMusic.mp3");
  pewpewSound = loadSound("LaserBlaster.mp3");
}

function setup() {
            createCanvas(800, 600);
            
            //Video Setup
            lost = createVideo(['LoseVid.mp4']);
            lost.size(800, 600)
            lost.hide()
            song.setVolume(1)
            lost.volume(1)
            
            
            //Variables
            shipx = 100
            shipy = 300
            x = 400
            y = 300
            health = 5
            healthPoint = true
            score = 0
            playerBulletY = shipy
            playerBulletX = 800
            enemyX = random(850, 900)
            enemyY = random(50, 550)
            enemyBulletX = enemyX
            enemyBulletY = enemyY
            enemyXSpeed = -5
            enemyBulletXSpeed = -10
            lifeboxX = 1500
            lifeboxY = random(50, 550)
            ty = 600
            timing = 0
            songtracker = 0

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

        
        //Your Millenium Falcon :D
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
        
        //Chaos in a can. Used to create the arcade screen and the ending text.
        function draw() {

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
                    enemyX = 1000
                    enemyX -= 0
                    enemyBulletX = 1000
                    enemyBulletX -= 0
                    if (timing >= 7.9) {
                        text("Thanks for playing Galacti-tron Space Federation!", 20, 50)
                        noLoop()
                    }
                }



                playerBulletX += 20
                stars()
                ship()
                textEffect()

                //Ship Movement
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


                //Boolet
                rect(playerBulletX, playerBulletY - 8, 30, 15)
                shipx = constrain(shipx, 10, 790)
                shipy = constrain(shipy, 10, 590)
                health = constrain(health, 0, 5)
                healthPoint = constrain(healthPoint, 0, 1)


                fill(190, 0, 0)
                rect(enemyX, enemyY, 40, 40)

                fill(120)
                rect(enemyX - 10, enemyY + 13, 35, 12)
                enemyX += enemyXSpeed

                fill(255, 0, 0)
                rectMode(CENTER)
                rect(enemyBulletX - 20, enemyBulletY + 18, 30, 10)
                rectMode(CORNER)
                enemyBulletX += enemyBulletXSpeed
                if (enemyBulletX <= -30) {
                    enemyBulletX = enemyX
                    enemyBulletY = enemyY
                }

                if (enemyBulletX >= shipx - 10 && enemyBulletX <= shipx + 35 && enemyBulletY >= shipy - 35 && enemyBulletY <= shipy + 10) {
                    if (healthPoint == true) {
                        health--
                        healthPoint = 0
                    }

                }

                if (enemyBulletX == enemyX) {
                    healthPoint = 1
                }

                if (enemyX <= -30) {
                    enemyX = random(800, 900)
                    enemyY = random(50, 550)
                    score = score - 100
                }
                if (playerBulletX >= enemyX && playerBulletX <= enemyX + 40 && playerBulletY >= enemyY && playerBulletY <= enemyY + 40) {
                    enemyX = random(800, 900)
                    enemyY = random(50, 550)
                    score = score + int(random(59, 217))
                }

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
                strokeWeight(1)
                stroke(0)
                rectMode(CORNER)
                //console.log(healthPoint)
                fill(255, 0, 0)
                textSize(20)
                if (health == 1) {
                    text("Critical Hull Warning!!!", 25, 100)
                }
                fill(255)
            }
            fill(0, 255, 0)
            noCursor()
            strokeWeight(5)
            stroke(0, 255, 0)
            point(mouseX, mouseY)
            strokeWeight(1)
            stroke(0, 0, 0, 0)
            
            
            //Spaceship Aim Down Sight Reticle.
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
        
        
        
        */