/******************************************************************************
 *  Execution       :   1. default node          : cmd> node getNumber.ts
 *                      2. if nodemon installed  : cmd> nodemon getNumber.ts
 *                         -nodemon helps in restart the program after every changes.
 *
 *  Purpose         :   Used to calculate the power of numbers from user input.
 *
 *  @description
 *
 *  @file           : getNumber.ts
 *  @overview       : Use random numbers to generate power of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-mar-2019
 *
 ******************************************************************************/
var utility = require('../typeScript/Utility/utility');
var read = require('readline-sync');
var low = read.questionInt("Enter starting number : ");
var high = read.questionInt("Enter last number : ");
var n = utility.findNumber(low, high, read);
console.log("Your number is : " + n);
