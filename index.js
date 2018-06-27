const form = document.querySelector('form#flickForm')

const renderProperty = function(name, value) {
  const span = document.createElement('span')
  span.classList.add(name)
  span.textContent = value
  return span
}


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



form.addEventListener('submit', submitHandler)