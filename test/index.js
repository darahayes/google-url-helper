'use strict'

const tape = require('tape')
const helper = require('./../index')

tape('url-helper keyParse', (test) => {
  test.plan(1)
  let expectedId = '1c2beJsK5g5ru9FGNMUQjlNqCRefFVnQurb1X1Gbkzt8'
  let url = 'https://docs.google.com/spreadsheets/d/1c2beJsK5g5ru9FGNMUQjlNqCRefFVnQurb1X1Gbkzt8'
  test.equal(helper.keyParse(url), expectedId)
})

tape('url-helper buildUrl', (test) => {
  test.plan(1)
  let expectedUrl = 'https://docs.google.com/spreadsheets/d/1c2beJsK5g5ru9FGNMUQjlNqCRefFVnQurb1X1Gbkzt8'

  let file = {
    id: '1c2beJsK5g5ru9FGNMUQjlNqCRefFVnQurb1X1Gbkzt8',
    mimeType: 'application/vnd.google-apps.spreadsheet'
  }

  test.equal(helper.buildUrl(file), expectedUrl)
})

tape('url-helper buildUrl no mime type returns id', (test) => {
  test.plan(1)

  let file = {
    id: '1c2beJsK5g5ru9FGNMUQjlNqCRefFVnQurb1X1Gbkzt8'
  }

  test.equal(helper.buildUrl(file), file.id)
})
