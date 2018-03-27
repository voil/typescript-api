/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-21, 13:42:58
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-21, 13:43:27
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of PasswordFormatNoContainBigChartException.
 * 
 * @class PasswordFormatNoContainBigChartException
 * @extends {Error}
 */
class PasswordFormatNoContainBigChartException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof PasswordFormatNoContainBigChartException
   */
  private static error: string = 'The password must contain at least one capital letter.';

  /**
   * Creates an instance of PasswordFormatNoContainBigChartException.
   * 
   * @memberof PasswordFormatNoContainBigChartException
   */
  constructor() {
    super(PasswordFormatNoContainBigChartException.error);
  }
}

export default PasswordFormatNoContainBigChartException;