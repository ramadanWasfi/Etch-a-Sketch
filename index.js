function createGrid16() {
    const container = document.querySelector('.container');

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let div = document.createElement('div');
            div.classList.add('cell');
            container.appendChild(div);
        }
    }
}

createGrid16();

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function changeColor(e) {
    if ((e.type === 'mouseover' && mouseDown) || e.type === 'click') {
        e.target.style.backgroundColor = 'red';
    }
}

function addHoverEffect() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        cell.addEventListener('click', changeColor);
    })
}

addHoverEffect();