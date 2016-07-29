import {safeJSONStringify} from './utils/collections';
import Pusher from './pusher';

const Logger = {
  debug(...args : any[]) {
    if (!Pusher.log) {
      return
    }
    Pusher.log(safeJSONStringify.apply(this, arguments));
  },
  warn(...args : any[]) {
    var message = safeJSONStringify.apply(this, arguments);
    if (global.console) {
      if (global.console.warn) {
        global.console.warn(message);
      } else if (global.console.log) {
        global.console.log(message);
      }
    }
    if (Pusher.log) {
      Pusher.log(message);
    }
  }
}

export default Logger;
