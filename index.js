const button = document.querySelector('button')

const updateText = function() {
    const pillow = document.querySelector('#breakfast')
    pillow.textContent = 'Waffles'
}

button.onclick = updateText