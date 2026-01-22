// Game state
var gameState = 'start'; // 'start', 'instructions', 'playing', 'win', 'lose'

// Screen functions
function showScreen(screenId) {
    document.querySelectorAll('.screen-overlay').forEach(screen => {
        screen.classList.remove('active');
    });
    setTimeout(() => {
        document.getElementById(screenId).classList.add('active');
    }, 50);
}

function hideAllScreens() {
    document.querySelectorAll('.screen-overlay').forEach(screen => {
        screen.classList.remove('active');
    });
}

function showInstructions() {
    showScreen('instructionScreen');
}

function startGame() {
    hideAllScreens();
    gameState = 'playing';
    init();
    lastTime = Date.now();
    window.requestAnimationFrame(main);
}

function restartGame() {
    gameState = 'start';
    timer = 30;
    hideAllScreens();
    setTimeout(() => {
        showScreen('startScreen');
    }, 500);
}

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
document.querySelector("#gameBox").appendChild(canvas);

// Load sprites
var bgReady = false;
var bgImage = new Image();
bgImage.src = "images/background-01.png";
bgImage.onload = function () {
    bgReady = true; 
};

var winReady = false;
var winImage = new Image(); 
winImage.src = "images/win.png"; 
winImage.onload = function () {
    winReady = true; 
};

var playerReady = false;
var playerImage = new Image(); 
playerImage.src = "images/character.png"; 
playerImage.onload = function () {
    playerReady = true; 
};

var goodyReady = false;
var goodyImage = new Image(); 
goodyImage.src = "images/wood.png"; 
goodyImage.onload = function () {
    goodyReady = true; 
};

// Detect if mobile
var isMobile = window.innerWidth < 768;

// Create global game objects 
var player = {
    speed: 5,
    width: isMobile ? 50 : 90,
    height: isMobile ? 56 : 100,
    facing: "right"
};

var goodies = [
    { width: isMobile ? 35 : 70, height: isMobile ? 25 : 50 },
    { width: isMobile ? 35 : 70, height: isMobile ? 25 : 50 },
    { width: isMobile ? 35 : 70, height: isMobile ? 25 : 50 }
];

// Velocity variables
var vX = 0;
var vY = 0;

// Snow effect
var snowflakes = [];
var numSnowflakes = 150;

// Timer variables
var timer = 30;
var lastTime = Date.now();

// Handle keyboard controls
addEventListener("keydown", function (e) {
    if (e.keyCode == 38) { vX = 0; vY = -player.speed; }
    if (e.keyCode == 40) { vX = 0; vY = player.speed; }
    if (e.keyCode == 37) { vX = -player.speed; vY = 0; player.facing = "left"; }
    if (e.keyCode == 39) { vX = player.speed; vY = 0; player.facing = "right"; }
    if (e.keyCode == 32) { 
        e.preventDefault(); // Add this to prevent default spacebar behavior
        vX = 0; 
        vY = 0; 
    }
}, false);

// Handle touch controls
document.getElementById("uArrow").addEventListener("touchstart", function (e) {
    e.preventDefault();
    vX = 0;
    vY = -player.speed;
}, { passive: false });

document.getElementById("dArrow").addEventListener("touchstart", function (e) {
    e.preventDefault();
    vX = 0;
    vY = player.speed;
}, { passive: false });

document.getElementById("lArrow").addEventListener("touchstart", function (e) {
    e.preventDefault();
    vX = -player.speed;
    vY = 0;
    player.facing = "left";
}, { passive: false });

document.getElementById("rArrow").addEventListener("touchstart", function (e) {
    e.preventDefault();
    vX = player.speed;
    vY = 0;
    player.facing = "right";
}, { passive: false });

canvas.addEventListener("touchstart", function (e) {
    e.preventDefault();
    vX = 0;
    vY = 0;
}, { passive: false });

// Resize handler
var resizeCanvas = function () {
    var relX = player.x / canvas.width || 0.5;
    var relY = player.y / canvas.height || 0.5;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    player.x = relX * canvas.width;
    player.y = relY * canvas.height;
};

// Initialize snow
var initSnow = function () {
    snowflakes = [];
    for (var i = 0; i < numSnowflakes; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.floor(Math.random() * 3) + 2,
            speedY: 0.5 + Math.random() * 1.5,
            driftSpeed: Math.random() * 0.02 + 0.01,
            driftOffset: Math.random() * Math.PI * 2
        });
    }
};

