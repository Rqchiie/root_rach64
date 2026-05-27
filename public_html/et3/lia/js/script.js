// ---- SETUP ----

var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

var modeName = document.getElementById("modeName");
var modeDesc = document.getElementById("modeDesc");


// ---- VARIABLES ----

var mouseX = canvas.width  / 2;
var mouseY = canvas.height / 2;

var holding = false;
var mode    = "calm";
var color   = "#00ffff";

var particles     = [];
var stars         = [];
var MAX_PARTICLES = 300;

var colors     = ["#00ffff", "#ff1177", "#9d4edd", "#00ff88", "#ffaa00"];
var colorIndex = 0;


// ---- CONSTELLATION DATA ----
// Positions are 0 to 1 (fraction of screen width/height)
// so they scale to any screen size

var constellations = {

  // Calm mode: Orion
  calm: {
    color: "#00ffff",
    stars: [
      { name: "a", x: 0.42, y: 0.22 },  // left shoulder
      { name: "b", x: 0.55, y: 0.20 },  // right shoulder
      { name: "c", x: 0.40, y: 0.30 },  // left arm
      { name: "d", x: 0.57, y: 0.29 },  // right arm
      { name: "e", x: 0.44, y: 0.40 },  // belt left
      { name: "f", x: 0.49, y: 0.39 },  // belt middle
      { name: "g", x: 0.54, y: 0.40 },  // belt right
      { name: "h", x: 0.44, y: 0.52 },  // left foot
      { name: "i", x: 0.53, y: 0.53 },  // right foot
      { name: "j", x: 0.485, y: 0.28 }  // chest center
    ],
    lines: [
      ["a","j"], ["b","j"],
      ["j","c"], ["j","d"],
      ["j","e"], ["j","g"],
      ["e","f"], ["f","g"],
      ["e","h"], ["g","i"]
    ]
  },

  // Chaos mode: Scorpius
  chaos: {
    color: "#ff1177",
    stars: [
      { name: "a", x: 0.38, y: 0.20 },
      { name: "b", x: 0.43, y: 0.22 },
      { name: "c", x: 0.48, y: 0.21 },
      { name: "d", x: 0.50, y: 0.26 },
      { name: "e", x: 0.50, y: 0.33 },
      { name: "f", x: 0.48, y: 0.40 },
      { name: "g", x: 0.45, y: 0.46 },
      { name: "h", x: 0.43, y: 0.52 },
      { name: "i", x: 0.46, y: 0.57 },
      { name: "j", x: 0.51, y: 0.58 },
      { name: "k", x: 0.54, y: 0.55 }
    ],
    lines: [
      ["a","b"],["b","c"],["c","d"],["d","e"],
      ["e","f"],["f","g"],["g","h"],["h","i"],
      ["i","j"],["j","k"]
    ]
  },

  // Galaxy mode: Cassiopeia (W shape)
  galaxy: {
    color: "#9d4edd",
    stars: [
      { name: "a", x: 0.34, y: 0.28 },
      { name: "b", x: 0.41, y: 0.40 },
      { name: "c", x: 0.49, y: 0.30 },
      { name: "d", x: 0.57, y: 0.40 },
      { name: "e", x: 0.64, y: 0.28 }
    ],
    lines: [
      ["a","b"],["b","c"],["c","d"],["d","e"]
    ]
  },

  // Flow mode: Big Dipper
  flow: {
    color: "#ffaa00",
    stars: [
      { name: "a", x: 0.30, y: 0.30 },  // handle end
      { name: "b", x: 0.37, y: 0.32 },
      { name: "c", x: 0.44, y: 0.35 },  // handle meets bowl
      { name: "d", x: 0.48, y: 0.28 },  // bowl top left
      { name: "e", x: 0.58, y: 0.26 },  // bowl top right
      { name: "f", x: 0.60, y: 0.36 },  // bowl bottom right
      { name: "g", x: 0.50, y: 0.38 }   // bowl bottom left
    ],
    lines: [
      ["a","b"],["b","c"],
      ["c","d"],["d","e"],["e","f"],["f","g"],["g","c"]
    ]
  }

};


// ---- CONSTELLATION STATE ----

