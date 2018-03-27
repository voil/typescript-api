/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 14:37:49
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-22, 15:21:30
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading value objects.
// =============================================================================
import Title from "../../valueObjects/Title";
import Email from "../../valueObjects/Email";

// =============================================================================
// Loading interfaces.
// =============================================================================
import { ITitle } from "../../valueObjects/Title";
import { IEmail } from "../../valueObjects/Email";
// =============================================================================
// Loading Exceptions.
// =============================================================================
import TitleTypeException from "../../exceptions/types/TitleTypeException";
import EmailTypeException from "../../exceptions/types/EmailTypeException";

/**
 * Class of validator.
 * 
 * @class Types
 */
class Types {

  /**
   * Check is variable id is instance of email type.
   * 
   * @static
   * @param {IEmail} type 
   * @returns {boolean} 
   * @memberof Types
   */
  public static isEmailType(type: IEmail): void {
    let valid = type instanceof Email;
    if(!valid){
      throw new EmailTypeException();
    }
  }

  /**
   * Check is variable title is instance of Title.
   * 
   * @static
   * @param {ITitle} title 
   * @returns {boolean} 
   * @memberof Types
   */
  public static isTitleType(title: ITitle): void {
    let valid = title instanceof Title;
    if(!valid){
      throw new TitleTypeException();
    }
  } 
}

// =============================================================================
// Export class validator.
// =============================================================================
export default Types;