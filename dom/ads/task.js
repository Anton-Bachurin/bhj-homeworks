const rotator = [...document.querySelectorAll('.rotator__case')];

for (let i = 0; i < rotator.length; i++) {
  rotator[i].classList.remove('rotator__case_active');
  setInterval(() => {
    let index = 0;
    rotator[index].classList.add('rotator__case_active');
    index++;
  }, 1000);
}


