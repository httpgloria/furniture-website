const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
  if (nav.dataset.visible == 'false') {
    nav.setAttribute('data-visible', true);
    menu.classList.add('open');
  } else {
    nav.setAttribute('data-visible', false);
    menu.classList.remove('open');
  }
});
