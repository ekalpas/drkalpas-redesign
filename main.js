const siteHeader = document.querySelector('.site-header');
const contactForm = document.querySelector('.contact-form');

const updateHeaderScrollState = () => {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle('scrolled', window.scrollY > 50);
};

window.addEventListener('scroll', updateHeaderScrollState, { passive: true });
updateHeaderScrollState();
