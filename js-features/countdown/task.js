let start = document.getElementById("timer");

let timerId = setInterval(() => start.textContent--, 100);

if (start.textContent === "0") {
  clearInterval(timerId); 
  alert("Вы победили в конкурсе!");
}