// Draw snow
var drawSnow = function () {
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = "white";
    for (var i = 0; i < snowflakes.length; i++) {
        var flake = snowflakes[i];
        flake.x += Math.sin(flake.driftOffset) * 0.5;
        flake.driftOffset += flake.driftSpeed;
        flake.y += flake.speedY;

        if (flake.y > canvas.height) flake.y = -flake.size;
        if (flake.x > canvas.width) flake.x = 0;
        if (flake.x < 0) flake.x = canvas.width;

        ctx.fillRect(Math.floor(flake.x), Math.floor(flake.y), flake.size, flake.size);
    }
    ctx.restore();
};

// Set initial state
var init = function () {
    player.x = (canvas.width - player.width) / 2; 
    player.y = (canvas.height - player.height) / 2;
    
    goodies = [
        { width: isMobile ? 35 : 70, height: isMobile ? 25 : 50 },
        { width: isMobile ? 35 : 70, height: isMobile ? 25 : 50 },
        { width: isMobile ? 35 : 70, height: isMobile ? 25 : 50 }
    ];
    
    for (var i in goodies) {
        goodies[i].x = (Math.random() * (canvas.width - goodies[i].width));
        goodies[i].y = (Math.random() * (canvas.height - goodies[i].height));
    }
    initSnow();
    timer = 30;
    lastTime = Date.now();
};

// The main game loop
var main = function () {
    if (gameState !== 'playing') return;
    
    // Update timer
    var currentTime = Date.now();
    var deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    timer -= deltaTime;
    
    if (checkWin()) {
        gameState = 'win';
        setTimeout(() => showScreen('winScreen'), 500);
    }
    else if (checkLose()) {
        gameState = 'lose';
        setTimeout(() => showScreen('loseScreen'), 500);
    }
    else {
        // Move player
        if (player.x > 0 && player.x < canvas.width - player.width) {
            player.x += vX;
        }
        else {
            player.x -= vX;
            vX = -vX;
        }
        if (player.y > 0 && player.y < canvas.height - player.height) {
            player.y += vY;
        }
        else {
            player.y -= vY;
            vY = -vY;
        }
        
        // Check collisions
        for (var i in goodies) {
            if (checkCollision(player, goodies[i])) {
                goodies.splice(i, 1);
            }
        }
        render();
        window.requestAnimationFrame(main);
    }
};

// Draw everything
var render = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    if (bgReady) {
        var bgAspect = bgImage.width / bgImage.height;
        var canvasAspect = canvas.width / canvas.height;
        var drawWidth, drawHeight;

        if (canvasAspect > bgAspect) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / bgAspect;
        } else {
            drawHeight = canvas.height;
            drawWidth = canvas.height * bgAspect;
        }

        var offsetX = (canvas.width - drawWidth) / 2;
        var offsetY = (canvas.height - drawHeight) / 2;
        ctx.drawImage(bgImage, offsetX, offsetY, drawWidth, drawHeight);
    }

    // Vision mask
    ctx.save();
    ctx.beginPath();
    var radius = isMobile ? 100 : 150;
    var cx = player.x + player.width / 2;
    var cy = player.y + player.height / 2;
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    // Draw goodies
    if (goodyReady) {
        for (var i in goodies) {
            ctx.drawImage(goodyImage, goodies[i].x, goodies[i].y, goodies[i].width, goodies[i].height);
        }
    }

    // Draw player
    if (playerReady) {
        ctx.save();
        if (player.facing === "left") {
            ctx.translate(player.x + player.width, player.y);
            ctx.scale(-1, 1);
            ctx.drawImage(playerImage, 0, 0, player.width, player.height);
        } else {
            ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
        }
        ctx.restore();
    }

    ctx.restore();

    // Vision overlay
    var gradient = ctx.createRadialGradient(cx, cy, radius * 0.7, cx, cy, radius);
    gradient.addColorStop(0, "rgba(245, 208, 76, 0.1)");
    gradient.addColorStop(1, "rgba(10, 10, 51, 0.7)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawSnow();

    // Label
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = isMobile ? "12px Dogica Pixel" : "18px Dogica Pixel";
    ctx.fillText("Bois restants : " + goodies.length, 32, 32);
    
    // Timer
    var minutes = Math.floor(timer / 60);
    var seconds = Math.floor(timer % 60);
    var timerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    ctx.fillText("Temps restant : " + timerText, 32, 64);
};

// Generic function to check for collisions 
var checkCollision = function (obj1, obj2) {
    if (obj1.x < (obj2.x + obj2.width) && 
        (obj1.x + obj1.width) > obj2.x && 
        obj1.y < (obj2.y + obj2.height) && 
        (obj1.y + obj1.height) > obj2.y) {
            return true;
    }
};

// Check if we have won
var checkWin = function () {
    return goodies.length === 0;
};

// Check if we have lost
var checkLose = function () {
    return timer <= 0 && goodies.length > 0;
};

// Start with screens visible
resizeCanvas();
window.addEventListener("resize", resizeCanvas);