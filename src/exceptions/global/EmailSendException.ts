/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-13, 11:18:12
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-13, 11:18:53
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of EmailSendException.
 * 
 * @class EmailSendException
 * @extends {Error}
 */
class EmailSendException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof EmailSendException
   */
  private static error: string = 'Error to send email.';

  /**
   * Creates an instance of EmailSendException.
   * 
   * @memberof EmailSendException
   */
  constructor() {
    super(EmailSendException.error);
  }
}

export default EmailSendException;