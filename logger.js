export const LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

const DEFAULT_LOG_LEVEL = LEVELS.WARN;

const getLogLevel = () => {
  if (process.env.LOG_LEVEL) return LEVELS[process.env.LOG_LEVEL] || DEFAULT_LOG_LEVEL;
  if (typeof window !== 'undefined') return LEVELS[window.localStorage.getItem('LOG_LEVEL')] || DEFAULT_LOG_LEVEL;
};

const log = (level, method, message) => {
  if (getLogLevel() <= level) {
    console[method](...message);
  }
};

const logger = {
  debug: (...message) => log(LEVELS.DEBUG, 'log', message),
  info: (...message) => log(LEVELS.INFO, 'info', message),
  warning: (...message) => log(LEVELS.WARN, 'warn', message),
  error: (...message) => log(LEVELS.ERROR, 'error', message),
};

export default logger;