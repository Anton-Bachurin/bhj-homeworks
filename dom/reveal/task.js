const revealText = [...document.querySelectorAll('.reveal')];

document.addEventListener('scroll', function() {
  for (let i = 0; i < revealText.length; i++) {
   const coord = revealText[i].getBoundingClientRect();
  	
   if (coord.bottom > 0 && coord.top < window.innerHeight) {
  	  revealText[i].classList.add('reveal_active')
   };
 };
});





