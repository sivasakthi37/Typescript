/******************************************************************************
 *  Execution       :   1. default node          : cmd> node calender.ts
 *                      2. if nodemon installed  : cmd> nodemon calender.ts
 *                         -nodemon helps in restart the program after every changes.
 *
 *  Purpose         :   Used to calculate the power of numbers from user input.
 *
 *  @description
 *
 *  @file           : calender.ts
 *  @overview       : Use random numbers to generate power of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-Mar-2019
 *
 ******************************************************************************/
var take = require('util');
var Utility = require('../typeScript/Util/utility');
var read = require('readline-sync');
function calender() {
    var month = +process.argv[2];
    var year = +process.argv[3];
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
    var day = Utility.dayOfWeek(1, month, year);
    console.log(day);
    var leap = Utility.leapYear(year);
    if (leap = true) {
        dates[2] = 29;
    }
    for (var i = 0; i < week.length; i++) {
        take.print(week[i] + "  ");
    }
    console.log();
    for (var i = 0; i < (day * 5); i++) {
        take.print(" ");
    }
    for (var i = 1; i <= dates[month]; i++) {
        if (i < 10) {
            take.print(" " + i + "   ");
        }
        if (i > 9) {
            take.print("" + i + "   ");
        }
        if ((i + day) % 7 == 0) {
            console.log();
        }
    }
    console.log("\n\n");
}
calender();
