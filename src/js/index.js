import Sass from 'sass.js/dist/sass'

import { formatList, getSassWorkerPath, supportedBrowser } from './util'
import { createModal, showModal, updateLink } from './dialog-loader'
import { initToggler } from './toggler'
import { bulmaVersion } from './config'

import 'bulma/css/bulma.css'
import '../css/main.css'

window.onload = () => {
  if (!supportedBrowser()) {
    document.querySelector('.js-alert-browser').classList.remove('is-hidden')
    return
  }

  const { chkMinify } = initToggler()

  Sass.setWorkerUrl(getSassWorkerPath())

  createModal()

  const formEl = document.querySelector('.js-form-customize')

  formEl.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = serializeArray(formEl)

    /** add required fields by default */
    formData.unshift(
      { 'name': 'initial_variables', 'value': 'on' },
      { 'name': 'functions', 'value': 'on' },
      { 'name': 'derived_variables', 'value': 'on' },
      { 'name': 'animations', 'value': 'on' },
      { 'name': 'mixins', 'value': 'on' },
      { 'name': 'controls', 'value': 'on' }
    )

    showModal(() => {
      import(/* webpackChunkName: "build" */ './build')
        .then(({ build }) => {
          const fileName = `bulma.${bulmaVersion}.custom.zip`
          const pluginList = formatList(formData.map((value) => value.name))
          build(pluginList, chkMinify.checked)
            .then(url => {
              updateLink(fileName, url)
            })
        })
    })
  })
}

var serializeArray = function (form) {
  // Setup our serialized data
  var serialized = []
  // Loop through each field in the form
  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i]

    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') {
      continue
    }

    if (field.type === 'select-multiple') {
      // If a multi-select, get all selections
      for (var n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) {
          continue
        }

        serialized.push({
          name: field.name,
          value: field.options[n].value
        })
      }
    } else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      // Convert field data to a query string
      serialized.push({
        name: field.name,
        value: field.value
      })
    }
  }

  return serialized
}
