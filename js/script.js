const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting normally
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
});
