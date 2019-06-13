const concatFileData = (files) => {
  let content = ''

  files.forEach(file => {
    content += file.data
  })

  return content
}

const createCssFileContent = scssFiles => {
  return concatFileData(scssFiles)
}

const generateLink = fileContent => {
  const downloadUrl = URL.createObjectURL(fileContent, {
    type: 'application/zip'
  })
  return downloadUrl
}

export {
  createCssFileContent,
  generateLink
}
