const {
	clearLine,
	clearScreenDown,
	cursorTo,
} = require('readline');

const { stdout } = process;

/**
 * Update current STDOUT line
 * @param  {String} message
 * no return value
 */
exports.update = function update(message) {
	clearLine(stdout, 0); // Clear current STDOUT line
	cursorTo(stdout, 0); // Place cursor at the start
	stdout.write(message.toString());
}

/**
 * Update current STDOUT line and move to next one
 * @param  {String} message
 * no return value
 */
exports.end = function end(message = '') {
	exports.update([ message.toString(), '\n' ].join(''));
}

/**
 * Clear current STDOUT stream
 * no return value
 */
exports.clear = function clear() {
	cursorTo(stdout, 0, 0);
}

/**
 * Clear current STDOUT stream and clear screen down
 * no return value
 */
exports.wipe = function clear() {
	cursorTo(stdout, 0, 0);
	clearScreenDown(stdout);
}
