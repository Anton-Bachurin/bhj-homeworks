const tabs = [...document.querySelectorAll('.tab')];
const tabsContent = [...document.querySelectorAll('.tab__content')];

for (i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function() {
    tabs[i].classList.add('tab_active');
  }
};