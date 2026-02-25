const greetings = ["Hola.", "Ciao.", "BonJour.", "नमस्ते.", "Hello."];
const word = document.getElementById("hello");

greetings.forEach((greets, index) => {
  setTimeout(() => {
    word.textContent = greets;
  }, index * 750); 
});

document.addEventListener('DOMContentLoaded', () => {
  const socialButtons = document.querySelectorAll('.sites button');

  socialButtons.forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });
});



