/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-21, 13:42:29
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-21, 13:42:53
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of PasswordFormatContainSpecialChartException.
 * 
 * @class PasswordFormatContainSpecialChartException
 * @extends {Error}
 */
class PasswordFormatContainSpecialChartException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof PasswordFormatContainSpecialChartException
   */
  private static error: string = 'The password can not contain special characters.';

  /**
   * Creates an instance of PasswordFormatContainSpecialChartException.
   * 
   * @memberof PasswordFormatContainSpecialChartException
   */
  constructor() {
    super(PasswordFormatContainSpecialChartException.error);
  }
}

export default PasswordFormatContainSpecialChartException;