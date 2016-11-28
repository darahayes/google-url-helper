'use strict'

const tape = require('tape')
const helper = require('./../index')

tape('url-helper parseId', (test) => {
  test.plan(1)
  let expectedId = '1c2beJsK5g5ru9FGNMUQjlNqCRefFVnQurb1X1Gbkzt8'
  let url = 'https://docs.google.com/spreadsheets/d/1c2beJsK5g5ru9FGNMUQjlNqCRefFVnQurb1X1Gbkzt8'
  test.equal(helper.parseId(url), expectedId)
})

tape('url-helper urlFromFile', (test) => {
  test.plan(1)
  let expectedUrl = 'https://docs.google.com/spreadsheets/d/1c2beJsK5g5ru9FGNMUQjlNqCRefFVnQurb1X1Gbkzt8'

  let file = {
    id: '1c2beJsK5g5ru9FGNMUQjlNqCRefFVnQurb1X1Gbkzt8',
    mimeType: 'application/vnd.google-apps.spreadsheet'
  }

  test.equal(helper.urlFromFile(file), expectedUrl)
})

tape('url-helper urlFromFile no mime type returns id', (test) => {
  test.plan(1)

  let file = {
    id: '1c2beJsK5g5ru9FGNMUQjlNqCRefFVnQurb1X1Gbkzt8'
  }

  test.equal(helper.urlFromFile(file), file.id)
})
