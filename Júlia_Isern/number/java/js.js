const generateButton = document.getElementById('generate-button');
const output = document.getElementById('output');

generateButton.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 101);
  output.textContent = `Your random number is ${randomNumber}`;

  if (randomNumber >= 0 && randomNumber < 20) {
    document.body.style.backgroundColor = '#ff6666';
  } else if (randomNumber >= 20 && randomNumber < 40) {
    document.body.style.backgroundColor = '#ffb266';
  } else if (randomNumber >= 40 && randomNumber < 60) {
    document.body.style.backgroundColor = '#ffff66';
  } else if (randomNumber >= 60 && randomNumber < 80) {
    document.body.style.backgroundColor = '#b2ff66';
  } else {
    document.body.style.backgroundColor = '#66b3ff';
  }
});
