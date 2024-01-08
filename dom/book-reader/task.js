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
  } 

  if (parent[0].classList.contains('font-size_active')) {
    bookContent.classList.add('book_fs-small');
  } else if (parent[1].classList.contains('font-size_active')) {
    bookContent.classList.remove('book_fs-small', 'book_fs-big'); 
  } else if (parent[2].classList.contains('font-size_active')) {
    bookContent.classList.add('book_fs-big');
  }
});



