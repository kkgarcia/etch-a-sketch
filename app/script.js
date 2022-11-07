const container = document.querySelector(".container");
const sizeButton = document.querySelector("#sizeBtn");
const input = document.querySelector('#input-size')
 
function createGrid(n) {
    removeChildNodes(container)
    if ( n > 100) {
        n = 100
    }
    for (let i = 0; i < n * n; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.width = `${500/n}px`
        box.style.height = `${500/n}px`
        container.appendChild(box)
    }
}

function removeChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

createGrid(7)

const boxes = document.querySelector('.container').childNodes;

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "#e76f51"
    })
})

sizeButton.addEventListener('click', () => {
    const inputSize = input.value
    createGrid(inputSize)
    const boxes = document.querySelector('.container').childNodes;
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "#e76f51"
        })
    })
})

input.addEventListener('change', () => {
    console.log(input.value)
})