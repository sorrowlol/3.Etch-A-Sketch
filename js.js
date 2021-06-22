let container = document.querySelector('#container');

//create 16x16 grid


for (let i = 0; i < 64; i++){
    let grid = document.createElement('div');
    grid.classList.add('box');                     //adding a class to each box
    grid.setAttribute('id', i);                    //adding same ID to all boxes
    container.appendChild(grid);                   //appending to container div   
}

const boxes = document.querySelectorAll('.box');
    
boxes.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'green';
    });
})