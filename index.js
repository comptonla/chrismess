const form = document.querySelector('form#flickForm')

const flickForm = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value
  const item = document.createElement('li')
  item.textContent = flickName 

  const whichChris = f.whichChris.value
  const chris = document.createElement('li')
  chris.textContent = whichChris
  

  const list = document.querySelector('#flicks')
  list.appendChild(item)
  list.appendChild(chris)

  f.reset()
}

form.addEventListener('submit', flickForm)