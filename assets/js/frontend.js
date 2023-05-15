// Add Smooth Scrolling Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetEl = document.querySelector(this.getAttribute('href'));
    const targetElTop = targetEl.getBoundingClientRect().top + window.pageYOffset - 64; // tambahkan offset -100px
    window.scrollTo({
      top: targetElTop,
      behavior: "smooth"
    });
  });
});

// Get all the buttons
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const title = item.querySelector('.accordion-title');
  title.addEventListener('click', () => {
    const content = item.querySelector('.accordion-content');
    content.classList.toggle('hidden');
    const arrow = item.querySelector('svg');
    arrow.classList.toggle('rotate-180');
  });
});

const primaryHeader = document.querySelector('.primary__header');
const navLink = document.querySelector('.list-link')

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    primaryHeader.classList.add('bg-blur');
    primaryHeader.classList.remove('bg-transparent');
    navLink.classList.remove('text-white')
  } else {
    primaryHeader.classList.remove('bg-blur');
    primaryHeader.classList.add('bg-transparent');
    navLink.classList.add('text-white')
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const menuIconClose = document.querySelector('.menu-icon-close');
const menu = document.querySelector('.list-link')

menuToggle.addEventListener('click', function () {
  menuIcon.classList.toggle('hidden');
  menuIconClose.classList.toggle('hidden');
  menu.classList.toggle('-translate-x-96')
  menu.classList.add('mt-16')
});