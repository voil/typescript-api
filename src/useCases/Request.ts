/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-13, 11:58:44
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-14, 10:26:07
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

/**
 * Abstract class for request.
 * 
 * @abstract
 * @class Request
 */
abstract class Request {
  /**
   * Array of access roles to use cases.
   * 
   * @static
   * @type {array<number>}
   * @memberof Request
   */
  public static access: Array<number> = [];

  /**
   * Check if the user must be logged in to access the selected use case.
   * 
   * @static
   * @type {boolean}
   * @memberof Request
   */
  public static authentication: boolean = false;
}

// =============================================================================
// Export default class request.
// =============================================================================
export default Request;