let cookieClicker = document.getElementById("clicker__counter");

let cookieImage = document.getElementById("cookie");

cookieImage.onclick = function() {
  cookieClicker.textContent ++;

  if (cookieClicker.textContent % 2 !== 0) {
  cookieImage.width = 250;
  } else {
  	cookieImage.width = 200;
  }
}










