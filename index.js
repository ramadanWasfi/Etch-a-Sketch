function createBoard(size) {
    const container = document.querySelector('.board');

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.classList.add('cell');
            div.style.backgroundColor = '#A5C9CA';
            container.appendChild(div);
        }
    }
}

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function changeColor(e) {
    if ((e.type === 'mouseover' && mouseDown) || e.type === 'click') {
        let color = document.querySelector('#colorpicker').value;
        e.target.style.backgroundColor = color;
        if (modeSelected === 'erase') {
            e.target.style.backgroundColor = '#A5C9CA';
        } else if (modeSelected === 'color') {
            let color = document.querySelector('#colorpicker').value;
            e.target.style.backgroundColor = color;
        } else if (modeSelected === 'rainbow') {
            let color = generateRandomColor();
            e.target.style.backgroundColor = color;
        }
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

let modeSelected = '';
function watchControls() {
    const controls = document.querySelectorAll('.btn');
    controls.forEach(btn => {
        btn.addEventListener('click', function (e) {
            if (e.target.parentNode.classList[0] === 'controls') {
                if (e.target.innerText !== 'Clear') {
                    resetControlsBackgroundColor();
                    e.target.style.backgroundColor = "#A5C9CA";
                    e.target.style.color = "#2C3333";
                    if (e.target.classList.contains('color')) {
                        modeSelected = 'color';
                    } else if (e.target.classList.contains('rainbow')) {
                        modeSelected = 'rainbow';
                    } else if (e.target.classList.contains('erase')) {
                        modeSelected = 'erase';
                    }
                } else {
                    clearBoard();
                }
            } else if (e.target.parentNode.classList[0] === 'boardSize') {
                resetBoardSizeBackgroundColor();
                e.target.style.backgroundColor = "#A5C9CA";
                e.target.style.color = "#2C3333";
                let newSize = Number(e.target.innerText);
                console.log(newSize);
                changeBoardSize(newSize);
            }

        })
    })
}

function resetControlsBackgroundColor() {
    const controls = document.querySelectorAll('.btn');
    controls.forEach(btn => {
        if (btn.parentNode.classList[0] === 'controls') {
            btn.style.backgroundColor = '#395B64';
            btn.style.color = '#E7F6F2';
        }
    })
}

function resetBoardSizeBackgroundColor() {
    const controls = document.querySelectorAll('.btn');
    controls.forEach(btn => {
        if (btn.parentNode.classList[0] === 'boardSize') {
            btn.style.backgroundColor = '#395B64';
            btn.style.color = '#E7F6F2';
        }
    })
}

function clearBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#A5C9CA';
    });
}

function removeBoard() {
    const container = document.querySelector('.board');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function changeBoardSize(newSize) {
    removeBoard();
    createBoard(newSize);
    const board = document.querySelector('.board');
    board.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    addHoverEffect();
}

function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;

}

createBoard(16);
addHoverEffect();
watchControls();