const gridContainer = document.querySelector('.grid-container');

function makeGrid(cols) {
  gridContainer.style.display = 'grid';
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  for (let i = 0; i < (cols * cols); i++) {
    const gridItem = document.createElement('div');
    gridItem.textContent = i;
    gridItem.style.border = '1px solid red';
    gridContainer.appendChild(gridItem);
  }
}

makeGrid(5);
