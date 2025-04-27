const generate = document.getElementById('generate');
const valueColor = document.getElementById('valueColor');

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase()}`;
};

const setBackground = () => {
  const colorCode = randomColor();
  document.body.style.backgroundColor = colorCode;

  valueColor.textContent = colorCode;
  valueColor.style.color = colorCode;
};

generate.addEventListener('click', setBackground);
setBackground();
