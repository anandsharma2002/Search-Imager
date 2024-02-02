const accessKey = 'IvCh_a7BxvPEN618HFfNEYRzRFFHC8oQLE61kYhLaDk';

const formEl = document.querySelector('form')
const inputEl = document.getElementById('searchbar')
const searchResults = document.querySelector('.search-results')
const showMore = document.getElementById('show-more-button')

let inputData = ""
let page = 1;

async function searchImages() {
  inputData = inputEl.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

  const response = await fetch(url)
  const data = await response.json()

  const results = data.results


  if (page === 1) {
    searchResults.innerHTML = ''
  }


  results.map((result) => {
    const imageWrapper = document.createElement('div')
    imageWrapper.classList.add('search-result')
    imageWrapper.classList.add('col-3')
    const image = document.createElement('img')
    image.src = result.urls.small
    image.alt = result.alt_description
    const imagelink = document.createElement('a')
    imagelink.href = result.links.html
    imagelink.target = '_blank'
    imagelink.style.color = 'black'



    imagelink.appendChild(image)
    imageWrapper.appendChild(imagelink)
    searchResults.appendChild(imageWrapper)
  })

  page++
  if (page > 1) {
    showMore.style.display = 'block'
  }
}


formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  page = 1
  searchImages()
})
showMore.addEventListener('click', (e) => {
  searchImages()
})


let profiledopdown = document.getElementById('profiledopdown')
profiledopdown.style.display = 'none'

function profilediv() {
  if (profiledopdown.style.display == 'none') {
    profiledopdown.style.display = 'block'
  }
  else {
    profiledopdown.style.display = 'none'
  }
}


let body1 = document.getElementById('body')
body1.style.backgroundColor = 'black'

function mode() {
  if (body1.style.backgroundColor == 'black') {
    body1.style.backgroundColor = 'white'
  }
  else {
    body1.style.backgroundColor = 'black'
  }
}

