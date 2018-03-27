/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-12, 14:24:48
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-12, 15:07:52
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
 * Interface for class Title.
 * 
 * @export
 * @interface ITitle
 */
export interface ITitle {
  value: string;
  __toString(): string;
}

/**
 * Value Object Title.
 * 
 * @class Title
 * @implements {ITitle}
 */
class Title implements ITitle {

  /**
   * Varaible to store Title.
   * 
   * @type {string}
   * @memberof Title
   */
  value: string;

  /**
   * Creates an instance of Title.
   * 
   * @param {string} title 
   * @memberof Title
   */
  constructor(title: string) {
    Validator.Simple.isStringType(title, 'title');
    this.value = title;
  }

  /**
   * Get string value.
   * 
   * @returns {string} 
   * @memberof Title
   */
  public __toString(): string {
    return this.value;
  }
}

// =============================================================================
// Export value object.
// =============================================================================
export default Title;