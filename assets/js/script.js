const navCheckbox = document.getElementById('nav-check');
const bodyElement = document.querySelector('body');

bodyElement.addEventListener('click', function(event) {
  if (!event.target.closest('.nav')) {
    navCheckbox.checked = false;
  }
});

const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navCheckbox.checked = false;
      });
    });