/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 15:26:22
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 15:26:44
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

/**
 * Interface for class Command.
 * 
 * @export
 * @interface ICommand
 */
export interface ICommand {
  getModuleName(): string;
}

/**
 * Abstract class for commands.
 * 
 * @abstract
 * @class Command
 * @implements {ICommand}
 */
abstract class Command implements ICommand {

  /**
   * Variable to store name of module.
   * 
   * @type {string}
   * @memberof Command
   */
  module: string;

  /**
   * Get name of module.
   * 
   * @returns {string} 
   * @memberof Command
   */
  public getModuleName(): string {
    return this.module;
  }
}

// =============================================================================
// Export Command class;
// =============================================================================
export default Command;