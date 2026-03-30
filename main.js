const siteHeader = document.querySelector('.site-header');
const contactForm = document.querySelector('.contact-form');

const updateHeaderScrollState = () => {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle('scrolled', window.scrollY > 50);
};

const createSuccessMessage = () => {
  const successMessage = document.createElement('p');

  successMessage.setAttribute('role', 'status');
  successMessage.setAttribute('aria-live', 'polite');
  successMessage.textContent = 'Thanks. Your message has been sent successfully.';
  successMessage.dataset.contactSuccess = 'true';

  Object.assign(successMessage.style, {
    marginTop: 'var(--space-3)',
    padding: '0.9rem 1rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid rgba(86, 129, 82, 0.28)',
    background: 'rgba(86, 129, 82, 0.12)',
    color: 'var(--color-ink)',
    fontWeight: '600',
  });

  return successMessage;
};

window.addEventListener('scroll', updateHeaderScrollState, { passive: true });
updateHeaderScrollState();

if (contactForm) {
  let successMessage;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (successMessage) {
      successMessage.remove();
    }

    contactForm.reset();

    successMessage = createSuccessMessage();
    contactForm.insertAdjacentElement('afterend', successMessage);
  });

  contactForm.addEventListener('input', () => {
    if (!successMessage) {
      return;
    }

    successMessage.remove();
    successMessage = undefined;
  });
}
