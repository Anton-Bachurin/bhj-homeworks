let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownLinks = [...document.querySelectorAll('.dropdown__item')];

function dropdownOpen() {
  dropdownList.classList.add('dropdown__list_active');
};

function dropdownClose() {
  dropdownList.classList.remove('dropdown__list_active');
};

  if (dropdownList.classList.contains('dropdown__list_active')) {
    dropdownValue.addEventListener('click', dropdownClose);

    for (let i = 0; i < dropdownLinks.length; i++) {
  	  dropdownLinks[i].onclick = function() {
  	    dropdownValue.textContent = dropdownLinks[i].textContent;
  	  }; 	
    };
  } else {
    dropdownValue.addEventListener('click', dropdownOpen);
  };


