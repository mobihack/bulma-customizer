import axios from 'axios'
import JSZip from 'jszip'
import Sass from 'sass.js/dist/sass'
import CleanCSS from './lib/clean-css'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import { bulmaVersion } from './config'
import { scssPlugins } from './plugins'
import { generateLink } from './file-util'
import { uniqArray } from './util'

const year = new Date().getFullYear()
const header = `/*!
 * Bulma v${bulmaVersion} custom (https://bulma.io/)
 * Built with https://mobihack.github.io/bulma-customize/
 * Copyright 2011-${year} The Bulma Authors
 * Licensed under MIT (https://github.com/jgthms/bulma/blob/master/LICENSE)
 */
`

const autoPrefixerConfig = {
  cascade: false
}

const configCleanCSS = {
  level: 1,
  format: {
    breakWith: 'lf'
  }
}
const configSass = {
  precision: 6,
  style: Sass.style.expanded
}

const buildScss = (files, minify) => {
  return new Promise((resolve, reject) => {
    axios.all(files)
      .then(scssFiles => {
        const sass = new Sass()
        sass.options(configSass)
        const resultFileOrder = []
        scssFiles.forEach(result => {
          const splittedString = result.config.url.split('/')
          const fileName = splittedString[splittedString.length - 1]
          resultFileOrder.push(fileName)
          sass.writeFile(fileName, result.data)
        })
        const result = resultFileOrder
          .map(file => {
            if (file.charAt(0) === '_') {
              file = file.substr(1)
            }
            const splitFile = file.split('.scss')
            return `@import "${splitFile[0]}";`
          })
        sass.compile(result.join(' '), result => {
          if (result.status === 0) {
            let cssContent = result.text
            postcss([
              autoprefixer(autoPrefixerConfig)
            ])
              .process(cssContent, { from: undefined })
              .then(compiled => {
                cssContent = compiled.css
                if (minify) {
                  cssContent = new CleanCSS(configCleanCSS).minify(cssContent).styles
                }
                resolve(cssContent)
              })
          } else {
            reject(result.message)
          }
        })
      })
  })
}

const build = (pluginList, minify) => {
  const fileName = `bulma.custom${minify ? '.min' : ''}`
  const zip = new JSZip()
  let listScssRequest = []

  pluginList.forEach(plugin => {
    listScssRequest = listScssRequest.concat(scssPlugins[plugin])
  })

  if (listScssRequest.length > 0) {
    // Add some files by default
    // listScssRequest = listScssRequest.concat(scssPlugins.Reboot)
    listScssRequest = uniqArray(listScssRequest).map(url => axios.get(url))
  }

  return new Promise(resolve => {
    buildScss(listScssRequest, minify)
      .then(cssContent => {
        if (cssContent.length > 0) {
          zip.file(`${fileName}.css`, `${header}${cssContent}`)
        }
        zip.generateAsync({ type: 'blob' })
          .then(content => {
            resolve(generateLink(content))
          })
      })
  })
}

export {
  build
}
