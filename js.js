let container = document.querySelector('#container');

//create 16x16 grid
for (let i = 0; i < 64; i++){
    let b = document.createElement('div');
    b.classList.add(i);
    b.setAttribute('id','grid-divs')
    container.appendChild(b);
}
