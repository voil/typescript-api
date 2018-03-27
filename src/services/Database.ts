/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 13:00:28
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 14:59:48
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
import Sequelize from 'sequelize';

/**
 * Main class of databases.
 * 
 * @class Database
 * @extends {Sequelize}
 */
class Database extends Sequelize {

  /**
   * Reference to method query.
   * 
   * @memberof Database
   */
  public query;

  /**
   * Creates an instance of Database.
   * 
   * @memberof Database
   */
  constructor() {
    super(
      process.env.DB_DATABASE,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        schema: process.env.DB_SCHEME,
        logging: false
      }
    );
  }
}

// =============================================================================
// Export database class.
// =============================================================================
export default new Database();