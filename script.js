const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Formspree handles delivery. This message appears only after a successful response.
const form = document.getElementById('bookingForm');
const status = document.getElementById('formStatus');

if (form && status) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.classList.remove('error');

    const endpoint = form.getAttribute('action') || '';
    if (endpoint.includes('YOUR_FORMSPREE_ID')) {
      status.textContent = 'Almost ready! Add your Formspree form ID to index.html before using the form.';
      status.classList.add('error');
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending request…';
    status.textContent = '';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        form.reset();
        status.textContent = 'Thanks! Your request has been sent. Jasmine will follow up with you.';
      } else {
        const result = await response.json().catch(() => ({}));
        const message = result.errors?.map((error) => error.message).join(' ') || 'Something went wrong. Please try again or email Jasmine directly.';
        status.textContent = message;
        status.classList.add('error');
      }
    } catch (error) {
      status.textContent = 'Could not send the form right now. Please email Jasmineleahp@gmail.com instead.';
      status.classList.add('error');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  });
}
