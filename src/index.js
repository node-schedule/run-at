
/**
 * Module Dependencies
 */

import date from 'date.js'

/**
 * Expose and Initialize `at`
 *
 * @param {string|Date} when
 * @param {Function} fn
 * @api public
 */

export default function(when, fn) {
  const triggerDate = typeof when === 'string' ? date(when) : when
  const offset = triggerDate - new Date

  if (!offset) throw `did not recognize '${when}'`
  return setTimeout(fn, offset)
}
