document.addEventListener('DOMContentLoaded', () => {
  const filterContainer = document.getElementById('filterContainer')
  const posterContainer = document.getElementById('posterContainer')

  const sortSelect = createSelect('sort', [
    { value: 'AaZ', text: 'A a Z' },
    { value: 'ZaA', text: 'Z a A' },
    { value: 'Cualquiera', text: 'Cualquiera' }
  ])

  const PrecioSelect = createSelect('Precio', [
    { value: 'all', text: 'Todos' },
    { value: '59', text: '59' },
    { value: '79', text: '79' },
    { value: '149', text: '149' },
    { value: '499', text: '499' }
  ])

  const FormatoSelect = createSelect('Formato', [
    { value: 'all', text: 'Todos' },
    { value: 'HD', text: 'HD' },
    { value: 'QLED ', text: 'QLED ' },
    { value: 'AMOLED', text: 'AMOLED' }
  ])

  const Colorelect = createSelect('Color', [
    { value: 'all', text: 'Todos' },
    { value: 'Negro', text: 'Negro' },
    { value: 'Blanco', text: 'Blanco' },
    { value: 'Azul', text: 'Azul' },
    { value: 'Rosa', text: 'Rosa' }
  ])

  filterContainer.appendChild(createLabel('Ordenar:', 'nombre'))
  filterContainer.appendChild(sortSelect)
  filterContainer.appendChild(createLabel('Precio:', 'Precio'))
  filterContainer.appendChild(PrecioSelect)
  filterContainer.appendChild(createLabel('Formato:', 'Formato'))
  filterContainer.appendChild(FormatoSelect)
  filterContainer.appendChild(createLabel('Color:', 'Color'))
  filterContainer.appendChild(Colorelect)

  const resetButton = document.createElement('button')
  resetButton.id = 'btnReset'
  resetButton.textContent = 'Limpiar Filtros'
  filterContainer.appendChild(resetButton)

  const posters = [
    {
      nombre: 'Tablet Negra',
      Precio: 149,
      Formato: 'QLED ',
      Color: ['Negro'],
      imageUrl: './assets/tabletnegra.jpeg'
    },
    {
      nombre: 'Tablet Rosa',
      Precio: 149,
      Formato: 'QLED ',
      Color: ['Rosa'],
      imageUrl: './assets/tabletrosa.jpeg'
    },
    {
      nombre: 'Tv Blanca',
      Precio: 499,
      Formato: 'HD',
      Color: ['Blanco'],
      imageUrl: './assets/tvblanca.jpeg'
    },
    {
      nombre: 'Tv Negra',
      Precio: 499,
      Formato: 'HD',
      Color: ['Negro'],
      imageUrl: './assets/tvnegra.jpeg'
    },
    {
      nombre: 'PC Blanco',
      Precio: 499,
      Formato: 'QLED ',
      Color: ['Blanco'],
      imageUrl: './assets/pcblanco.jpeg'
    },
    {
      nombre: 'PC Negro',
      Precio: 499,
      Formato: 'QLED ',
      Color: ['Negro'],
      imageUrl: './assets/pcnegro.jpeg'
    },
    {
      nombre: 'PC Rosa',
      Precio: 499,
      Formato: 'QLED ',
      Color: ['Rosa'],
      imageUrl: './assets/pcrosa.jpeg'
    },
    {
      nombre: 'MP3 Digital',
      Precio: 59,
      Formato: 'AMOLED',
      Color: ['Azul'],
      imageUrl: './assets/mp3.jpeg'
    },
    {
      nombre: 'Despertador Digital',
      Precio: 79,
      Formato: 'AMOLED',
      Color: ['Negro', 'Blanco'],
      imageUrl: './assets/despertadornegroblanco.jpeg'
    },
    {
      nombre: 'Ebook Blanco',
      Precio: 79,
      Formato: 'HD',
      Color: ['Blanco'],
      imageUrl: './assets/ebookblanco.jpeg'
    },
    {
      nombre: 'Ebook Negro',
      Precio: 79,
      Formato: 'HD',
      Color: ['Negro'],
      imageUrl: './assets/ebooknegro.jpeg'
    },
    {
      nombre: 'Ebook Rosa',
      Precio: 79,
      Formato: 'HD',
      Color: ['Rosa'],
      imageUrl: './assets/ebookrosa.jpeg'
    },
    {
      nombre: 'Marco Digital Negro',
      Precio: 59,
      Formato: 'QLED ',
      Color: ['Negro'],
      imageUrl: './assets/marcodigitalnegro.jpeg'
    },
    {
      nombre: 'Marco Digital Azul',
      Precio: 59,
      Formato: 'QLED ',
      Color: ['Azul'],
      imageUrl: './assets/marcodigitalazul.jpeg'
    },
    {
      nombre: 'Reloj Negro',
      Precio: 149,
      Formato: 'AMOLED',
      Color: ['Negro'],
      imageUrl: './assets/relojnegro.jpeg'
    },
    {
      nombre: 'Reloj Azul',
      Precio: 149,
      Formato: 'AMOLED',
      Color: ['Azul'],
      imageUrl: './assets/relojazul.jpeg'
    },
    {
      nombre: 'Notebook',
      Precio: 149,
      Formato: 'QLED ',
      Color: ['Negro'],
      imageUrl: './assets/notebook.jpeg'
    },
    {
      nombre: 'Móvil Negro',
      Precio: 499,
      Formato: 'HD',
      Color: ['Negro'],
      imageUrl: './assets/movilnegro.jpeg'
    },
    {
      nombre: 'Móvil Azul',
      Precio: 499,
      Formato: 'HD',
      Color: ['Azul'],
      imageUrl: './assets/movilazul.jpeg'
    },
    {
      nombre: 'Móvil Rosa',
      Precio: 499,
      Formato: 'HD',
      Color: ['Rosa'],
      imageUrl: './assets/movilrosa.jpeg'
    },
    {
      nombre: 'Móvil Azul - Rosa',
      Precio: 499,
      Formato: 'HD',
      Color: ['Rosa', 'Azul'],
      imageUrl: './assets/movilazulrosa.jpeg'
    },
    {
      nombre: 'PSP Blanca',
      Precio: 149,
      Formato: 'HD',
      Color: ['Blanco'],
      imageUrl: './assets/pspblanca.jpeg'
    },
    {
      nombre: 'PSP Azul',
      Precio: 149,
      Formato: 'HD',
      Color: ['Azul'],
      imageUrl: './assets/pspazul.jpeg'
    },
    {
      nombre: 'PSP Azul - Rosa',
      Precio: 149,
      Formato: 'HD',
      Color: ['Azul', 'Rosa'],
      imageUrl: './assets/pspazulrosa.jpeg'
    }
  ]

  const displayPosters = (filteredPosters, suggested = false) => {
    posterContainer.innerHTML = ''

    if (suggested) {
      const message = document.createElement('p')
      message.textContent =
        '¡No tenemos imágenes que coincidan con sus filtros! Aquí dejamos algunas sugerencias:'
      posterContainer.appendChild(message)
    }

    const postersHtml = filteredPosters
      .map(
        (poster) => `
      <div class="poster">
        <img src="${poster.imageUrl}" alt="${poster.nombre}">
        <h2>${poster.nombre}</h2>
        <p>Precio: ${poster.Precio} €</p>
        <p>Formato: ${poster.Formato}</p>
        <p>Color: ${poster.Color.join(', ')}</p>
      </div>
    `
      )
      .join('')

    posterContainer.innerHTML += postersHtml
  }

  const filterPosters = () => {
    let filteredPosters = posters

    const selectedsort = sortSelect.value
    const selectedPrecio = PrecioSelect.value
    const selectedFormato = FormatoSelect.value
    const selectedColor = Colorelect.value

    if (selectedPrecio !== 'all') {
      filteredPosters = filteredPosters.filter(
        (poster) => poster.Precio === parseInt(selectedPrecio)
      )
    }

    if (selectedFormato !== 'all') {
      filteredPosters = filteredPosters.filter(
        (poster) => poster.Formato === selectedFormato
      )
    }

    if (selectedColor !== 'all') {
      filteredPosters = filteredPosters.filter((poster) =>
        poster.Color.map((Color) => Color.toLowerCase()).includes(
          selectedColor.toLowerCase()
        )
      )
    }

    switch (selectedsort) {
      case 'AaZ':
        filteredPosters.sort((a, b) => a.nombre.localeCompare(b.nombre))
        break
      case 'ZaA':
        filteredPosters.sort((a, b) => b.nombre.localeCompare(a.nombre))
        break
      case 'Cualquiera':
        filteredPosters.sort(() => Math.random() - 0.5)
        break
    }

    if (filteredPosters.length === 0) {
      const randomPosters = getRandomPosters(3)
      displayPosters(randomPosters, true)
    } else {
      displayPosters(filteredPosters)
    }
  }

  const getRandomPosters = (count) => {
    const shuffled = posters.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  sortSelect.addEventListener('change', filterPosters)
  PrecioSelect.addEventListener('change', filterPosters)
  FormatoSelect.addEventListener('change', filterPosters)
  Colorelect.addEventListener('change', filterPosters)

  resetButton.addEventListener('click', () => {
    sortSelect.value = 'AaZ'
    PrecioSelect.value = 'all'
    FormatoSelect.value = 'all'
    Colorelect.value = 'all'
    filterPosters()
  })

  filterPosters()
})

function createSelect(id, options) {
  const select = document.createElement('select')
  select.id = id

  options.forEach((option) => {
    const opt = document.createElement('option')
    opt.value = option.value
    opt.textContent = option.text
    select.appendChild(opt)
  })

  return select
}

function createLabel(text, forId) {
  const label = document.createElement('label')
  label.textContent = text
  label.setAttribute('for', forId)
  return label
}
