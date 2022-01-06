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