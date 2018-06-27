const form = document.querySelector('form#flickForm')

const flickForm = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value
  const item = document.createElement('li')
  item.textContent = flickName 
  
  const list = document.querySelector('#flicks')
  list.appendChild(item)

  f.reset()
}


const chrisForm = function(event) {
  event.preventDefault()

  const whichChris = tar.whichChris.value
  const chris = document.createElement('li')
  chris.textContent = whichChris

  const list = document.querySelector('#flicks')
  list.appendChild(chris)

  tar.reset()
}

form.addEventListener('submit', flickForm)