console.log("Script is working!")

const stage = document.querySelector("body")
const myCharacter = document.getElementById("character");

// Sounds
const wooo = new Audio ("sounds/game-character.mp3")

myCharacter.onclick = () => {
    myCharacter.classList.toggle("move")  
    wooo.play();
}

stage.addEventListener("click", function(event) {
    console.log(event.clientX + " : " + event.clientY)

    // var coords = "translateX(" + event.clientX + "px) translate(" + eventclientY + "px)";
    var coords = `translateX(${event.clientX-150}px) translateY(${event.clientY-177}px)`;
    myCharacter.style.transform = coords;

})

// Keyboard input
document.onkeydown = checkKeys;

function checkKeys(event) {
    
    var style = window.getComputedStyle(myCharacter);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;    
    var coords;

    //left arrow
    if(event.keyCode == "37") {
        coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
        myCharacter.style.transform = coords;
    }
    //right arrow
    if(event.keyCode == "39") {
        coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
        myCharacter.style.transform = coords;
    }
    //up arrow
    if(event.keyCode == "38") {
        coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
        myCharacter.style.transform = coords;
    }
    //down arrow
    if(event.keyCode == "40") {
        coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
        myCharacter.style.transform = coords;
    }


}

// ES6
// myCharacter.onclick = () => {
//     this.classList.toggle("move")    
// }

function addMyObject() {
    // Custom Object
    let myObject = document.createElement("img");
    myObject.src = "img/ball.svg";
    stage.append(myObject);
    // read window's available width & height in px
    let w = window.innerWidth;
    let h = window.innerHeight;
    // randomize new X & Y numbers within space limit
    let randomX = Math.floor((Math.random() * w) + 1);
    let randomY = Math.floor((Math.random() * h) + 1);

    myObject.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;

    setTimeout(() => { myObject.remove(); addMyObject(); }, 2500);
   

}

addMyObject();


