import { useEffect, useRef, useState } from 'react';
import "../Game/Game.css";
import robotImageReverse from '../Game/img/robot-reverse.png'
import soap from '../Game/img/soap.png'
import lemon from '../Game/img/lemon.png'
import jugDetergent from '../Game/img/jugDetergent.png'
import bottleDroplet from '../Game/img/bottleDroplet.png'
import { PauseButton } from '../../atoms/PauseButton';

export default function Game() 
{
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const robotImage = process.env.PUBLIC_URL + '/robot.png';

    const [points, setPoints] = useState(0);
    const [lasagnaCaught, setLasagnaCaught] = useState(false)
    const [phLevel, setPhLevel] = useState(7.0)

    const icons = [soap, lemon, jugDetergent, bottleDroplet]
    const [randomIcon, setRandomIcon] = useState(soap)

    const lasagnaImgRef = useRef(new Image()); 

    let marginTop = 0;
    let lastDirection = "right";
    
    let isPaused = useRef(false);
    let isHelpPaused = useRef(false);
    let prevSpeedPlayer = useRef();
    let prevSpeedLasagna = useRef();

    const player = useRef({
        width: 50,
        height: 50,
        x: 0, 
        y: 0, 
        speed: 2.5,
        dx: 0
    });

    const lasagna = useRef({
        width: 50,
        height: 50,
        x: 0,
        y: -30, 
        speed: 1
    });

    const robotImg = new Image();
    robotImg.src = robotImage;

    const robotImgReverse = new Image();
    robotImgReverse.src = robotImageReverse;
    
    useEffect(() => 
    {
        const canvas = canvasRef.current;
        ctxRef.current = canvas.getContext("2d");

        player.current.x = canvas.width / 2 - player.current.width / 2; 
        player.current.y = canvas.height - player.current.height - 60;

        const handleKeyDown = (e) => 
        {
            if (e.key === "ArrowRight" || e.key === "Right") 
            {
                player.current.dx = player.current.speed;
            }
            if (e.key === "ArrowLeft" || e.key === "Left") 
            {
                player.current.dx =- player.current.speed;
            }
        };

        const handleKeyUp = (e) => 
        {
            if (e.key === "ArrowRight" || e.key === "Right" || e.key === "ArrowLeft" || e.key === "Left") 
            {
                player.current.dx = 0;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        // Limpieza de eventos
        return () => 
        {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    function drawLasagnaAndPlayer() 
    {
        const ctx = ctxRef.current;
        if (!ctx) return;

        ctx.drawImage(lasagnaImgRef.current, lasagna.current.x, lasagna.current.y, lasagna.current.width, lasagna.current.height);

        let imageWidth = 100;
        let imageHeight = 100;

        if (player.current.dx > 0) 
        {
            ctx.drawImage(robotImg, player.current.x, player.current.y, imageWidth, imageHeight);
            lastDirection = "right";
        } 
        else if (player.current.dx < 0) 
        {
            ctx.drawImage(robotImgReverse, player.current.x, player.current.y, imageWidth, imageHeight);
            lastDirection = "left";
        } 
        else 
        {
            ctx.drawImage(lastDirection === "right" ? robotImg : robotImgReverse, player.current.x, player.current.y, imageWidth, imageHeight);
        }
    }

    function movePlayer() 
    {
        player.current.x += player.current.dx;

        if (player.current.x < 0) 
        {
            player.current.x = 0;
        }
        if (player.current.x + player.current?.width > canvasRef.current?.width)
        {
            player.current.x = canvasRef.current?.width - player.current?.width;
        }
    }

    function moveLasagna() 
    {
        lasagna.current.y += lasagna.current.speed;

        if (lasagna.current.y > canvasRef.current?.height) 
        {
            if (!lasagnaCaught) 
            {
                marginTop += 3;
                setPhLevel((ph) => ph - 0.5)

                const lineElement = document.getElementById('line');
                
                if (lineElement) 
                {
                    lineElement.style.marginTop = `${marginTop}rem`;
                }
                setRandomIcon(getRandomIcon())
            }

            setLasagnaCaught(false)
            lasagna.current.y = -30;
            lasagna.current.x = Math.random() * (canvasRef.current?.width - lasagna.current?.width);
        }
    }

    function detectCollision() 
    {
        if 
        (
            player.current.x <= lasagna.current.x + lasagna.current?.width &&
            player.current.x + player.current?.width >= lasagna.current.x &&
            player.current.y <= lasagna.current.y + lasagna.current?.height &&
            player.current.y + player.current?.height >= lasagna.current.y
        ) 
        {
            lasagna.current.y = -30;
            lasagna.current.x = Math.random() * (canvasRef.current?.width - lasagna.current?.width);
            setPoints((prev) => prev + 1);
            setLasagnaCaught(true)
            const newIcon = getRandomIcon();
            setRandomIcon(newIcon);

        }
    }

    function pointsDifficulty() 
    {
        if (isPaused.current) return;

        if (points > 12)
        {
            lasagna.current.speed = 1.6;
        }
        if (points > 25) 
        {
            lasagna.current.speed = 2;
        }
        if (points > 45) 
        {
            lasagna.current.speed = 2.3;
            player.current.speed = 3.3;
        }
        if (points > 80) 
        {
            lasagna.current.speed = 2.7;
            player.current.speed = 4.0;
        }
        if (points > 120) 
        {
            lasagna.current.speed = 3.3;
            player.current.speed = 5;
        }
    }

    function getRandomIcon()
    {
        return icons[Math.floor(Math.random() * icons.length)]
    }
    
    function clear() 
    {
        ctxRef.current?.clearRect(0, 0, canvasRef.current?.width, canvasRef.current?.height);
    }

    function update() 
    {
        if (isPaused.current) return;
        clear();
        drawLasagnaAndPlayer();
        detectCollision();
        movePlayer();
        moveLasagna();
        pointsDifficulty();
        requestAnimationFrame(update);
    }

    useEffect(() => 
    {
        lasagnaImgRef.current.onload = () =>
        {
            update();
        };
    }, []);

    useEffect(() => 
    {
        lasagnaImgRef.current.src = randomIcon;
    },[randomIcon])

    useEffect(() => 
    {
        if (phLevel < 6.0) 
        {
            alert('Has perdido. El pH ha bajado demasiado.');
            window.location.reload();
        }
    }, [phLevel]);

    const togglePause = () => {
         if (isHelpPaused.current) return;
    
        isPaused.current = !isPaused.current;
        if (isPaused.current) {
            prevSpeedPlayer.current = player.current.speed;
            prevSpeedLasagna.current = lasagna.current.speed;
            player.current.speed = 0;
            lasagna.current.speed = 0;
        } else {
            player.current.speed = prevSpeedPlayer.current;
            lasagna.current.speed = prevSpeedLasagna.current;
            update();
        }
    };    

    return (
        <div id='game'>
            <PauseButton onClick={togglePause} isPaused={isPaused.current} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label id='points'>Points: {points}</label>
            </div>
            <div id='background' style={{ display: "flex" }}>
                <canvas ref={canvasRef} id="gameCanvas" width="800" height="500"></canvas>
                <div id="ph">
                    <div id="line" />
                </div>
            </div>
        </div>
    );
}

