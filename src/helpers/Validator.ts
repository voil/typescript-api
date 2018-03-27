/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 13:10:39
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-12, 15:15:08
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading validators.
// =============================================================================
import Types from "./validators/Types";
import Simple from "./validators/Simple";
import Domains from "./validators/Domains";
import Formats from "./validators/Formats";

/**
 * Main class of validator.
 * 
 * @class Validator
 */
class Validator {
  public static Types = Types;
  public static Simple = Simple;
  public static Domains = Domains;
  public static Formats = Formats;
}

// =============================================================================
// Export validator proxy.
// =============================================================================
export default Validator;