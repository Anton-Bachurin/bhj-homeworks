const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = [...document.querySelectorAll('.dropdown__item')];

const activeClassName = 'dropdown__list_active';

const dropdownToggle = () => dropdownList.classList.toggle(activeClassName);
 
dropdownValue.addEventListener('click', dropdownToggle);

dropdownList.onclick = function(elem) {
  const target = elem.target;
  if (!target.classList.contains('dropdown__link')) return;
  dropdownValue.textContent = target.textContent;
};

