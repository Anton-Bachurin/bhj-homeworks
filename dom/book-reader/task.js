const parent = [...document.querySelectorAll('.font-size')];
const bookContent = document.querySelector('.book__content');
const fontSizes = ["book_fs-small", "", "book_fs-big"];

document.addEventListener('click', elem => {
  elem.preventDefault();
  const letter = elem.target.closest('.font-size');
  
  if (!letter) return;

  for(let i = 0; i < parent.length; i++) {
    let link = parent[i];
    link.classList.remove('font-size_active');
    letter.classList.add('font-size_active');
    
    if (link.classList.contains('font-size_active')) {
      bookContent.classList.add(fontSizes[i]);
    }
  } 
});



