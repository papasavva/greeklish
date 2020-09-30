'use strict'

const greeklishToGreekMapping = require('./mappings/greeklish-to-greek.json')
const greekToGreeklishMapping = require('./mappings/greek-to-greeklish.json')

/**
 * Throw an error if value is not a string or its length is zero
 * @param value
 * @throws {Error}
 */
function validateConversionText (value) {
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error('Value must be a string with at least one character.')
  }
}

/**
 * Convert the text based on the mapping.
 * @param {string} text
 * @param {Object} mapping
 * @returns {*}
 */
function convertText (text, mapping) {
  validateConversionText(text)

  for (const [find, replace] of Object.entries(mapping)) {
    text = text.replace(new RegExp(find, 'g'), replace)
  }

  return text
}

/**
 * Converts Greeklish to Greek
 * @param {string} text
 * @returns {*}
 */
function toGreek (text) {
  return convertText(text, greeklishToGreekMapping)
}

/**
 * Converts Greek to Greeklish
 * @param {string} text
 * @returns {*}
 */
function toGreeklish (text) {
  return convertText(text, greekToGreeklishMapping)
}

module.exports = {
  toGreek,
  toGreeklish
}
