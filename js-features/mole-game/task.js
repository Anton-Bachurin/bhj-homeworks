let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function startAgain() {
  dead.textContent = 0;
  lost.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);

  hole.onclick = function() {
    if (hole.className.includes('hole_has-mole')) {
      dead.textContent++;
    } else {
        lost.textContent++;
      }

    if (dead.textContent === "10") {
      alert("Победа!");
      startAgain();
    } else if (lost.textContent === "5") {
    	alert("Вы проиграли!");
    	startAgain();
    }
  }
}





