'use strict'

var schemas = {
  spreadsheet: /\/spreadsheets\/d\/([\w-.]+)/,
  document: /\/document\/d\/([\w-.]+)/,
  folder: /\/folders\/([\w-.]+)/,
  file: /\/file\/d\/([\w-.]+)/,
  form: /\/forms\/d\/([\w-.]+)/,
  presentation: /\/presentation\/d\/([\w-.]+)/,
  general: /\/d\/([\w-.]+)/
}

function keyParse (url) {
  let match = url.match(schemas.general)
  return match ? match[1] : url
}

function parse (url) {
  let match = url.match(schemas.spreadsheet)
  if (match) {
    return { key: match[1], type: 'spreadsheet' }
  }
  match = url.match(schemas.folder)
  if (match) {
    return { key: match[1], type: 'folder' }
  }
  match = url.match(schemas.document)
  if (match) {
    return { key: match[1], type: 'document' }
  }
  match = url.match(schemas.file)
  if (match) {
    return { key: match[1], type: 'file' }
  }
  match = url.match(schemas.form)
  if (match) {
    return { key: match[1], type: 'form' }
  }
  match = url.match(schemas.presentation)
  if (match) {
    return { key: match[1], type: 'presentation' }
  }
  match = url.match(schemas.general)
  if (match) {
    return { key: match[1], type: 'unknown' }
  }
  return null
}

function buildUrl (file) {
  // in case we deal with other file types
  let url = ''
  if (file.mimeType === 'application/vnd.google-apps.spreadsheet') {
    return buildSheetsURLForDocumentId(file.id)
  }
  return url + file.id
}

function buildSheetsURLForDocumentId (documentId) {
  return `https://docs.google.com/spreadsheets/d/${documentId}`
}

module.exports = {
  keyParse: keyParse,
  parse: parse,
  buildUrl: buildUrl,
  buildSheetsURLForDocumentId: buildSheetsURLForDocumentId
}
