const form = document.querySelector('form#flickForm')

const submitHandler = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value
  const flickSpan  = document.createElement('span')
  flickSpan.classList.add('movieName')
  flickSpan.textContent = flickName

  const whichChris = f.whichChris.value
  const chrisSpan = document.createElement('span')
  chrisSpan.classList.add('chris')
  chrisSpan.textContent = whichChris

  const item = document.createElement('li')
  item.classList.add('flick')
  item.appendChild(flickSpan)
  item.appendChild(chrisSpan)
  
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

form.addEventListener('submit', submitHandler)