/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 08:58:17
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-14, 10:12:31
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import * as http from 'http';
import * as cors from 'cors';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as session from  'express-session';
// =============================================================================
// Loading services.
// =============================================================================
import Debug from "./services/Debug";
import Mailer from "./services/Mailer";
// =============================================================================
// Loading middlewares.
// =============================================================================
import Routes from "./middlewares/Routes";
// =============================================================================
// Loading use case outputs.
// =============================================================================
import Output from "./useCases/Output";

/**
 * Main class of kernel.
 * 
 * @class Kernel
 */
class Kernel {
  
  /**
   * Reference to instance Express Application interface.
   * 
   * @private
   * @static
   * @type {express.Application}
   * @memberof Kernel
   */
  private static app: express.Application = null;

  /**
   * Reference to http server interface.
   * 
   * @private
   * @static
   * @type {http.Server}
   * @memberof Kernel
   */
  private static server: http.Server = null;

  /**
   * Create instance application class.
   * 
   * @static
   * @memberof Kernel
   */
  public static createAppInstance(): void {
    Kernel.app = express();
    Debug.showInfo('Application instance created successful.');
  }
  
  /**
   * Setup configuration for application instance.
   * 
   * @static
   * @memberof Kernel
   */
  public static setConfigurationApplication(): void {
    this.initializeCors();
    this.initializeSession();
    
    if(process.env.MAIL_AUTO_CONNECT) {
      Mailer.connectMailerWhitApplication(Kernel.app);
    }
    Kernel.app.use(Routes.handle);
    Debug.showInfo('Configuration application created successful.');
  }

  /**
   * Create server.
   * 
   * @static
   * @memberof Kernel
   */
  public static createBootstrapServer(): void {
    Kernel.server = http.createServer(Kernel.app);
    Debug.showInfo('Bootstrap server created successful.');
  }

  /**
   * Start listien serveron port $process.env.API_PORT.
   * 
   * @static
   * @memberof Kernel
   */
  public static startListenServer(): void {
    Kernel.server.listen(process.env.API_PORT);
    Debug.showInfo(`Server listening successful on port: %s.`, process.env.API_PORT);
  }

  /**
   * Resolve all request from user and parse to use cases.
   * 
   * @static
   * @memberof Kernel
   */
  public static resolveAllUsesCasesForUser(): void {
    Kernel.app.all('*', (request: express.Request, response: express.Response, next) => 
      response.locals.case.handle()
    );
  }

  /**
   * Initialize session fro platform.
   * 
   * @private
   * @static
   * @memberof Kernel
   */
  private static initializeSession(): void {
    Kernel.app.use(bodyParser.urlencoded({ extended: true }));
    Kernel.app.use(bodyParser.json());
    Kernel.app.set('trust proxy', 1);
    Kernel.app.use(session({
      secret: process.env.SECRET_SESSIONS,
      resave: false,
      saveUninitialized: true,
      cookie: { 
        maxAge: parseInt(process.env.MAX_AGE_COOKIE)
      }
    }))
  }

  /**
   * Initialize cors for platform.
   * 
   * @private
   * @static
   * @memberof Kernel
   */
  private static initializeCors(): void {
    Kernel.app.use(cors({ 
      origin : process.env.CORS_ORIGIN,
      credentials :  true,  
      methods: 'GET, PUT, POST, DELETE, PATCH, OPTIONS', 
      allowedHeaders: 'Content-Type,Authorization,X-Requested-With'
    }));
    Kernel.app.use((request: express.Request, response: express.Response, next): void => {
        response.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN);
        response.header('Access-Control-Allow-Methods', process.env.CORS_METHODS);
        response.header('Access-Control-Allow-Headers', process.env.CORS_HEADERS);
        response.setHeader('Access-Control-Allow-Credentials', process.env.CORS_CREDENTIALS);

        Output.setConfiguration(response);
        next();
    });
  }
}

// =============================================================================
// Export core class Kernel.
// =============================================================================
export default Kernel;