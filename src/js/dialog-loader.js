let $modal
let $loader
let $generatedLink
let $loadingStatus
let $modalHeader

const dialogClass = 'js-dialog-loader'

const template = `
<div class="modal ${dialogClass}">
  <div class="modal-background"></div>
    <div class="modal-content box has-text-centered">
      <div class="js-loader">
        <progress class="progress is-small is-primary" max="100">loading</progress>
      </div>
      <p class="js-loading-status"></p>
      <div class="has-text-centered js-generated-link is-hidden">
        <br>
        <a class="button is-primary">
          <svg class="icon" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 26 L16 30 21 26 M16 16 L16 30" />
          </svg>
          <span class="align-middle">Download</span>
        </a>
      </div>
    </div>
    <button class="modal-close is-large modal-close-button is-hidden" aria-label="close"></button>
  </div>`

const createModal = () => {
  var modal = document.createElement('div')
  modal.innerHTML = template
  document.body.appendChild(modal)
  $modal = document.querySelector(`.${dialogClass}`)
  $loader = document.querySelector('.js-loader')
  $generatedLink = document.querySelector('.js-generated-link')
  $loadingStatus = document.querySelector('.js-loading-status')
  $modalHeader = $modal.querySelector('.modal-close-button')

  $modalHeader.addEventListener('click', () => {
    hideModal()
  })
}
const hideModalEsc = (e) => {
  var code = e.keyCode || e.which
  if (code === 27) {
    hideModal()
  }
}
const showModal = (callback) => {
  $loadingStatus.innerHTML = 'building your custom bulma stylesheet.'
  $modal.classList.add('is-active')
  callback()
}

const updateLink = (fileName, link) => {
  document.addEventListener('keydown', (e) => {
    hideModalEsc(e)
  })
  $generatedLink.querySelector('a.button').setAttribute('href', link)
  $generatedLink.querySelector('a.button').setAttribute('download', fileName)
  $generatedLink.classList.remove('is-hidden')
  $modalHeader.classList.remove('is-hidden')
  $loader.classList.add('is-hidden')
  $loadingStatus.innerHTML = 'Download <strong>' + fileName + '</strong>'
}

const hideModal = () => {
  document.removeEventListener('keydown', (e) => {
    hideModalEsc(e)
  })
  $modal.classList.remove('is-active')
  URL.revokeObjectURL($generatedLink.getAttribute('href'))
  $generatedLink.setAttribute('href', '')
  $generatedLink.setAttribute('download', '')
  $generatedLink.classList.add('is-hidden')
  $modalHeader.classList.add('is-hidden')
  $loader.classList.remove('is-hidden')
  $loadingStatus.classList.remove('is-hidden')
}

export {
  createModal,
  showModal,
  hideModal,
  updateLink
}
