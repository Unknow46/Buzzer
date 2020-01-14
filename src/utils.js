const logger = require('debug');
export const error = logger('server:error');
export const debug = logger('server:log');
export const log = {d: debug, e: error };
// eslint-disable-next-line no-console
debug.log = console.log.bind(console);