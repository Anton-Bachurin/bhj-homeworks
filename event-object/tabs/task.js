document.addEventListener('click', elem => {
  const tab = elem.target.closest('.tab');
  if (!tab) return;
  tab.classList.add('tab_active');
})








