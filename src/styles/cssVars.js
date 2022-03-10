import { styles } from './styles'

export const css = {
  '--scrollbar-color': {
    dark: 'rgb(208, 208, 208)',
    light: 'rgb(136, 136, 136)'
  },
  '--scrollbar-color-hover': {
    dark: 'rgb(136, 136, 136)',
    light: 'rgb(208, 208, 208)'
  },
  '--scrollbar-background': {
    dark: styles.dark.backgroundColor,
    light: styles.light.backgroundColor
  },
  '--separator-text-color': {
    dark: styles.dark.color,
    light: styles.light.color
  },
  '--page-card-color': {
    dark: styles.dark.color,
    light: styles.light.color
  },
  '--common-color-pair': {
    dark: styles.black,
    light: styles.white
  },
  '--accordion-button-background': {
    dark: styles.dark.accordionButtonColor,
    light: styles.light.accordionButtonColor
  },
  '--accordion-button-color': {
    dark: styles.white,
    light: styles.black
  },
  '--bootstrap-colors': {
    dark: styles.dark.bootstrap,
    light: styles.light.bootstrap
  },
  '--common-color-pair2': {
    dark: styles.white,
    light: styles.black
  },
  '--accordion-button-after-url': {
    dark: styles.dark.accordionAfterUrl,
    light: styles.light.accordionAfterUrl
  }
}