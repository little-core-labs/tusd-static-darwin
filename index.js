const path = require('path')

/**
 * The `tusd` command file name.
 * @private
 */
const TUSD_COMMAND = 'tusd'

/**
 * Resolved based on the running process platform.
 * @default
 * @public
 */
const TUSD_PATH = path.resolve( __dirname, 'bin', process.arch, TUSD_COMMAND)

/**
 * Module exports.
 */
module.exports = {
  TUSD_COMMAND,
  TUSD_PATH,

  path: TUSD_PATH
}
