let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'Leer menos'
  }
  else {
    readMore_btn.innerHTML = 'Leer mas'
  }
}


let readMore_btn_a = document.getElementById('readMore_btn_a');
let hideTextA = document.getElementById('hideTextA');


readMore_btn_a.addEventListener('click', toggleText);

function toggleText() {
  hideTextA.classList.toggle('showTextA');

  if(hideTextA.classList.contains('showTextA')) {
    readMore_btn_a.innerHTML = 'Leer menos'
  }
  else {
    readMore_btn_a.innerHTML = 'Leer mas'
  }
}




