/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 11:49:30
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-14, 10:09:11
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading dependencies.
// =============================================================================
import * as express from 'express';

/**
 * Class to set output for reponse. 
 * 
 * @class Output
 */
class Output {
  /**
   * Params for response.
   * 
   * @private
   * @static
   * @type {Array<any>}
   * @memberof Output
   */
  private static responseParams: Array<any> = [];

  /**
   * Code for response.
   * 
   * @private
   * @static
   * @type {number}
   * @memberof Output
   */
  private static responseCode: number = 200;

  /**
   * Message for response.
   * 
   * @private
   * @static
   * @type {string}
   * @memberof Output
   */
  private static responseMessage: string = 'success';

  /**
   * Reference to response interface.
   * 
   * @private
   * @static
   * @type {express.Response}
   * @memberof Output
   */
  private static response: express.Response = null;

  /**
   * Set configuration for response data.
   * 
   * @static
   * @param {express.Response} response 
   * @memberof Output
   */
  public static setConfiguration(response: express.Response): void {
    Output.response = response;
    Output.setHeadersForResponse();
  }

  /**
   * Bad request response.
   * 
   * @static
   * @param {number} [code=400] 
   * @memberof Output
   */
  public static badRequest(code: number = 400): void {
    Output.response.status(code).send(Output.parseResponse([], code, 'bad_request'));
  }

  /**
   * Success request response.
   * 
   * @static
   * @param {Array<any>} [data=Output.responseParams] 
   * @memberof Output
   */
  public static success(data: Array<any>|any = Output.responseParams): void {
    Output.response.status(200).send(Output.parseResponse(data, 200, 'success'));
  }

  /**
   * Success request response.
   * 
   * @static
   * @param {Array<any>} [data=Output.responseParams] 
   * @memberof Output
   */
  public static notAcceptable(data: Array<any> = Output.responseParams): void {
    Output.response.status(406).send(Output.parseResponse(data, 406, 'not_acceptable'));
  }

  /**
   * Forbidden request response.
   * 
   * @static
   * @param {number} [code=403] 
   * @memberof Output
   */
  public static forbidden(code: number = 403): void {
    Output.response.status(code).send(Output.parseResponse([], code, 'forbidden'));
  }

  /**
   * Unauthorized request response.
   * 
   * @static
   * @param {number} [code=401] 
   * @memberof Output
   */
  public static unauthorized(code: number = 401): void {
    Output.response.status(code).send(Output.parseResponse([], code, 'unauthorized'));
  }

  /**
   * Set headers for response.
   * 
   * @private
   * @static
   * @memberof Output
   */
  private static setHeadersForResponse(): void {
    Output.response.setHeader('Content-Type', 'application/json');
  }

  /**
   * Parase params for response.
   * 
   * @private
   * @static
   * @param {Array<any>} [data=Output.responseParams] 
   * @param {number} [code=Output.responseCode] 
   * @param {string} [message=Output.responseMessage] 
   * @returns {string} 
   * @memberof Output
   */
  private static parseResponse(data: Array<any>|any = Output.responseParams, 
                               code: number = Output.responseCode, 
                               message: string = Output.responseMessage): string {
    return JSON.stringify({ 
      data,
      code,
      message
    })
  }
}

// =============================================================================
// Export main class Output.
// =============================================================================
export default Output;