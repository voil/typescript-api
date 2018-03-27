/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-13, 10:36:21
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-13, 11:39:51
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading dependencies.
// =============================================================================
import * as express from 'express';
import * as mailer from 'express-mailer';
// =============================================================================
// Loading interfaces.
// =============================================================================
import { ITitle } from "../valueObjects/Title";
import { IEmail } from "../valueObjects/Email";
// =============================================================================
// Loadign exceptions.
// =============================================================================
import EmailSendException from "../exceptions/global/EmailSendException";

/**
 * Main class service mailer.
 * 
 * @class Mailer
 */
class Mailer {
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
   * onnect maile whit generated application.
   * 
   * @public
   * @static
   * @memberof Mailer
   */
  public static connectMailerWhitApplication(app: express.Application): void {
    Mailer.app = app;
    mailer.extend(Mailer.app, {
      from: process.env.MAIL_FROM,
      host: process.env.MAIL_HOST,
      secureConnection: false, 
      port: process.env.MAIL_PORT,
      transportMethod: process.env.MAIL_DRIVER,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      }
    });
    Mailer.setPathToViews();
  }

  /**
   * Send email to current user.
   * 
   * @static
   * @param {string} template 
   * @param {IEmail} email 
   * @param {ITitle} title 
   * @param {{}} params 
   * @memberof Mailer
   */
  public static send(template: string, email: IEmail, title: ITitle, params : {}): void {
    Mailer.app.mailer.send(template, {
      to: email.__toString(),
      subject: title.__toString(),
      ...params
    }, (error) => { 
      if(error){
        throw new EmailSendException();
      }
    });
  }

  /**
   * Connect path to views for emails.
   * 
   * @private
   * @static
   * @memberof Mailer
   */
  private static setPathToViews() {
    Mailer.app.set('views', __dirname + '/../views/emails/');
    Mailer.app.set('view engine', 'jade');
  }
}

// =============================================================================
// Export Mailer class;
// =============================================================================
export default Mailer;