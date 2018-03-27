/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 13:10:56
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-12, 15:11:07
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading exceptions.
// =============================================================================
import StringTypeException from "../../exceptions/types/StringTypeException";
import NumberTypeException from "../../exceptions/types/NumberTypeException";
import BooleanTypeException from "../../exceptions/types/BooleanTypeException";

/**
 * Class of validator.
 * 
 * @class Simple
 */
class Simple {
  /**
   * Validate message is type of string.
   * 
   * @static
   * @param {string} [message=''] 
   * @memberof Validate
   */
  public static isStringType(message: string = '', param: string = ''): void {
    if(typeof message !== 'string'){
      throw new StringTypeException(param);
    }
  }

  /**
   * Validate message is type of string.
   * 
   * @static
   * @param {boolean} [type=false] 
   * @memberof Validate
   */
  public static isBooleanType(type: boolean = false): void {
    if(typeof type !== 'boolean'){
      throw new BooleanTypeException();
    }
  }  

  /**
   * Check is id is number.
   * 
   * @static
   * @param {number} [id=0] 
   * @memberof Validate
   */
  public static isNumberType(id: number = 0): void {
    if(typeof id !== 'number'){
      throw new NumberTypeException();
    }
  }
}

// =============================================================================
// Export class validator.
// =============================================================================
export default Simple;