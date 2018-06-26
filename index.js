const button = document.querySelector('button')

const updateText = function() {
    const pillow = document.querySelector('#breakfast')
    pillow.textContent = 'Waffles'
}

button.onclick = updateText


const form = document.querySelector('#ageForm')

const changeHeader = function submitButton() {
    const blanket = document.querySelector('#ageHeading')
    blanket.textContent = document.querySelector('#userInput').value
    event.preventDefault()
}

form.addEventListener('submit', changeHeader)