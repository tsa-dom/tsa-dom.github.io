const path = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
const { files } = require('./variables')

const rewrites = files.map(f => ({ from: f, to: `/${f}.html` }))

const htmlPlugins = [
  { filename: 'index.html', template: resolveApp('public/404.html') },
].concat(files.map(f => ({ filename: `${f}.html`, template: resolveApp(`public/${f}.html`) })))

module.exports = {
  rewrites,
  htmlPlugins
}