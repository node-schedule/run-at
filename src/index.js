
/**
 * Module Dependencies
 */

import date from 'date.js'

/**
 * Expose and Initialize `at`
 *
 * @param {String} str
 * @param {Function} fn
 * @api public
 */

export default function(str, fn) {
  const offset = date(str) - new Date
  if (!offset) throw `did not recognize '${str}'`
  setTimeout(fn, offset)
}
