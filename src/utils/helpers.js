export const isUrlValid = str => {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}