/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-08, 15:43:24
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-09, 10:12:52
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading dependencies.
// =============================================================================
import Kernel from "./Kernel"; 
import * as dotenv from "dotenv";
// =============================================================================
// Loading services.
// =============================================================================
import Debug from "./services/Debug";

/*
|--------------------------------------------------------------------------
| Create config filse.
|--------------------------------------------------------------------------
|
| Initialize config files.
|
*/
dotenv.config({ path: `.env.${process.env.ENVIRONMENT}`});
Debug.showInfo('Config file initialization success.');

/*
|--------------------------------------------------------------------------
| Create app instance.
|--------------------------------------------------------------------------
|
| Create an instance of the application to support server settings.
|
*/
Kernel.createAppInstance();

/*
|--------------------------------------------------------------------------
| Setup configuration.
|--------------------------------------------------------------------------
|
| Setting all input data for application insights.
|
*/
Kernel.setConfigurationApplication();

/*
|--------------------------------------------------------------------------
| Create server.
|--------------------------------------------------------------------------
|
| Creating a server to handle requests.
|
*/
Kernel.createBootstrapServer();

/*
|--------------------------------------------------------------------------
| Start listing server port.
|--------------------------------------------------------------------------
|
| Start listening server on the appropriate port given in the platform settings.
|
*/
Kernel.startListenServer();

/*
|--------------------------------------------------------------------------
| Catch all requests.
|--------------------------------------------------------------------------
|
| Catch all incoming requests to the server and resolve them as use cases.
|
*/
Kernel.resolveAllUsesCasesForUser();