const gridContainer = document.querySelector('.grid-container');
const gridButton = document.querySelector('.grid-button');

function makeGrid(cols) {
  gridContainer.style.display = 'grid';
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  for (let i = 0; i < (cols * cols); i++) {
    const gridItem = document.createElement('div');
    gridItem.style.border = '1px solid red';
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  }
  addGridEventListeners();
}

function clearGrid(){
  gridContainer.innerHTML = '';
}

function addGridEventListeners(){
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', updateHoverEffect);
  });
}

makeGrid(100);

function updateHoverEffect(e){
  const square = e.target;
  square.style.backgroundColor = 'red';
}

gridButton.addEventListener('click', updateGrid);

function updateGrid(){
  let gridSize = parseInt(prompt('How many columns'));
  while(isNaN(gridSize) === true || gridSize > 100 || gridSize < 1){
    gridSize = parseInt(prompt('Enter a number between 1 and 100'));
  }
  clearGrid();
  makeGrid(parseInt(gridSize));
}