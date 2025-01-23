console.log("👾");

const myCircles = document.querySelectorAll(".circle");

myCircles.forEach(function(item, index) {
    item.addEventListener("click", function() {
        console.log("circle clicked: " + (parseInt(index)+1));

        if(item.classList.list.contains("square")) {
            item.classList.toggle("make-round");
        }   else {
            item.classList.toggle("move-me");
            }

    })
})

// i = i + 1 will be changed to i++
// for(let i = 0; 1 < myCircles.length) {
//     console.log(i);
//     myCircles(i).style.backgroundColor = "lightpink"
// }
