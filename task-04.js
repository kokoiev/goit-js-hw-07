let counterValue = 0

const btnPlus = document.querySelector('button[data-action="increment"]')
const btnMinus = document.querySelector('button[data-action="decrement"]')
const counterValueRef = document.querySelector('#value')

btnPlus.addEventListener('click', increment)
btnMinus.addEventListener('click', decrement)

function increment() {counterValue  += 1
    counterValueRef.textContent = counterValue };
function decrement() {counterValue  -= 1
    counterValueRef.textContent = counterValue };