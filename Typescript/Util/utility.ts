const readline = require('readline-sync');
module.exports=
{
 writeFile(fileName:any,data:any):any
    {
    const fs:any = require('fs');
    fs.writeFile(fileName, data, function(err:any) {
    if(err){
    return console.log(err);
}
//console.log("The file is saved!");
}); 
    },

    isPrime(number:number):boolean
    {
        if(number==0 || number == 1)
        {
            return false;
        }
        else
        {
            for (let index:number = 2; index < number; index++)
            {
                if (number % index == 0) 
                {
                    return false;
                }
            }
            return true;
        }
    },
callFile():any
{
    var fileStream:any = require('fs');
    var f :any= fileStream.readFileSync('file.txt', 'utf8');
    console.log(f);
    var arr :any= f.split(' ');
    return arr;
},
/************************************ file CAll **********************************/
fileCall():any 
{
    var fileStream :any= require('fs');
    var f:any = fileStream.readFileSync('File.txt', 'utf8');
    var arr:any = f.split(' ');
    return arr;
},

fileCalls(name) : any
{
    var fileStream:any = require('fs');
    var f:any = fileStream.readFileSync(name, 'utf8');
    var arr:any = f.split(' ');
    return arr;
},


dayOfWeek(d:number, m:number, y:number) :number{   //To calculate the date 
    var v :number= Math.floor((14 - m) / 12)
    var y0 :number= y - v
    var x :number= y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400)
    var m0 :number= m + 12 * Math.floor((14 - m) / 12) - 2
    var d0 :number= (d + x + Math.floor((31 * m0) / 12)) % 7
    d0 = Math.floor(d0)
    console.log("Type Your DOB here...!!!!")
    return d0
},
    leapYear(year:number):boolean         //To find a leap year...
    {
    if (year%4 ==0 && year%100!=0 || year%400==0)
    {
        return true;
    }
    else
    {
        return false
    }
    
},
    monthof(m:number):any {             //Iterate a month...
    switch (m) {
        case 1: return 31;
            break;
        case 2: return 28;
            break;
        case 3: return 31;
            break;
        case 4: return 30;
            break;
        case 5: return 31;
            break;
        case 6: return 30;
            break;
        case 7: return 31;
            break;
        case 8: return 31;
            break;
        case 9: return 30;
            break;
        case 10: return 31;
            break;
        case 11: return 30;
            break;
        case 12: return 31;
            break;

    }
},
    bubbleSort(datas:any):any // To sort the given numbers...
    {  
    var j:number;var i:number;
    var temp:number;var n:number;
    for(i=1;i<=datas;i++){
    for(j=0;j<=datas-i;j++){
        if(datas[j]>datas[j+1]){
            temp = datas[j];
            datas[j]=datas[j+1];
            datas[j+1]=temp;
        }
    }
}
    return datas;


    }


}