/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 15:32:40
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-22, 14:09:55
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading exceptions.
// =============================================================================
import IpFormatException from "../../exceptions/formats/IpFormatException";
import ColorFormatException from "../../exceptions/formats/ColorFormatException";
import EmailFormatException from "../../exceptions/formats/EmailFormatException";
import PasswordFormatLenghtException from "../../exceptions/formats/PasswordFormatLenghtException";
import PasswordFormatNoContainNumberException from "../../exceptions/formats/PasswordFormatNoContainNumberException";
import PasswordFormatContainSpecialChartException from "../../exceptions/formats/PasswordFormatContainSpecialChartException"
import PasswordFormatNoContainBigChartException from "../../exceptions/formats/PasswordFormatNoContainBigChartException"

/**
 * Class of validator.
 * 
 * @class Formats
 */
class Formats {
  /**
   * Check email is in correct format.
   * 
   * @static
   * @param {string} [email=''] 
   * @memberof Formats
   */
  public static isEmailFormat(email: string = '') {
    if(!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)) {
      throw new EmailFormatException();
    }
  }

  /**
   * Check ip is in correct format.
   * 
   * @static
   * @param {string} [ip=''] 
   * @memberof Formats
   */
  public static isIpFormat(ip: string = '') {
    if(!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
      throw new IpFormatException();
    }
  }

  /**
   * Check if the password has preserved conditions.
   * 
   * @static
   * @param {string} [password=''] 
   * @memberof Formats
   */
  public static isPassword(password: string = '') { 
    if (password.length < 8) {
      throw new PasswordFormatLenghtException();
    }
    if(!/[A-Z]/.test(password)) {
      throw new PasswordFormatNoContainBigChartException();
    }
    if(!/\d/.test(password)) {
      throw new PasswordFormatNoContainNumberException();
    }
    if(/[ęóąśłżźćńĘÓĄŚŁŻŹĆŃ ]/.test(password)) {
      throw new PasswordFormatContainSpecialChartException();
    }
  }

  /**
   * Check is color string i hex type.
   * 
   * @static
   * @param {string} [color=''] 
   * @memberof Formats
   */
  public static isColorType(color: string = '') {
    if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
      throw new ColorFormatException();
    }
  }
} 

// =============================================================================
// Export class validator.
// =============================================================================
export default Formats;