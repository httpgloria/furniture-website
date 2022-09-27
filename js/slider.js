const nextArrow = document.querySelector('.splide__arrow--next');
const prevArrow = document.querySelector('.splide__arrow--prev');
const progressBar = document.querySelector('.progress-bar');

let counter = 0;

new Splide('#slide-01', {
  direction: 'ttb',
  height: '60rem',
  pagination: false,
  perPage: 1,
  drag: false,
  breakpoints: {
    1500: {
      height: '50rem',
    },
  },
}).mount();

new Splide('#slide-02', { pagination: false }).mount();

nextArrow.addEventListener('click', (e) => {
  counterUpdate(true);
  progressBarUpdate();
});

prevArrow.addEventListener('click', (e) => {
  counterUpdate(false);
  progressBarUpdate();
});

function counterUpdate(next) {
  if (next) {
    if (counter < 3) {
      counter++;
    }
  } else {
    if (counter > 0) {
      counter--;
    }
  }
}

function progressBarUpdate() {
  progressBar.style.height = `${(100 / 3) * counter}%`;
}
