/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 10:18:10
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-15, 09:06:53
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading dependencies.
// =============================================================================
import * as express from 'express';
// =============================================================================
// Loading services.
// =============================================================================
import Debug from "../services/Debug";
// =============================================================================
// Loading use case outputs.
// =============================================================================
import Output from "../useCases/Output";
// =============================================================================
// Loading support functions.
// =============================================================================
import { capitalizeFirstLetter } from "../helpers/Utils";

/**
 * Middleware of resolve routes.
 * 
 * @class Routes
 */
class Routes {

  /**
   * Handle middleware action.
   * 
   * @param {express.Request} request 
   * @param {express.Response} response 
   * @param {any} next 
   * @returns {Promise<any>} 
   * @memberof Routes
   */
  public async handle(request: express.Request, response: express.Response, next): Promise<any> {
    const params = Routes.parseParams(request);
    try {   
      const useCaseName = Routes.parsePathToUseCase(request.path);
      const cases = await import(`../useCases/browser/${useCaseName}`);
        
      if(cases.default.method != request.method){
        Routes.throwError();
      }else{
        cases.default.params = params;
        response.locals.case = cases.default;
        next();
      }
    } catch (error) {
      Routes.throwError();
    }
  }

  /**
   * Throw error when try and cache fail.
   * 
   * @returns {void} 
   * @memberof Routes
   */
  private static throwError(): void {
    Debug.showError('The request does not exist');
    Output.badRequest();
  }

  /**
   * Parse path.
   * 
   * @param {string} path 
   * @returns {string} 
   * @memberof Routes
   */
  private static parsePathToUseCase(path: string): string {
    path = path.substr(1, path.length -1);
    const pathArray = path.split('/');

    return pathArray.map(part => capitalizeFirstLetter(part)).join('');
  } 

  /**
   * Parse params for request.
   * 
   * @param {express.Request} request 
   * @returns {object} 
   * @memberof Routes
   */
  private static parseParams(request: express.Request): object {
    return Object.assign(request.query, request.body);
  }
}

// =============================================================================
// Export middleware.
// =============================================================================
export default new Routes();