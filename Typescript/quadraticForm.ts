/******************************************************************************
 *  Execution       :   1. default node          : cmd> node quadraticForm.ts 
 *                      2. if nodemon installed  : cmd> nodemon quadraticForm.ts
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   Used to calculate the power of numbers from user input.
 * 
 *  @description    
 * 
 *  @file           : quadraticForm.ts
 *  @overview       : Use random numbers to generate power of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-mar-2019
 *
 ******************************************************************************/

var xyz = require('../typeScript/Utility/utility');
var syncPurpose = require('readline-sync');
var a:number=syncPurpose.question("Enter the A value : ");
var b:number=syncPurpose.question("Enter the B value : ");
var c:number=syncPurpose.question("Enter the C value : ");
xyz.roots(a,b,c);