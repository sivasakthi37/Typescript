var readline = require('readline-sync');
module.exports =
    {
        writeFile: function (fileName, data) {
            var fs = require('fs');
            fs.writeFile(fileName, data, function (err) {
                if (err) {
                    return console.log(err);
                }
                //console.log("The file is saved!");
            });
        },
        isPrime: function (number) {
            if (number == 0 || number == 1) {
                return false;
            }
            else {
                for (var index = 2; index < number; index++) {
                    if (number % index == 0) {
                        return false;
                    }
                }
                return true;
            }
        },
        callFile: function () {
            var fileStream = require('fs');
            var f = fileStream.readFileSync('file.txt', 'utf8');
            console.log(f);
            var arr = f.split(' ');
            return arr;
        },
        /************************************ file CAll **********************************/
        fileCall: function () {
            var fileStream = require('fs');
            var f = fileStream.readFileSync('File.txt', 'utf8');
            var arr = f.split(' ');
            return arr;
        },
        fileCalls: function (name) {
            var fileStream = require('fs');
            var f = fileStream.readFileSync(name, 'utf8');
            var arr = f.split(' ');
            return arr;
        },
        dayOfWeek: function (d, m, y) {
            var v = Math.floor((14 - m) / 12);
            var y0 = y - v;
            var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
            var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
            var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
            d0 = Math.floor(d0);
            console.log(d0 + "Type Your DOB here...!!!!");
            return d0;
        },
        leapYear: function (year) {
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                return true;
            }
            else {
                return false;
            }
        },
        monthof: function (m) {
            switch (m) {
                case 1:
                    return 31;
                    break;
                case 2:
                    return 28;
                    break;
                case 3:
                    return 31;
                    break;
                case 4:
                    return 30;
                    break;
                case 5:
                    return 31;
                    break;
                case 6:
                    return 30;
                    break;
                case 7:
                    return 31;
                    break;
                case 8:
                    return 31;
                    break;
                case 9:
                    return 30;
                    break;
                case 10:
                    return 31;
                    break;
                case 11:
                    return 30;
                    break;
                case 12:
                    return 31;
                    break;
            }
        },
        bubbleSort: function (datas) {
            var j;
            var i;
            var temp;
            var n;
            for (i = 1; i <= datas; i++) {
                for (j = 0; j <= datas - i; j++) {
                    if (datas[j] > datas[j + 1]) {
                        temp = datas[j];
                        datas[j] = datas[j + 1];
                        datas[j + 1] = temp;
                    }
                }
            }
            return datas;
        }
    };
