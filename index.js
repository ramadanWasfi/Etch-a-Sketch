function CreateGrid16() {
    const container = document.querySelector('.container');

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let div = document.createElement('div');
            div.classList.add('cell');
            container.appendChild(div);
        }
    }
}