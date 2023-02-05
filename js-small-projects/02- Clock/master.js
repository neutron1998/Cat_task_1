// Catch Element
var secHand = document.querySelector(".second-hand");
var minHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");
// Clock Logic
function setDate() {
  // Know What is second
  var now = new Date();

  // sec
  var secPos = ((now.getSeconds() / 60) * 360) + 90;
  secHand.style.transform = `rotate(${secPos}deg)`;
  secHand.style.background = `rgb(${secPos},2,33)`
  //console.log(secPos);
  
  // min
  var minPos = ((now.getMinutes() / 60) * 360) + 90;  
  minHand.style.transform = `rotate(${minPos}deg)`;
  minHand.style.background = `rgb(2,${minPos},2)`
  //console.log(minPos);
  
  // hour
  var hourPos = ((now.getHours() / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourPos}deg)`;
  hourHand.style.background = `rgb(2,2,${hourPos})`
  //console.log(hourPos)
}

setInterval(setDate, 1000);
//
