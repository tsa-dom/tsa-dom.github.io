import { css } from '../styles/cssVars'

export const textAndTypes = (text) => {
  const values = []

  text.split('<').map((p, i) => {
    if (i > 0) {
      const separator = p.split('/>')
      const embed = separator[0].split(' ')
      values.push({ type: embed[0], value: embed[1] })
      values.push({ type: 'md', value: separator[1] })
    } else values.push({ type: 'md', value: p })
  })

  return values
}

export const isValidUrl = str => {
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
      : diffMonths === 1
        ? 'Published month ago'
        : diffMonths < 12
          ? `Published ${diffMonths} months ago`
          : `Published ${diffYears} years ago`
  return publishText
}

export const styleVar = (variable, style) => {
  document.documentElement.style.setProperty(variable, style)
}

export const updateStyles = (dark) => {
  Object.entries(css).forEach(([key, value]) => {
    styleVar(key, value[dark ? 'dark' : 'light'])
  })
}

export const getMonthName = (date) => {
  switch (date.getMonth()) {
    case 0: return 'Jan'
    case 1: return 'Feb'
    case 2: return 'Mar'
    case 3: return 'Apr'
    case 4: return 'May'
    case 5: return 'Jun'
    case 6: return 'Jul'
    case 7: return 'Aug'
    case 8: return 'Sep'
    case 9: return 'Oct'
    case 10: return 'Nov'
    case 11: return 'Dec'
    default: return undefined
  }
}