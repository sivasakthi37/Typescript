/******************************************************************************
 *  Execution       :   1. default node          : cmd> node powerOfTwo.js
 *                      2. if nodemon installed  : cmd> nodemon poerOfTwo.js
 *                         -nodemon helps in restart the program after every changes.
 *
 *  Purpose         :   Used to calculate the power of numbers from user input.
 *
 *  @description
 *
 *  @file           : powerOfTwo.js
 *  @overview       : Use random numbers to generate power of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-mar-2019
 *
 ******************************************************************************/
var pw = require('../typeScript/Utility/utility');
var read = require('readline-sync');
var num = read.questionInt("enter the number here that is going to two to the power");
pw.powerOfTwo(num);
