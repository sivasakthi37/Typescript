/******************************************************************************
 *  Execution       :   1. default node          : cmd> node squareRoot.ts 
 *                      2. if nodemon installed  : cmd> nodemon squareRoot.ts
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   Used to calculate the power of numbers from user input.
 * 
 *  @description    
 * 
 *  @file           : squareRoot.ts
 *  @overview       : Use random numbers to generate power of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-mar-2019
 *
 ******************************************************************************/

var read = require('readline-sync');
    var num:number = read.questionInt("Enter non -ve value : ")
    sqrRoot(num);
    function sqrRoot(num:number) {
        if (num > 0) {
            //formula
            var t:number = num;
            var epsilon:number= 1e-15;
            while (Math.abs(t - num / t) > epsilon * t) {
                t = (num / t + t) / 2;
            }
            console.log("Squre root of non negative number is : ", t)
        }
        else {
            console.log("Number should be positive ");
        }
}

