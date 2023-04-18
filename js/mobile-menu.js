(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

function toggleAnswer() {
      
  const plusIcons = document.querySelectorAll('.plus');
  const minusIcons = document.querySelectorAll('.minus');
  const answerElements = document.querySelectorAll('.question__item-answer');

  for (let i = 0; i < plusIcons.length; i++) {
    plusIcons[i].addEventListener('click', function() {
    plusIcons[i].style.display = 'none';
    minusIcons[i].style.display = 'block';
    answerElements[i].style.display = 'block';
  });
  }

  for (let i = 0; i < minusIcons.length; i++) {
    minusIcons[i].addEventListener('click', function() {
    minusIcons[i].style.display = 'none';
    plusIcons[i].style.display = 'block';
    answerElements[i].style.display = 'none';
  });
  }
}
// question__item-question





