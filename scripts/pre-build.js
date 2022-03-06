const axios = require('axios')
const fs = require('fs').promises

const fetchFiles = async () => {
  const res = await axios.get('https://raw.githubusercontent.com/tsa-dom/contents/main/config/files.json')
  await fs.writeFile('config/variables.js', `
const files = ${JSON.stringify(res.data)}

module.exports = {
  files
}
  `)
}

fetchFiles()