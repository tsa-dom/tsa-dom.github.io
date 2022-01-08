import { styles } from '../styles/styles'

export const isUrlValid = str => {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}

export const navScrollEvent = () => {
  window.onscroll = () => {
    const element = document.getElementById('sticky-col')
    if (element && window.pageYOffset > 50) {
      element.style.position = 'fixed'
      element.style.top = 0
      element.style.marginTop = '30px'
    } else if (element) {
      element.style.position = 'static'
      element.style.top = 'initial'
      element.style.marginTop = 0
    }
  }
}

export const getPublishedText = (created) => {
  const diffTime = Math.abs(new Date() - new Date(created))
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1)
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30) - 1)
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365) - 1)
  const publishText = diffDays === 0
    ? 'Published today'
    : diffDays < 30
      ? `Published ${diffDays} days ago`
      : diffMonths < 12
        ? `Published ${diffMonths} months ago`
        : `Published ${diffYears} years ago`
  return publishText
}

export const styleVar = (variable, style) => {
  document.documentElement.style.setProperty(variable, style)
}

export const updateStyles = (dark) => {
  if (dark) {
    styleVar('--scrollbar-color', 'rgb(208, 208, 208)')
    styleVar('--scrollbar-color-hover', 'rgb(136, 136, 136)')
    styleVar('--scrollbar-background', styles.dark.backgroundColor)
    styleVar('--separator-text-color', styles.dark.color)
    styleVar('--page-card-color', styles.dark.color)
    styleVar('--common-color-pair', styles.black)
    styleVar('--accordion-button-background', styles.dark.accordionButtonColor)
    styleVar('--accordion-button-color', styles.white)
    styleVar('--bootstrap-colors', styles.dark.bootstrap)
    styleVar('--common-color-pair2', styles.white)
  } else {
    styleVar('--scrollbar-color', 'rgb(136, 136, 136)')
    styleVar('--scrollbar-color-hover', 'rgb(208, 208, 208)')
    styleVar('--scrollbar-background', styles.light.backgroundColor)
    styleVar('--separator-text-color', styles.light.color)
    styleVar('--page-card-color', styles.light.color)
    styleVar('--common-color-pair', styles.white)
    styleVar('--accordion-button-background', styles.light.accordionButtonColor)
    styleVar('--accordion-button-color', styles.black)
    styleVar('--bootstrap-colors', styles.light.bootstrap)
    styleVar('--common-color-pair2', styles.black)
  }
}