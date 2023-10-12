let start = document.getElementById("timer");

let timerId = setInterval(() => start.textContent--, 1000);

setTimeout(() => {clearInterval(timerId); alert("Вы победили в конкурсе!"); }, 59000);



