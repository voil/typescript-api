/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-21, 13:41:40
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-21, 13:42:23
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of PasswordFormatNoContainNumberException.
 * 
 * @class PasswordFormatNoContainNumberException
 * @extends {Error}
 */
class PasswordFormatNoContainNumberException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof PasswordFormatNoContainNumberException
   */
  private static error: string = 'The password must have at least one number.';

  /**
   * Creates an instance of PasswordFormatNoContainNumberException.
   * 
   * @memberof PasswordFormatNoContainNumberException
   */
  constructor() {
    super(PasswordFormatNoContainNumberException.error);
  }
}

export default PasswordFormatNoContainNumberException;