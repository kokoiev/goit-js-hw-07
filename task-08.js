console.log(`hello`)

const createRef = document.querySelector('button[data-action = "render"]')
const destroyRef = document.querySelector('button[data-action = "destroy"]')
const inputNumberRef = document.querySelector('input')
const containerForBoxes = document.querySelector('#boxes')


destroyRef.addEventListener('click', () => { containerForBoxes.innerHTML = '' } )
createRef.addEventListener('click', event => { createBoxes((inputNumberRef.value)) })

function createBoxes(amount) { 
    if (containerForBoxes.childElementCount < amount) {
        createBox();
        createBoxes(amount)
       
    }
    return
    

}
function createBox() {
    const newDiv = document.createElement('div')
    const boxSize = containerForBoxes.childElementCount * 10 + 30
    newDiv.style.height = `${boxSize}px`;
    newDiv.style.width = `${boxSize}px`;

    newDiv.style.backgroundColor = getRandomColor()
    containerForBoxes.appendChild(newDiv)
}
function getRandomColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

