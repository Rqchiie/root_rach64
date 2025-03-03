// 2d_transform.js
//console.log('2d_transform.js loaded');
//create a selector
let car = document.querySelector('#car');
console.log(car);
car.addEventListener('click', moveCar);

function moveCar(ev) {
  console.log(ev);
  ev.target.classList.toggle('move-right');
}

// challenge solution
/*let info = document.querySelector('#info-transform nav');
info.addEventListener('click', toggleInfo);
function toggleInfo(event) {
  console.log('toggleInfo');
  this.parentNode.classList.toggle('visible');
}*/

//bonus challenge solution
let infoSections = document.querySelectorAll('article section nav');

//loop through all the gallery images and add a showModal function
infoSections.forEach(function(element){
  //console.log(element)
  element.addEventListener('click', showInfo);

});

function showInfo(element) {
  this.parentNode.classList.toggle('visible');
  if(this.innerHTML == 'i'){
    this.innerHTML = 'x';
  }else{
    this.innerHTML = 'i';
  }
}