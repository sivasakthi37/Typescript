/******************************************************************************
 *  Execution       :   1. default node          : cmd> node distanceSq.ts 
 *                      2. if nodemon installed  : cmd> nodemon distanceSq.ts
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
var fetchFromUtility = require('../typeScript/Utility/utility');
var syncPurpose=require('readline-sync');
var a :number=syncPurpose.questionInt('Enter the X point to find distance from to origin : ');
var b :number=syncPurpose.questionInt('Enter the Y point to find distance from to origin : ');
var distance:number=fetchFromUtility.findDistance(a,b);
console.log("Distnace form Origin is : "+distance);