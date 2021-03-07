'use strict'

var cheerio = require('cheerio')

const utils = module.exports = {}

// Create an unique id, length 8 characters
utils.makeId = function () {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < 8; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

utils.stripTags = function (str, tags) {
  var $ = cheerio.load(str)

  if (!tags || tags.length === 0) {
    return str
  }

  tags = !Array.isArray(tags) ? [tags] : tags
  var len = tags.length

  while (len--) {
    $(tags[len]).remove()
  }

  return $.html()
}
