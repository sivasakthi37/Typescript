/******************************************************************************
 *  Execution       :   1. default node          : cmd> node monthlyPayment.ts 
 *                      2. if nodemon installed  : cmd> nodemon monthlyPayment.ts
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   Used to calculate the power of numbers from user input.
 * 
 *  @description    
 * 
 *  @file           : monthlyPayment.ts
 *  @overview       : Use random numbers to generate power of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-mar-2019
 *
 ******************************************************************************/

var utility = require('../typeScript/Utility/utility')
var read = require("readline-sync");
function monthlyPayment()
 {
var principle:number= read.questionInt("please!! Enter your principle here...!!");
var year:number=read.questionInt("please!! Enter your year here...!!");
var rate:number=read.questionInt("please!! Enter your rate here...!!");
utility.monthlyPayment(principle,year,rate);
}
monthlyPayment();