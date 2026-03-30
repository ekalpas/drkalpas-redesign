const siteHeader = document.querySelector('.site-header');
const contactForm = document.querySelector('.contact-form');

const updateHeaderScrollState = () => {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle('scrolled', window.scrollY > 50);
};

const createStaticFormMessage = () => {
  const staticFormMessage = document.createElement('p');

  staticFormMessage.setAttribute('role', 'status');
  staticFormMessage.setAttribute('aria-live', 'polite');
  staticFormMessage.textContent = 'This contact form is a static preview. Your message has been kept in place.';
  staticFormMessage.dataset.contactNotice = 'true';

  Object.assign(staticFormMessage.style, {
    marginTop: 'var(--space-3)',
    padding: '0.9rem 1rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid rgba(139, 107, 63, 0.24)',
    background: 'rgba(139, 107, 63, 0.1)',
    color: 'var(--color-ink)',
    fontWeight: '600',
  });

  return staticFormMessage;
};

window.addEventListener('scroll', updateHeaderScrollState, { passive: true });
updateHeaderScrollState();

if (contactForm) {
  let staticFormMessage;
  const submitButton = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (staticFormMessage) {
      staticFormMessage.remove();
    }

    staticFormMessage = createStaticFormMessage();
    contactForm.insertAdjacentElement('afterend', staticFormMessage);

    if (submitButton) {
      submitButton.textContent = 'Preview saved locally';
    }
  });
}
