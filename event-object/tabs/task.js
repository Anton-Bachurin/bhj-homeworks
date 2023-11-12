const tabs = [...document.querySelectorAll('.tab')];
const tabsContent = [...document.querySelectorAll('.tab__content')];

document.addEventListener('click', elem => {
  const tab = elem.target.closest('.tab');

  if (!tab) return;

  for(i = 0; i < tabs.length; i++) {
  	tabs[i].classList.remove('tab_active');
  	tab.classList.add('tab_active');

    for(j = 0; j < tabsContent.length; j++) {
      	tabsContent[i].classList.remove('tab__content_active');
    };

  	if (tabs[i].classList.contains('tab_active')) {
  	  tabsContent[i].classList.add('tab__content_active');
  	};
  }; 
});





