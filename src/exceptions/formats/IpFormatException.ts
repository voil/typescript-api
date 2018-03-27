/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-15, 10:40:33
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-15, 10:40:47
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of IpFormatException.
 * 
 * @class IpFormatException
 * @extends {Error}
 */
class IpFormatException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof IpFormatException
   */
  private static error: string = 'The variable has incorrect ip format';

  /**
   * Creates an instance of IpFormatException.
   * 
   * @memberof IpFormatException
   */
  constructor() {
    super(IpFormatException.error);
  }
}

export default IpFormatException;