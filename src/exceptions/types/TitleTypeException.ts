/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-12, 15:35:31
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-12, 15:35:51
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of TitleTypeException.
 * 
 * @class TitleTypeException
 * @extends {Error}
 */
class TitleTypeException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof TitleTypeException
   */
  private static error: string = 'The variable is not of title type.';

  /**
   * Creates an instance of TitleTypeException.
   * 
   * @memberof TitleTypeException
   */
  constructor() {
    super(TitleTypeException.error);
  }
}

export default TitleTypeException;