var cStars   = [];   // the active star objects
var cLines   = [];   // index pairs connecting stars
var cOpacity = 0;    // fades in from 0 to 1 when mode changes


// Builds a fresh constellation for the current mode
function buildConstellation() {
  var data = constellations[mode];
  if (!data) return;

  cStars   = [];
  cLines   = [];
  cOpacity = 0;

  // Map star names to their index so we can look up lines
  var nameToIndex = {};

  for (var i = 0; i < data.stars.length; i++) {
    var s = data.stars[i];
    nameToIndex[s.name] = i;

    cStars.push({
      x:        s.x * canvas.width,   // real pixel position
      y:        s.y * canvas.height,
      tx:       s.x * canvas.width,   // target position (home)
      ty:       s.y * canvas.height,
      vx:       0,                     // velocity
      vy:       0,
      anchored: true,                  // true = springs back home; false = drifts free
      size:     4
    });
  }

  // Turn name pairs into index pairs
  for (var i = 0; i < data.lines.length; i++) {
    var pair = data.lines[i];
    cLines.push([ nameToIndex[pair[0]], nameToIndex[pair[1]] ]);
  }
}


// Updates and draws the constellation every frame
function updateConstellation() {

  // Fade in smoothly
  if (cOpacity < 1) cOpacity += 0.02;

  var data = constellations[mode];
  var col  = data ? data.color : color;

  // Pre-parse the color so we can use it in rgba strings
  var cr = parseInt(col.slice(1, 3), 16);
  var cg = parseInt(col.slice(3, 5), 16);
  var cb = parseInt(col.slice(5, 7), 16);

  var DISTURB_RADIUS = 80;  // how close mouse needs to be to push a star
  var DISTURB_FORCE  = 6;   // how strong the push is

  // Update each star's position
  for (var i = 0; i < cStars.length; i++) {
    var s = cStars[i];

    // Check if the mouse is close enough to disturb this star
    var dx   = s.x - mouseX;
    var dy   = s.y - mouseY;
    var dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < DISTURB_RADIUS) {
      // Push the star away from the mouse
      var force = (1 - dist / DISTURB_RADIUS) * DISTURB_FORCE;
      s.vx += (dx / dist) * force;
      s.vy += (dy / dist) * force;
      s.anchored = false;  // break free from home position
    }

    if (s.anchored) {
      // Spring back toward home position
      s.vx += (s.tx - s.x) * 0.04;
      s.vy += (s.ty - s.y) * 0.04;
      // Dampen so it doesn't bounce forever
      s.vx *= 0.85;
      s.vy *= 0.85;
    } else {
      // Just drift with friction (no spring)
      s.vx *= 0.97;
      s.vy *= 0.97;
    }

    s.x += s.vx;
    s.y += s.vy;
  }

  // Draw the lines between stars
  for (var i = 0; i < cLines.length; i++) {
    var ai = cLines[i][0];
    var bi = cLines[i][1];
    var sa = cStars[ai];
    var sb = cStars[bi];

    // The line fades out the further each star has drifted from home
    var driftA   = Math.sqrt(Math.pow(sa.x - sa.tx, 2) + Math.pow(sa.y - sa.ty, 2));
    var driftB   = Math.sqrt(Math.pow(sb.x - sb.tx, 2) + Math.pow(sb.y - sb.ty, 2));
    var lineAlpha = cOpacity * (1 - Math.min(1, (driftA + driftB) / 2 / 150));

    if (lineAlpha < 0.01) continue;

    ctx.beginPath();
    ctx.moveTo(sa.x, sa.y);
    ctx.lineTo(sb.x, sb.y);
    ctx.strokeStyle = "rgba(" + cr + "," + cg + "," + cb + "," + (lineAlpha * 0.5) + ")";
    ctx.lineWidth   = 1;
    ctx.stroke();
  }

  // Draw each star dot
  for (var i = 0; i < cStars.length; i++) {
    var s     = cStars[i];
    var drift = Math.sqrt(Math.pow(s.x - s.tx, 2) + Math.pow(s.y - s.ty, 2));
    var alpha = cOpacity * (1 - Math.min(1, drift / 150));

    if (alpha < 0.01) continue;

    // Glow effect
    ctx.shadowColor = col;
    ctx.shadowBlur  = 15;

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(" + cr + "," + cg + "," + cb + "," + alpha + ")";
    ctx.fill();

    ctx.shadowBlur = 0;
  }
}


