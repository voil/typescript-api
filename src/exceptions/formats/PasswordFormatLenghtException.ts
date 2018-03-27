/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-21, 13:40:54
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-21, 13:41:34
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of PasswordFormatLenghtException.
 * 
 * @class PasswordFormatLenghtException
 * @extends {Error}
 */
class PasswordFormatLenghtException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof PasswordFormatLenghtException
   */
  private static error: string = 'The password must have a minimum of 8 characters';

  /**
   * Creates an instance of PasswordFormatLenghtException.
   * 
   * @memberof PasswordFormatLenghtException
   */
  constructor() {
    super(PasswordFormatLenghtException.error);
  }
}

export default PasswordFormatLenghtException;