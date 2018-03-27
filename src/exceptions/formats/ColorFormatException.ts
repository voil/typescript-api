/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-22, 14:09:31
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-22, 14:09:52
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Class of ColorFormatException.
 * 
 * @class ColorFormatException
 * @extends {Error}
 */
class ColorFormatException extends Error{
  /**
   * Variable to store error message;
   * 
   * @private
   * @static
   * @type {string}
   * @memberof ColorFormatException
   */
  private static error: string = 'The variable has incorrect color hex format';

  /**
   * Creates an instance of ColorFormatException.
   * 
   * @memberof ColorFormatException
   */
  constructor() {
    super(ColorFormatException.error);
  }
}

export default ColorFormatException;