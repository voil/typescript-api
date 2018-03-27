/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 13:01:22
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 13:01:31
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
/**
 * Interface for class Query.
 * 
 * @export
 * @interface IQuery
 */
export interface IQuery {
  getQuery(): string;
  getParams(): object;
  parse(response: any);
}

/**
 * Abstract class for query commands.
 * 
 * @abstract
 * @class Query
 * @implements {IQuery}
 */
abstract class Query implements IQuery {
  /**
   * Variable to store sql query.
   * 
   * @protected
   * @type {string}
   * @memberof Query
   */
  protected query: string = '';

  /**
   * Params for parse to sql.
   * 
   * @protected
   * @type {object}
   * @memberof Query
   */
  protected params: object = {} 

  /**
   * Get generated query.
   * 
   * @returns {string} 
   * @memberof Query
   */
  public getQuery(): string {
    return this.query;
  }


  /**
   * Get all params.
   * 
   * @returns {object} 
   * @memberof Query
   */
  public getParams(): object {
    return this.params;
  }

  /**
   * Parse all params from sql query.
   * 
   * @param {Array<object>} response 
   * @memberof Query
   */
  public parse(response: Array<object>) {}
}

// =============================================================================
// Export abstract class query.
// =============================================================================
export default Query;