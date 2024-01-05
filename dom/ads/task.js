const rotator = [...document.querySelectorAll('.rotator__case')];
let index = 0;

const intervalId = setInterval(() => {
  if (index < rotator.length - 1) {
    rotator[index].classList.remove('rotator__case_active');
    rotator[index + 1].classList.add('rotator__case_active');  
    index++;
  } else if (index === rotator.length - 1) {
    rotator[index].classList.remove('rotator__case_active');
    index = 0;
    rotator[index].classList.add('rotator__case_active');
    setInterval(intervalId);
  }
}, 1000);
