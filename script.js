(() => {
  document.body.classList.add('has-js');
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  const navAnchors = links ? [...links.querySelectorAll('a')] : [];

  const closeMenu = () => {
    if (!toggle || !links) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    links.classList.remove('is-open');
  };

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
      links.classList.toggle('is-open', !isOpen);
    });
    navAnchors.forEach((anchor) => anchor.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (toggle.getAttribute('aria-expanded') === 'true' && !links.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const form = document.querySelector('#contact-form');
  if (!form) return;
  const success = document.querySelector('#form-success');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const fields = {
    name: { input: form.elements.name, error: document.querySelector('#name-error'), message: 'Please enter your name.' },
    email: { input: form.elements.email, error: document.querySelector('#email-error'), message: 'Enter a valid email address.' },
    company: { input: form.elements.company, error: document.querySelector('#company-error'), message: '' },
    message: { input: form.elements.message, error: document.querySelector('#message-error'), message: 'Please add a short message.' }
  };

  const validate = (key) => {
    const field = fields[key];
    const value = field.input.value.trim();
    let message = '';
    if (key === 'name' && !value) message = field.message;
    if (key === 'email' && (!value || !emailPattern.test(value))) message = field.message;
    if (key === 'message' && !value) message = field.message;
    field.input.setAttribute('aria-invalid', String(Boolean(message)));
    field.error.textContent = message;
    return !message;
  };

  Object.entries(fields).forEach(([key, field]) => {
    field.input.addEventListener('blur', () => validate(key));
    field.input.addEventListener('input', () => {
      if (field.input.getAttribute('aria-invalid') === 'true') validate(key);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const valid = ['name', 'email', 'message'].map((key) => validate(key)).every(Boolean);
    if (!valid) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    success.hidden = false;
    success.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
    form.reset();
    Object.values(fields).forEach(({ input }) => input.removeAttribute('aria-invalid'));
  });
})();
