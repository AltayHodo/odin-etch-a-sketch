const gridContainer = document.querySelector('.grid-container');
const gridButton = document.querySelector('.grid-button');
const colorMode = '';
const eraseButton = document.querySelector('.erase-button');
const rainbowButton = document.querySelector('.rainbow-button');
const clearButton = document.querySelector('.clear-button');
const colorPicker = document.querySelector('.color-picker');

function makeGrid(cols) {
  gridContainer.style.display = 'grid';
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  for (let i = 0; i < (cols * cols); i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.border = '1px solid #333'
    gridContainer.appendChild(gridItem);
  }
  addGridEventListeners();
}

window.addEventListener('load', () => {
  makeGrid(10);
})

function clearGrid() {
  gridContainer.innerHTML = '';
}

function addGridEventListeners(colorMode = 'default') {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', (e) => {
      addHoverEffect(e, colorMode);
    })
  });
};


eraseButton.addEventListener('click', () => {
  addGridEventListeners('erase');
});

rainbowButton.addEventListener('click', () => {
  addGridEventListeners('rainbow');
})

colorPicker.addEventListener('input', (e) => {
  const color = e.target.value;
  addGridEventListeners(color);
});

clearButton.addEventListener('click', eraseGrid);

function eraseGrid(){
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItem => {
    gridItem.style.backgroundColor = 'white';
  });
}


function addHoverEffect(e, colorMode) {
  const square = e.target;
  if(colorMode === 'erase'){
    square.style.backgroundColor = 'white';
  } else if(colorMode === 'rainbow'){
    square.style.backgroundColor = getRandomRGB();
  } else if(colorMode === 'default') {
    square.style.backgroundColor = '#333';
  } else{
    square.style.backgroundColor = colorMode;
  }
}

function getRandomRGB(){
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

gridButton.addEventListener('click', updateGrid);

function updateGrid() {
  let gridSize = parseInt(prompt('How many columns should there be?'));
  while (isNaN(gridSize) === true || gridSize > 100 || gridSize < 1) {
    gridSize = parseInt(prompt('Enter a number between 1 and 100'));
  }
  clearGrid();
  makeGrid(parseInt(gridSize));
}