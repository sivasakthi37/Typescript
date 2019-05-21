/******************************************************************************
 *  Execution       :   1. default node          : cmd> node primeFactor.ts 
 *                      2. if nodemon installed  : cmd> nodemon primeFactor.ts
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   Used to calculate the power of numbers from user input.
 * 
 *  @description    
 * 
 *  @file           : primeFactor.ts
 *  @overview       : Use random numbers to generate power of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-mar-2019
 *
 ******************************************************************************/

var fetch1 = require('../typeScript/Utility/utility');

var fetch2 = require('readline-sync');
var no:number=fetch2.questionInt("Please enter the number to find prime factor : ");
fetch1.primeFactors(no);