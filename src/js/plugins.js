import { bsScssCDN } from './config'

const scssPlugins = {
  /** base */
  minireset: [
    `${bsScssCDN}base/minireset.sass`
  ],
  generic: [
    `${bsScssCDN}base/generic.sass`
  ],
  helpers: [
    `${bsScssCDN}base/helpers.sass`
  ],
  /** Components */
  breadcrumb: [
    `${bsScssCDN}components/breadcrumb.sass`
  ],
  card: [
    `${bsScssCDN}components/card.sass`
  ],
  dropdown: [
    `${bsScssCDN}components/dropdown.sass`
  ],
  level: [
    `${bsScssCDN}components/level.sass`
  ],
  list: [
    `${bsScssCDN}components/list.sass`
  ],
  media: [
    `${bsScssCDN}components/media.sass`
  ],
  menu: [
    `${bsScssCDN}components/menu.sass`
  ],
  message: [
    `${bsScssCDN}components/message.sass`
  ],
  modal: [
    `${bsScssCDN}components/modal.sass`
  ],
  navbar: [
    `${bsScssCDN}components/navbar.sass`
  ],
  pagination: [
    `${bsScssCDN}components/pagination.sass`
  ],
  panel: [
    `${bsScssCDN}components/panel.sass`
  ],
  tabs: [
    `${bsScssCDN}components/tabs.sass`
  ],

  /** elements */
  box: [
    `${bsScssCDN}elements/box.sass`
  ],
  button: [
    `${bsScssCDN}elements/button.sass`
  ],
  container: [
    `${bsScssCDN}elements/container.sass`
  ],
  content: [
    `${bsScssCDN}elements/content.sass`
  ],
  icon: [
    `${bsScssCDN}elements/icon.sass`
  ],
  image: [
    `${bsScssCDN}elements/image.sass`
  ],
  notification: [
    `${bsScssCDN}elements/notification.sass`
  ],
  other: [
    `${bsScssCDN}elements/other.sass`
  ],
  progress: [
    `${bsScssCDN}elements/progress.sass`
  ],
  table: [
    `${bsScssCDN}elements/table.sass`
  ],
  tag: [
    `${bsScssCDN}elements/tag.sass`
  ],
  title: [
    `${bsScssCDN}elements/title.sass`
  ],

  /** form */
  checkbox_radio: [
    `${bsScssCDN}form/shared.sass`,
    `${bsScssCDN}form/tools.sass`,
    `${bsScssCDN}form/checkbox-radio.sass`
  ],
  file: [    
    `${bsScssCDN}form/shared.sass`,
    `${bsScssCDN}form/tools.sass`,
    `${bsScssCDN}form/file.sass`
  ],
  input_textarea: [
    `${bsScssCDN}form/shared.sass`,
    `${bsScssCDN}form/tools.sass`,
    `${bsScssCDN}form/input-textarea.sass`
  ],
  select: [
    `${bsScssCDN}form/shared.sass`,
    `${bsScssCDN}form/tools.sass`,
    `${bsScssCDN}form/select.sass`
  ],

  /** grid */
  tiles: [
    `${bsScssCDN}grid/tiles.sass`
  ],
  columns: [
    `${bsScssCDN}grid/columns.sass`
  ],

  /** layout */
  footer: [
    `${bsScssCDN}layout/footer.sass`
  ],
  hero: [
    `${bsScssCDN}layout/hero.sass`
  ],
  section: [
    `${bsScssCDN}layout/section.sass`
  ],

  /** utilities */
  initial_variables: [
    `${bsScssCDN}utilities/initial-variables.sass`
  ],
  functions: [
    `${bsScssCDN}utilities/functions.sass`
  ],
  derived_variables: [
    `${bsScssCDN}utilities/derived-variables.sass`
  ],
  animations: [
    `${bsScssCDN}utilities/animations.sass`
  ],
  mixins: [
    `${bsScssCDN}utilities/mixins.sass`
  ],
  controls: [
    `${bsScssCDN}utilities/controls.sass`
  ]
}

export {
  scssPlugins
}
