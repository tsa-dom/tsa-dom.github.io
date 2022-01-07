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