// ---- EVENTS ----

window.addEventListener("mousemove", function(e) {
  mouseX = e.x;
  mouseY = e.y;
});

window.addEventListener("mousedown", function() { holding = true;  });
window.addEventListener("mouseup",   function() { holding = false; });

// Click → burst of particles + blast nearby constellation stars
window.addEventListener("click", function(e) {

  // Spawn explosion particles
  var space = MAX_PARTICLES - particles.length;
  var count = Math.min(space, 20);
  for (var i = 0; i < count; i++) {
    var p    = new Particle(e.x, e.y);
    p.speedX = (Math.random() * 6 - 3);
    p.speedY = (Math.random() * 6 - 3);
    particles.push(p);
  }

  // Blast any constellation stars that are nearby
  var CLICK_RADIUS = 120;
  for (var i = 0; i < cStars.length; i++) {
    var s    = cStars[i];
    var dx   = s.x - e.x;
    var dy   = s.y - e.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < CLICK_RADIUS) {
      var force = (1 - dist / CLICK_RADIUS) * 14;
      s.vx += (dx / (dist || 1)) * force;
      s.vy += (dy / (dist || 1)) * force;
      s.anchored = false;
    }
  }

});

window.addEventListener("keydown", function(e) {

  if (e.key === "1") setMode("calm",   "#00ffff", "CALM",   "Smooth and relaxed.");
  if (e.key === "2") setMode("chaos",  "#ff1177", "CHAOS",  "Fast and unpredictable.");
  if (e.key === "3") setMode("galaxy", "#9d4edd", "GALAXY", "Orbits around your cursor.");
  if (e.key === "4") setMode("flow",   "#ffaa00", "FLOW",   "Follows an invisible wind.");

  if (e.key === "c" || e.key === "C") {
    colorIndex = (colorIndex + 1) % colors.length;
    color      = colors[colorIndex];
  }

  if (e.key === "r" || e.key === "R") {
    particles  = [];
    colorIndex = 0;
    setMode("calm", "#00ffff", "CALM", "Smooth and relaxed.");
  }

});

window.addEventListener("resize", function() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  // Rebuild stars and constellation for the new size
  stars = [];
  for (var i = 0; i < 100; i++) stars.push(new Star());
  buildConstellation();
});


// ---- HELPER FUNCTIONS ----

function setMode(newMode, newColor, name, desc) {
  mode  = newMode;
  color = newColor;
  modeName.textContent = name;
  modeDesc.textContent = desc;
  modeName.style.color = newColor;
  particles = [];         // clear old particles so the constellation stands out
  buildConstellation();   // spawn the new constellation
}

function hexToRgba(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
}


// ---- PARTICLE ----

function Particle(x, y) {
  this.x        = x;
  this.y        = y;
  this.size     = Math.random() * 4 + 1;
  this.baseSize = this.size;
  this.speedX   = Math.random() * 2 - 1;
  this.speedY   = Math.random() * 2 - 1;
  this.color    = color;
  this.life     = 1.0;
  this.decay    = Math.random() * 0.008 + 0.004;
  this.pulse    = Math.random() * Math.PI * 2;
}

