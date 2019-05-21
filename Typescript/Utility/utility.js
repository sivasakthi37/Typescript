var readline = require('readline-sync');
module.exports = {
    /************poweroftwo**********/
    powerOfTwo: function (num) {
        if (num < 31) {
            for (var i = 0; i <= num; i++) {
                var result = Math.pow(2, i);
                console.log(result);
            }
        }
        else {
            console.log("Hello! Please enter only numerical value between 0 and 31");
        }
    },
    /************primefactor**********/
    primeFactors: function (no) {
        if (no > 0) {
            while (no % 2 == 0) {
                console.log("2 ");
                no /= 2;
            }
            for (var i = 3; i < Math.sqrt(no); i += 2) {
                while (no / i == 0) {
                    console.log(i + " ");
                    no /= i;
                }
            }
            if (no > 2) {
                console.log(no + " ");
            }
        }
    },
    /************Distance**********/
    findDistance: function (a, b) {
        var distance = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
        return distance;
    },
    /************quadratic form**********/
    roots: function (a, b, c) {
        var delta = (b * b) - (4 * a * c);
        console.log(delta);
        if (delta == 0) {
            var root = -b / (2 * a);
            console.log(root);
        }
        else if (delta > 0) {
            var root1 = (-b + (Math.sqrt(delta))) / 2 * a;
            var root2 = (-b - (Math.sqrt(delta))) / 2 * a;
            console.log("First root " + Math.round(root1));
            console.log("Second root " + Math.round(root2));
        }
        else if (delta < 0) {
            var root1 = -b / 2 * a;
            var root2 = (Math.sqrt(-delta)) / 2 * a;
            console.log("First root : " + root1, "i :", root2);
            console.log("Second root : " + root1, "-i :", root2);
        }
        else {
            console.log("Invalid number.....  :( ");
        }
    },
    swapNibble: function (mainstr) {
        var tempString = mainstr.substring(0, 4);
        mainstr = mainstr.substring(4, 8);
        mainstr = mainstr + tempString;
        return mainstr;
    },
    findNumber: function (low, high, read) {
        var mid = low + Math.floor((high - low) / 2);
        console.log(mid);
        if (low < high) {
            if (low == high - 1) {
                var c;
                c = read.question("Is the number " + low + " if yes, press 'Y'. Else Press 'N' : ");
                if (c == 'y')
                    return low;
                if (c == 'n')
                    return high;
            }
            c = read.question("Is the number " + mid + -+high + " if yes, press 'Y'. Else Press 'N' : ");
            if (c == 'y')
                mid = this.findNumber(mid, high, read);
            if (c == 'n')
                mid = this.findNumber(low, mid - 1, read);
        }
        return mid;
    },
    monthlyPayment: function (principal, year, rate) {
        var n = 12 * year;
        var r = (rate / (12 * 100));
        var payment = ((principal * r) / ((1 - Math.pow((1 + r), -n))));
        console.log("Your EMI for every month is : " + payment);
    }
};
