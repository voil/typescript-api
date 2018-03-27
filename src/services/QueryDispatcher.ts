/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 13:00:15
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 13:02:55
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading dependencies.
// =============================================================================
import Database from "./Database";
// =============================================================================
// Loading interfaces.
// =============================================================================
import { IQuery } from "./Query";

/**
 * Main dlacc of QueryDispatcher
 * 
 * @class QueryDispatcher
 */
class QueryDispatcher {

  /**
   * Execute query sql.
   * 
   * @static
   * @param {IQuery} sql 
   * @returns 
   * @memberof QueryDispatcher
   */
  public static async execute(sql: IQuery): Promise<any> {
      let response = await Database.query(sql.getQuery(), Object.assign(
        sql.getParams()
      ));

      return sql.parse(response);
  }
}

// =============================================================================
// Export QueryDispatcher class;
// =============================================================================
export default QueryDispatcher;