const parent = [...document.querySelectorAll('.font-size')];

for(let i = 0; i < parent.length; i++) {
  let link = parent[i];

  link.onclick = function() {
  	this.setAttribute('class', 'font-size font-size_active');
    this.previousElementSibling.setAttribute('class', 'font-size');
    this.nextElementSibling.setAttribute('class', 'font-size');
    return false;
  };
};




