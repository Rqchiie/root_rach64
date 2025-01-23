console.log(' JS 2 is loaded!');

// Step 1 - selecting your element
const myHeart = document.getElementById("heart")
// my or _ means you're the one doing it
// always put conts

// Step 2 - adding a click event
myHeart.addEventListener("click", () => {
    // myHeart.style.background = "pink";
    myHeart.classList.toggle("change-me")
})


