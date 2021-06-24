let container = document.querySelector('#container');

let rows = 8;
let columns = 8;

function makeGrid(rows, columns){
    
    let size = rows*columns;
    //pass variable to CSS
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);

    for (let i = 0; i < size; i++){
        let c = document.createElement('div');
        c.classList.add('box');
        c.setAttribute('id', i);
        c.style.height = 650/columns+"px"
        c.style.width = 650/rows+"px";
        container.appendChild(c);
    }
}

makeGrid(rows, columns);

let boxes = document.querySelectorAll('.box');

//draw
boxes.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'green';
    });
});

//reset drawing
let reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    let ask = confirm("This will earse your drawing. Are you sure?")

    if (ask){
    boxes.forEach((div) =>{
        div.style.backgroundColor = 'white';
    })
}
})

//new grid
let newGrid = document.querySelector('#new-grid');
newGrid.addEventListener('click', () =>{
    let ask = prompt('How many squares do you want?');
    rows = Math.round(Math.sqrt(ask));
    columns = Math.round(Math.sqrt(ask));
    container.innerHTML = '';
    makeGrid(rows, columns);
})

