const activeClassName = 'rotator__case_active';

const activeCase = document.querySelector('.' + activeClassName);

const lastChild = document.querySelector('.rotator').lastElementChild;

setInterval(() => {
 activeCase.classList.remove(activeClassName);
 activeCase.nextElementSibling.classList.add(activeClassName);
}, 1000);

