import { useEffect, useRef, useState} from 'react';
import "../Game/Game.css";
import lasagnaImageSrc from '../Game/img/lasana.avif';
import robotImageReverse from '../Game/img/robot-reverse.png'

export default function Game() 
{
    const canvasRef = useRef(null);  // Create a reference to the canvas element
    const robotImage = process.env.PUBLIC_URL + '/robot.png';

    var phLevel = 7
    var points = 0
    var marginTop = 0

    useEffect(() => 
    {
        var lastDirection = "right"

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");  
        
        const player = 
        {
            width: 50,
            height: 50,
            x: canvas.width / 2 - 25,
            y: canvas.height - 60,
            speed: 2.5,
            dx: 0
        };

        const lasagna = 
        {
            width: 30,
            height: 30,
            x: Math.random() * (canvas.width - 30),
            y: 0,
            speed: 1.3
        };

        const lasagnaImg = new Image();
        lasagnaImg.src = lasagnaImageSrc;

        const robotImg = new Image();
        robotImg.src = robotImage;

        const robotImgReverse = new Image();
        robotImgReverse.src = robotImageReverse;

        lasagnaImg.onload = () => 
        {
            console.log("Image loaded successfully");

            function drawLasagnaAndPlayer() 
            {
                ctx.drawImage(lasagnaImg, lasagna.x, lasagna.y, lasagna.width, lasagna.height);

                let imageWidth = 100;
                let imageHeight = 100;

                if (player.dx > 0 ) 
                {
                    ctx.drawImage(robotImg, player.x - (imageWidth - player.width) / 2, player.y - (imageHeight - player.height) / 2, imageWidth, imageHeight);
                    lastDirection = "right"
                } 
                else if (player.dx < 0) 
                {
                    ctx.drawImage(robotImgReverse, player.x - (imageWidth - player.width) / 2, player.y - (imageHeight - player.height) / 2, imageWidth, imageHeight);
                    lastDirection = "left"
                }
                else
                {
                    if (lastDirection === "right") 
                    {
                        ctx.drawImage(robotImg, player.x - (imageWidth - player.width) / 2, player.y - (imageHeight - player.height) / 2, imageWidth, imageHeight);
                    } 
                    else if (lastDirection === "left") 
                    {
                        ctx.drawImage(robotImgReverse, player.x - (imageWidth - player.width) / 2, player.y - (imageHeight - player.height) / 2, imageWidth, imageHeight);
                    }
                }
            }

            function movePlayer() 
            {
                player.x += player.dx;

                if (player.x < 0) player.x = 0;
                if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
            }

            function moveLasagna() 
            {
                lasagna.y += lasagna.speed;
                if (lasagna.y + lasagna.height > canvas.height)
                {
                    lasagna.y = 0;
                    lasagna.x = Math.random() * (canvas.width - lasagna.width);
                }
            }

            function detectCollision() 
            {
                if (
                    player.x < lasagna.x + lasagna.width &&
                    player.x + player.width > lasagna.x &&
                    player.y < lasagna.y + lasagna.height &&
                    player.y + player.height > lasagna.y
                ) 
                {
                    if (phLevel === 6.0)
                    {
                        alert('Has perdido')
                        window.location.reload()
                    }
                    lasagna.y = 0;
                    lasagna.x = Math.random() * (canvas.width - lasagna.width);
                    points = points + 1;
                    marginTop = marginTop + 3
                    phLevel = phLevel - 0.5
                    document.getElementById('points').innerText = `Points: ${points}`;
                    document.getElementById('line').style.marginTop = marginTop + 'rem'
                    
                    console.log("Lasaña atrapada!");
                }
            }

            function pointsDifficulty()
            {
                if (points > 12)
                {
                    lasagna.speed = 1.6;
                }
                if (points > 25)
                {
                    lasagna.speed = 2;
                }
                if (points > 45)
                {
                    lasagna.speed = 2.3;
                    player.speed = 3.3;
                }
                if (points > 80)
                {
                    lasagna.speed = 2.7;
                    player.speed = 4.0;
                }
                if (points > 120)
                {
                    lasagna.speed = 3.3;
                    player.speed = 5;
                }
            }

            function clear() 
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            function update() 
            {
                clear();
                drawLasagnaAndPlayer();
                movePlayer();
                moveLasagna();
                pointsDifficulty();
                detectCollision();
                requestAnimationFrame(update);
            }

            document.addEventListener("keydown", (e) => 
            {
                if (e.key === "ArrowRight" || e.key === "Right") 
                {
                    player.dx = player.speed;
                } 
                if (e.key === "ArrowLeft" || e.key === "Left") 
                {
                    player.dx = -player.speed;
                    console.log(phLevel)
                }
            });

            document.addEventListener("keyup", (e) => 
            {
                if (e.key === "ArrowRight" || e.key === "Right" || e.key === "ArrowLeft" || e.key === "Left")
                {
                    player.dx = 0;
                }
            });

            update();
        };

        lasagnaImg.onerror = () => 
        {
            console.error("Failed to load the image");
        };
        
    }, []);

    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <label id='points'>Points: {points}</label>
            </div>
            <div id='background' style={{display:"flex"}}>
                <canvas ref={canvasRef} id="gameCanvas" width="800" height="500"></canvas>
                <div id="ph">
                    <div id="line"/>
                </div>
            </div>
        </div>      
    );
}