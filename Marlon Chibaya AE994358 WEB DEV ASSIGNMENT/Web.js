const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
const typing = document.getElementById('typing');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuButton.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.textContent = '☰';
  });
});

const words = ['DEVELOPER', 'DESIGNER', 'PHOTOGRAPHER'];
let word = 0;
let letter = 0;
let deleting = false;

function typeText() {
  const current = words[word];
  typing.textContent = deleting
    ? current.substring(0, letter - 1)
    : current.substring(0, letter + 1);

  letter += deleting ? -1 : 1;

  let delay = deleting ? 60 : 110;
  if (!deleting && letter === current.length) {
    deleting = true;
    delay = 1000;
  } else if (deleting && letter === 0) {
    deleting = false;
    word = (word + 1) % words.length;
    delay = 300;
  }

  setTimeout(typeText, delay);
}

typeText();
const themeToggle = document.getElementById("themeToggle");

themeToggle.onchange = function () {
  document.body.classList.toggle("dark", !themeToggle.checked);
};
document.body.classList.toggle("dark");
