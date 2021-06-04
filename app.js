function power(a,b){
    for(i=b;i>0;i--)
    { res *= a;}


}
var digit=+prompt("Enter a digit")
var pow=+prompt("Enter it's power")
var res=1;
 power(digit,pow);
document.write("answer is ", res)

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

var answer=leapYear(leap);
var leap=+prompt("Enter year and find is it a leap year or not")
console.log(answer)
if(answer===true){document.write("No, it is not a leap year")}
else{document.write("<br/>Yes, it is a leap year")}
