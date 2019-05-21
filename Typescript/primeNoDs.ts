/******************************************************************************
 *  Execution       :   1. default node          : cmd> node primeNoDs.ts 
 *                      2. if nodemon installed  : cmd> nodemon primeNoDs.ts
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   Used to calculate the power of numbers from user input.
 * 
 *  @description    
 * 
 *  @file           : primeNoDs.ts
 *  @overview       : Use random numbers to generate power of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-mar-2019
 *
 ******************************************************************************/

var req = require('util');
var utility = require('../typeScript/Util/utility');
var array:any = [["0-100 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
var i:number = 0; var j:number = 1; var range:number = 100;
for (let prime :number= 2; prime <= 1000; prime++) {
    if (utility.isPrime(prime)) {
        if (prime <= range) {
            array[i][j] = prime;
            j++;
            
        }
        else {
            j = 1;
            range = range + 100;
            i++;
            array[i][j] = prime;
        }
    }
}
console.log("The prime numbers are presents in the given range ");
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        req.print(array[i][j] + " ");
    }

    console.log();
}
console.log();

console.log(utility.isPrime(11))
