'use strict'

var urls = {
  spreadsheet: {
    match: /\/spreadsheets\/d\/([\w-.]+)/,
    base: 'https://docs.google.com/spreadsheets/d/'
  },
  document: {
    match: /\/document\/d\/([\w-.]+)/,
    base: 'https://docs.google.com/document/d/'
  },
  folder: {
    match: /\/folders\/([\w-.]+)/,
    base: 'https://drive.google.com/drive/folders/'
  },
  file: {
    match: /\/file\/d\/([\w-.]+)/,
    base: 'https://drive.google.com/file/d/'
  },
  presentation: {
    match: /\/presentation\/d\/([\w-.]+)/,
    base: 'https://docs.google.com/presentation/d/'
  },
  form: {
    match: /\/forms\/d\/([\w-.]+)/
  },
  general: {
    match: /\/d\/([\w-.]+)/
  }
}

function parseId (url) {
  let match = url.match(urls.general.match)
  return match ? match[1] : url
}

function parse (url) {
  let match = url.match(urls.spreadsheet.match)
  if (match) {
    return { id: match[1], type: 'spreadsheet' }
  }
  match = url.match(urls.folder.match)
  if (match) {
    return { id: match[1], type: 'folder' }
  }
  match = url.match(urls.document.match)
  if (match) {
    return { id: match[1], type: 'document' }
  }
  match = url.match(urls.file.match)
  if (match) {
    return { id: match[1], type: 'file' }
  }
  match = url.match(urls.form.match)
  if (match) {
    return { id: match[1], type: 'form' }
  }
  match = url.match(urls.presentation.match)
  if (match) {
    return { id: match[1], type: 'presentation' }
  }
  match = url.match(urls.general.match)
  if (match) {
    return { id: match[1], type: 'unknown' }
  }
  return null
}

function url(id, type) {
  return urls[type]['base'] ? urls[type]['base'] + id : null
}

function urlFromFile (file) {
  // in case we deal with other file types
  let url = ''
  if (file.mimeType === 'application/vnd.google-apps.spreadsheet') {
    return url(file.id, 'spreadsheet')
  }
  return url + file.id
}

module.exports = {
  parseId: parseId,
  parse: parse,
  url: url,
  urlFromFile: urlFromFile
}
