document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('ctaButton');
  const message = document.getElementById('message');

  if (button && message) {
    button.addEventListener('click', () => {
      message.textContent = 'This is a simple static website built with HTML, CSS, and JavaScript!';
    });
  }
});
