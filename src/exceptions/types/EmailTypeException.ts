/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 14:40:45
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 14:41:07
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of EmailTypeException.
 * 
 * @class EmailTypeException
 * @extends {Error}
 */
class EmailTypeException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof EmailTypeException
   */
  private static error: string = 'The variable is not of email type';

  /**
   * Creates an instance of EmailTypeException.
   * 
   * @memberof EmailTypeException
   */
  constructor() {
    super(EmailTypeException.error);
  }
}

export default EmailTypeException;