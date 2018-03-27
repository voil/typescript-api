/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 15:33:30
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 15:34:32
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of EmailFormatException.
 * 
 * @class EmailFormatException
 * @extends {Error}
 */
class EmailFormatException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof EmailFormatException
   */
  private static error: string = 'The variable has incorrect email format';

  /**
   * Creates an instance of EmailFormatException.
   * 
   * @memberof EmailFormatException
   */
  constructor() {
    super(EmailFormatException.error);
  }
}

export default EmailFormatException;