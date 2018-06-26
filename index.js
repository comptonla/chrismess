const button = document.querySelector('button')

const updateText = function() {
    const pillow = document.querySelector('#topHeading')
    pillow.textContent = 'Scott\'s Tots'
}

button.onclick = updateText