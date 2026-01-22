// --- ELEMENTS ---
const cases = document.querySelectorAll(".case"); 
const replayBtn = document.querySelector("#replay");
const panneauMessage = document.querySelector("#message");
const panneauMessageTexte = document.querySelector("#message-text");
const panneauMessageImage = document.querySelector("#message-img");

// NEW: Turn indicator
const turnIndicator = document.createElement("p");
turnIndicator.id = "turn";
document.querySelector("#table").prepend(turnIndicator);

// --- GAME STATE ---
let joueurX = true; // true = Dumpling, false = Siu-Mai
let roundCount = 0;
let gameOver = false;

const patrons = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

// --- FUNCTIONS ---
function updateTurn() {
  if (!gameOver) {
    turnIndicator.textContent = joueurX ? "Le tour du Dumpling!" : "Le tour du Siu-Mai!";
  } else {
    turnIndicator.textContent = "";
  }
}

function showPanneauMessageGagnant(text, imgPath) {
  panneauMessageTexte.textContent = text;
  if (imgPath) {
    panneauMessageImage.src = imgPath;
    panneauMessageImage.style.display = "block";
  } else {
    panneauMessageImage.style.display = "none";
  }
  panneauMessage.classList.remove("hidden");
}

function hidePanneauMessageGagnant() {
  panneauMessage.classList.add("hidden");
  panneauMessageImage.src = "";
}

function valide() {
  let victoire = false;

  for (let patron of patrons) {
    let val1 = cases[patron[0]].style.backgroundImage;
    let val2 = cases[patron[1]].style.backgroundImage;
    let val3 = cases[patron[2]].style.backgroundImage;

    if (val1 && val1 === val2 && val1 === val3) {
      victoire = true;
      gameOver = true;
      if (val1.includes("dumpling.png")) {
        showPanneauMessageGagnant("Dumpling a gagné!", "img/win-dumpling.png");
      } else {
        showPanneauMessageGagnant("Siu-Mai a gagné!", "img/win-siumai.png");
      }
    }
  }

  // Tie condition
  if (!victoire && roundCount === 9) {
    gameOver = true;
    showPanneauMessageGagnant("Partie nulle");
  }

  updateTurn();
}

// --- GAMEPLAY ---
for (let boite of cases) {
  boite.active = true;
  boite.addEventListener("click", function () {
    if (!boite.active || gameOver) return;

    boite.style.backgroundImage = joueurX ? "url('img/dumpling.png')" : "url('img/siumai.png')";
    boite.active = false;
    roundCount++;
    joueurX = !joueurX;
    valide();
  });
}

// --- REPLAY ---
replayBtn.addEventListener("click", function () {
  for (let boite of cases) {
    boite.active = true;
    boite.style.backgroundImage = "";
  }
  joueurX = true;
  roundCount = 0;
  gameOver = false;
  hidePanneauMessageGagnant();
  updateTurn();
});

// --- INIT ---
updateTurn();
