const form = document.querySelector('form#flickForm')

//get span
const renderProperty = function(name, value) {
  const span = document.createElement('span')
  span.classList.add(name)
  span.textContent = value
  return span
}

const renderItem = function(flick) {
  const item = document.createElement('li')
  item.classList.add('flick')

  //list of properties
  const properties = Object.keys(flick)
  
  properties.forEach(function(propertyName) {
    const span = renderProperty(propertyName, flick[propertyName])
    item.appendChild(span)
  })

  return item
}

//function to handle submission
const submitHandler = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flick = {
    name: f.flickName.value,
    chris: f.whichChris.value,
  }
  
  const item = renderItem(flick)

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', submitHandler)