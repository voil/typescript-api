/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 08:52:26
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-13, 15:30:03
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */ 

// =============================================================================
// Loading dependencies.
// =============================================================================
import Request from "../Request";
// =============================================================================
// Loading use case outputs.
// =============================================================================
import Output from "../Output";
// =============================================================================
// Loading command bus.
// =============================================================================
import CommandBus from "../../services/CommandBus";
// =============================================================================
// Loading services.
// =============================================================================
import QueryDispatcher from "../../services/QueryDispatcher";

/**
 * Hello world use cases.
 * 
 * @class HelloWorld
 */
class HelloWorld extends Request {
  /**
   * Supported method.
   * 
   * @static
   * @type {string}
   * @memberof HelloWorld
   */
  public static method: string = 'GET';

  /**
   * Handle resolve uses cases.
   * 
   * @static
   * @param {object} params 
   * @returns {Promise<any>} 
   * @memberof HelloWorld
   */
  public static async handle(): Promise<any> {
    try {
      Output.success(['Hello World']);
    } catch (error) {
      Output.notAcceptable([{ params: error.message }]);
    }
  }
}

// =============================================================================
// Export default use cases.
// =============================================================================
export default HelloWorld;