let chooseToImportPopper = true

const initToggler = () => {
  const jsGroupList = [].slice.call(document.querySelectorAll('.group'))

  jsGroupList.forEach(group => {
    const checkboxes = [].slice.call(group.querySelectorAll('input[type="checkbox"]'))

    group.querySelector('.toggle-all-button')
      .addEventListener('click', () => {
        const checkedList = checkboxes.filter(chkBox => chkBox.checked)

        if (checkedList.length > 0) {
          // Uncheck all checked checkboxes
          checkedList.forEach(chkBox => { chkBox.checked = false })
        } else {
          // Check all checkboxes
          checkboxes.forEach(chkBox => { chkBox.checked = true })
        }
      })
  })

  return {
    chkMinify: document.getElementById('chkMinify')
  }
}

export {
  initToggler
}
