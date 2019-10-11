module.exports.function = function lune (name, lune) {
  var db = require('../lib/db.js')

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")

  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    lunes: lune,
    version: version,
  }
}