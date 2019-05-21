/******************************************************************************
 *  Execution       :   1. default node          : cmd> node swapNibble.ts
 *                      2. if nodemon installed  : cmd> nodemon swapNibble.ts
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   Used to calculate the power of numbers from user input.
 * 
 *  @description    
 * 
 *  @file           : swapNibble.ts
 *  @overview       : Use random numbers to generate power of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-mar-2019
 *
 ******************************************************************************/
var util = require("../typeScript/Utility/utility");
var r = require("readline-sync");
var getName:string = r.question("Enter the String here....!!!!==");
var out = util.swapNibble(getName);
console.log(out);