const grid = document.querySelector('#grid');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const colorPicker = document.querySelector('#colorPicker');
const clearBtn = document.querySelector('#clearBtn');
const sizeInputLabel = document.querySelector('#sizeInputLabel');
const sizeInput = document.querySelector('#sizeInput');

let currentColor = '';
let colorPicked;



colorPicker.addEventListener('input', ()=>{
    colorPicked = colorPicker.value;
    currentColor = 'custom';
});

sizeInput.addEventListener('input', ()=>{
    sizeInputLabel.innerHTML = `Change Size: ${sizeInput.value} x ${sizeInput.value}`;
    grid.innerHTML = '';
    createGrid(sizeInput.value);
    
});




function createGrid(length){
    grid.style.gridTemplateRows = `repeat(${length}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    for(let i = 0; i < (length * length); i++){
        const gridItem = document.createElement('div');
        gridItem.style.border = '1px solid green';
        gridItem.addEventListener('mouseover', changeColor);
        grid.appendChild(gridItem).classList.add('box');
    }
}
createGrid(8);

const boxes = document.querySelectorAll('.box');

rainbowBtn.onclick = () => currentColor = 'rainbow';
eraserBtn.onclick = () => currentColor = 'white';
clearBtn.onclick = () =>{
    boxes.forEach(box => box.style.backgroundColor = 'white');
};


//to clear grid=  grid.innerHTML = ''

function changeColor(e){
    if(currentColor === 'rainbow'){
        let rand1 = Math.floor(Math.random() * 255) + 1;
        let rand2 = Math.floor(Math.random() * 255) + 1;
        let rand3 = Math.floor(Math.random() * 255) + 1;
        e.target.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
    }
    if(currentColor === 'white'){
        e.target.style.backgroundColor = 'white';
    }
    if(currentColor === 'custom'){
        e.target.style.backgroundColor = `${colorPicked}`;
    }
}

