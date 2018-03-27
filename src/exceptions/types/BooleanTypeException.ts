/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 13:46:00
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-12, 14:55:06
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of BooleanTypeException.
 * 
 * @class BooleanTypeException
 * @extends {Error}
 */
class BooleanTypeException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof BooleanException
   */
  private static error: string = 'The variable is not of boolean type.';

  /**
   * Creates an instance of BooleanTypeException.
   * 
   * @memberof BooleanTypeException
   */
  constructor() {
    super(BooleanTypeException.error);
  }
}

export default BooleanTypeException;