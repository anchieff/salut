
const trigger = document.querySelector('.header__callback'),
      overley = document.querySelector('.overlay'),
      modal = document.querySelector('.modal'),
      close = document.querySelector('.modal__close');

trigger.addEventListener('click', () => {
  overley.classList.add('active');
  modal.classList.add('active');
})

close.addEventListener('click', () => {
  overley.classList.remove('active');
  modal.classList.remove('active');
})



