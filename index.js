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

function addHoverEffect() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            cell.classList.add('changeColor');
        })
    })
}

addHoverEffect();