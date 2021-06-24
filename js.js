let container = document.querySelector('#container');

let rows = 16;
let columns = 16;

let size = rows*columns;

function makeGrid(rows, columns){
    
    //pass variable to CSS
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);

    for (let i = 0; i < size; i++){
        let c = document.createElement('div');
        c.classList.add('box');
        c.setAttribute('id', i);
        c.style.height = 800/columns+"px"
        c.style.width = 800/rows+"px";
        container.appendChild(c);
    }
}

makeGrid(rows, columns);

let boxes = document.querySelectorAll('.box');

boxes.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'green';
    });
});

let reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    boxes.forEach((div) =>{
        div.style.backgroundColor = 'white';
    })
})

