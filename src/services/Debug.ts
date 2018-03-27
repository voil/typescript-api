/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 09:40:59
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 09:41:08
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading dependencies.
// =============================================================================
import { terminal } from 'terminal-kit'; 

/**
 * Helper for debug terminal logs.
 * 
 * @class Debug
 */
class Debug {
  
  /**
   * Show error message.
   * 
   * @static
   * @param {string} [message=''] 
   * @param {any} args 
   * @memberof Debug
   */
  public static showError = (message: string = '', ...args): void =>
    process.env.DEBUG && terminal.red(`${message}\n`, args)

  /**
   * Show info message.
   * 
   * @static
   * @param {string} [message=''] 
   * @param {any} args 
   * @memberof Debug
   */
  public static showInfo = (message, ...args): void =>  
    process.env.DEBUG && terminal.yellow(`${message}\n`, args);
}

// =============================================================================
// Export class Debug.
// =============================================================================
export default Debug;