Particle.prototype.update = function() {

  if (mode === "calm") {
    this.speedX *= 0.98;
    this.speedY *= 0.98;
    this.x += this.speedX;
    this.y += this.speedY;
  }

  if (mode === "chaos") {
    this.speedX *= 1.02;
    this.speedY *= 1.02;
    this.x += this.speedX;
    this.y += this.speedY;
  }

  if (mode === "galaxy") {
    var angle = Math.atan2(mouseY - this.y, mouseX - this.x);
    this.x += Math.cos(angle + Math.PI / 2) * 2;
    this.y += Math.sin(angle + Math.PI / 2) * 2;
    this.x += (mouseX - this.x) * 0.01;
    this.y += (mouseY - this.y) * 0.01;
  }

  if (mode === "flow") {
    var angle = Math.sin(this.x * 0.005) * Math.cos(this.y * 0.005) * Math.PI * 2;
    this.speedX += Math.cos(angle) * 0.1;
    this.speedY += Math.sin(angle) * 0.1;
    var spd = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
    if (spd > 4) {
      this.speedX = (this.speedX / spd) * 4;
      this.speedY = (this.speedY / spd) * 4;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }

  if (holding) {
    var dx   = mouseX - this.x;
    var dy   = mouseY - this.y;
    var dist = Math.sqrt(dx * dx + dy * dy) || 1;
    this.x += (dx / dist) * 3;
    this.y += (dy / dist) * 3;
  }

  this.pulse += 0.05;
  this.life  -= this.decay;
  this.size   = this.baseSize * this.life;
};


// ---- STAR ----

function Star() {
  this.x       = Math.random() * canvas.width;
  this.y       = Math.random() * canvas.height;
  this.size    = Math.random() * 1.5;
  this.opacity = Math.random() * 0.6;
}

Star.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255," + this.opacity + ")";
  ctx.fill();
};

for (var i = 0; i < 100; i++) stars.push(new Star());


// ---- DRAW FUNCTIONS ----

function spawnParticles() {
  var space = MAX_PARTICLES - particles.length;
  if (space <= 0) return;
  var count = Math.min(space, 5);
  for (var i = 0; i < count; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

function drawMouseGlow() {
  var glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 60);
  glow.addColorStop(0, hexToRgba(color, 0.6));
  glow.addColorStop(1, hexToRgba(color, 0));
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 80, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();
}

function drawConnections() {
  var lines = 0;
  var cr = parseInt(color.slice(1, 3), 16);
  var cg = parseInt(color.slice(3, 5), 16);
  var cb = parseInt(color.slice(5, 7), 16);

  for (var a = 0; a < particles.length && lines < 80; a += 2) {
    for (var b = a + 1; b < particles.length && lines < 80; b += 2) {
      var dx   = particles[a].x - particles[b].x;
      var dy   = particles[a].y - particles[b].y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 60) {
        var alpha = (1 - dist / 60) * 0.8;
        ctx.strokeStyle = "rgba(" + cr + "," + cg + "," + cb + "," + alpha + ")";
        ctx.lineWidth   = 1;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
        lines++;
      }
    }
  }
}

function drawParticles() {
  var groups = {};
  for (var i = 0; i < particles.length; i++) {
    var c = particles[i].color;
    if (!groups[c]) groups[c] = [];
    groups[c].push(particles[i]);
  }

  for (var col in groups) {
    var group = groups[col];

    // Soft glow layer
    ctx.shadowColor = col;
    ctx.shadowBlur  = 12;
    ctx.fillStyle   = col;
    for (var i = 0; i < group.length; i++) {
      var p = group[i];
      ctx.globalAlpha = p.life * 0.4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Solid bright dot
    ctx.shadowBlur = 0;
    for (var i = 0; i < group.length; i++) {
      var p = group[i];
      ctx.globalAlpha = p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.1, p.size), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.globalAlpha = 1;
  ctx.shadowBlur  = 0;
}


// ---- MAIN LOOP ----

function animate() {

  // Dark transparent overlay creates the trail effect
  ctx.fillStyle = "rgba(5, 8, 22, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw background stars
  for (var i = 0; i < stars.length; i++) stars[i].draw();

  // Draw the mouse glow
  drawMouseGlow();

  // Draw and update the constellation
  updateConstellation();

  // Spawn new particles near the mouse
  spawnParticles();

  // Update all particles and remove dead ones
  for (var i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    var p         = particles[i];
    var offScreen = p.x < -50 || p.x > canvas.width  + 50
                 || p.y < -50 || p.y > canvas.height + 50;
    if (p.life <= 0 || p.size <= 0.1 || offScreen) {
      particles.splice(i, 1);
    }
  }

  // Draw lines between nearby particles
  drawConnections();

  // Draw all particles
  drawParticles();

  requestAnimationFrame(animate);
}

// Build the starting constellation then kick off the loop
buildConstellation();
animate();