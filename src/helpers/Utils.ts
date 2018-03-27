/**
 * =============================================================================
 * Project: typescript api
 * Created Date: 2018-02-09, 11:01:10
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-02-13, 14:54:25
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
// =============================================================================
// Loading dependencies.
// =============================================================================
import * as uuidV4 from 'uuid/v4'; 

/**
 * Set to upper first letter.
 * 
 * @export
 * @param {string} word 
 * @returns {string} 
 */
export function capitalizeFirstLetter(word: string):string  {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Generate random number.
 * 
 * @export
 * @param {number} [min=0] 
 * @param {number} [max=1] 
 * @returns {number} 
 */
export function random(min: number = 0, max: number = 1): number {
  return Math.random() * (max - min) + min
}

/**
 * Create uuid string.
 * 
 * @export
 * @returns {string} 
 */
export function uuid(): string {
  return uuidV4(); 
}