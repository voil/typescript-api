/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 15:26:27
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-12, 11:05:04
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading support services.
// =============================================================================
import Debug from "./Debug";
// =============================================================================
// Loading interfaces.
// =============================================================================
import { ICommand } from "./Command";  
import { ICommandHandler } from "./CommandHandler";


/**
 * Main class of CommandBus.
 * 
 * @class CommandBus
 */
class CommandBus {

  /**
   * Creates an instance of CommandBus.
   * 
   * @memberof CommandBus
   */
  constructor() {}

  /**
   * Handle command to execute.
   * 
   * @static
   * @param {ICommand} command 
   * @returns {Promise<any>} 
   * @memberof CommandBus
   */
  public static async handle(command: ICommand): Promise<any> {
      const handler = await this.getHandlerForCommnad(command);
      return await handler.execute(command);
  }

  /**
   * Get handler for execute command.
   * 
   * @private
   * @static
   * @param {ICommand} command 
   * @returns {Promise<ICommandHandler>} 
   * @memberof CommandBus
   */
  private static async getHandlerForCommnad(command: ICommand): Promise<ICommandHandler> {
    try {
      const handler = await import(`../modules/${command.getModuleName()}/infrastructure/commands/${command.constructor.name}Handler`);
      return handler.default;
    } catch (error) {
      Debug.showError('The specified handler does not exist. Code: %s', error.code || error);
    } 
  }
}

// =============================================================================
// Export CommandBus class;
// =============================================================================
export default CommandBus;