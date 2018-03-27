/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 13:46:17
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 13:46:23
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of NumberTypeException.
 * 
 * @class NumberTypeException
 * @extends {Error}
 */
class NumberTypeException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof NumberTypeException
   */
  private static error: string = 'The variable is not of the number type';

  /**
   * Creates an instance of NumberTypeException.
   * 
   * @memberof NumberTypeException
   */
  constructor() {
    super(NumberTypeException.error);
  }
}

export default NumberTypeException;