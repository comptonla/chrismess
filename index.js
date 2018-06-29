class App {
  constructor() {
    this.list = document.querySelector('#flicks')
    this.flicks = []
    this.load()

    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
  }

  save() {
    localStorage.setItem('flicks', JSON.stringify(this.flicks))
  }

  load() {
    const flicks = JSON.parse(localStorage.getItem('flicks'))
    if (flicks) {
      flicks.forEach(flick => this.addFlick(flick))
    }
  }

  renderProperty(name, value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
  }

  renderActionButtons(flick, item) {
    const actions = document.createElement('div')
    actions.classList.add('actions')

    const delButton = document.createElement('button')
    delButton.classList.add('remove')
    delButton.innerHTML = '<i class="far fa-trash-alt" title="Remove Flick"></i>'
    delButton.addEventListener('click', () => this.removeFlick(flick, item))
    actions.appendChild(delButton)

    const favButton = document.createElement('button')
    favButton.classList.add('fav')
    favButton.innerHTML = `<i class="fas fa-star"></i>`
    favButton.addEventListener('click',() => this.toggleFavorite(flick, item))
    actions.appendChild(favButton)

    return actions
  }

  renderProperties(flick, item) {
    const div = document.createElement('div')
    div.classList.add('info')

    const properties = Object.keys(flick)

    properties.forEach((propertyName) => {
      const span = this.renderProperty(propertyName, flick[propertyName])
      div.appendChild(span)
    })
    return div
  }

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    const properties = this.renderProperties(flick, item)
    item.appendChild(properties)

    const actions = this.renderActionButtons(flick, item)
    item.appendChild(actions)

    return item
  }

  toggleFavorite(flick, item) {
    flick.favorite = item.classList.toggle('fav')
    this.save()
  }

  removeFlick(flick, item) {
    this.list.removeChild(item)

    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)

    this.save()
  }

  addFlick(flick) {
    this.flicks.push(flick)

    const item = this.renderItem(flick)
    if (flick.favorite) {
      item.classList.add('fav')
    }
    this.list.appendChild(item)
  }

  handleSubmit(ev) {
    const f = ev.target

    const flick = {
      name: f.flickName.value,
      year: f.flickYear.value,
      favorite: false,
    }
    
    this.addFlick(flick)
    this.save()

    f.reset()
    f.flickName.focus()
  }
}

const app = new App()
