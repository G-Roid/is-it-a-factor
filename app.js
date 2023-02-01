
//Global variables
const checkButton = document.querySelector('#check-btn')
let displayArea = document.querySelector('#result-display')

//Event Listener
checkButton.addEventListener('click', isItPrime)

function isItPrime() {
    let inputNumber = document.querySelector('#user-number').value
    let inputFactor = document.querySelector('#user-factor').value
    //console.log(inputNumber % inputFactor)

    if (inputNumber % inputFactor == 0) {
        displayArea.textContent = inputFactor + " is a factor of " + inputNumber
    } else {
        // displayArea.textContent = inputFactor + " is NOT a factor of " + inputNumber
        displayArea.textContent = `${inputFactor} is NOT a factor of ${inputNumber}`
    }
}

