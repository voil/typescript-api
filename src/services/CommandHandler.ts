/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 15:26:31
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 15:27:38
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading interfaces.
// =============================================================================
import { ICommand } from "./Command";

/**
 * Interface for class CommandHandler.
 * 
 * @export
 * @interface ICommandHandler
 */
export interface ICommandHandler {
  execute: any;
}