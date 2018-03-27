/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 13:46:31
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 14:08:00
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of StringTypeException.
 * 
 * @class StringTypeException
 * @extends {Error}
 */
class StringTypeException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof StringTypeException
   */
  private static error: string = 'The variable is not of the string type: %s';

  /**
   * Creates an instance of StringTypeException.
   * 
   * @memberof StringTypeException
   */
  constructor(name: string = '') {
    super(StringTypeException.error.replace('%s', name));
  }
}

export default StringTypeException;