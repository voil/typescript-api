/*
 * =============================================================================
 * Project: backend_api_typescript
 * Created Date: 2018-03-27, 11:19:09
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-27, 11:49:52
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading support class.
// =============================================================================
import Validator from "../helpers/Validator";

/**
 * Interface for class Email.
 * 
 * @export
 * @interface IEmail
 */
export interface IEmail {
  __toString(): string;
}

/**
 * Class of value objects Email.
 * 
 * @class Email
 * @implements {IEmail}
 */
class Email implements IEmail {

  /**
   * Variable to store value of class.
   * 
   * @type {string}
   * @memberof Email
   */
  value: string;

  /**
   * Creates an instance of Email.
   * 
   * @param {string} email 
   * @memberof Email
   */
  constructor(email: string) {
    Validator.Simple.isStringType(email, 'email');
    Validator.Formats.isEmailFormat(email);

    this.value = email;
  }

  /**
   * Get value.
   * 
   * @returns {string} 
   * @memberof Email
   */
  public __toString(): string {
    return this.value;
  }
}

// =============================================================================
// Export value object.
// =============================================================================
export default Email;