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


function calcTriangleArea(a, b, c)
{
  function calcSide(a, b, c)
  {
    var s = (a + b + c) / 2;
    return s;
  }
  var s = calcSide(a, b, c);
  if (s <= a || s <= b || s <= c)
  {
    return undefined;
  }
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
var a = +prompt("Enter a:");
var b = +prompt("Enter b:");
var c = +prompt("Enter c:");
var triangleArea = calcTriangleArea(a, b, c);
if (triangleArea == undefined)
{
  alert("By triangle inequality, such a triangle does not exist!");
}
else
{
  document.write("<h1>Area Of Triangle</h1>");
  document.write("The three sides of triangle are: <b>" + a + ", " + b + ", " + c + "</b>.<br />");
  document.write("Its area is <b>" + triangleArea + "</b>.");
}


function mainFunction(marks1, marks2, marks3)
{
  function average(marks1, marks2, marks3)
  {
    return Math.round((marks1 + marks2 + marks3) / 3);
  }

  function percentage(marks1, marks2, marks3)
  {
    var percentage = ((marks1 + marks2 + marks3) / 300) * 100;
    return percentage;
  }
  var totalObtained = marks1 + marks2 + marks3;
  var average = average(marks1, marks2, marks3);
  var percentage = percentage(marks1, marks2, marks3);
  document.write("<h1>Report Card</h1>");
  document.write("Individual marks for each subject: <b>" + marks1 + ", " + marks2 + " and " + marks3 + "</b><br />");
  document.write("Total marks: <b>300</b><br />");
  document.write("Obtained marks: <b>" + totalObtained + "</b><br />");
  document.write("Average: <b>" + average + "</b><br />");
  document.write("Percentage: <b>" + percentage + "</b><br />");
}
var marks1 = +prompt("Enter marks of 1st subject:");
var marks2 = +prompt("Enter marks of 2nd subject:");
var marks3 = +prompt("Enter marks of 3rd subject:");
mainFunction(marks1, marks2, marks3);


function strIndex(text, str)
{
  for (var i = 0; i < text.length; i++)
  {
    if (text.slice(i, i + str.length) === str)
    {
      return i;
    }
  }
  return -1;
}
text = prompt("Enter some text: ");
string = prompt("Enter a segment to find: ");
var stringIndex = strIndex(text, string);
document.write("<h1>Index Finder</h1>");
if (stringIndex != -1)
{
  document.write("The string " + "'" + string + "'" + " is present at index " + stringIndex + " of the given text.");
}
else
{
  document.write("The string " + "'" + string + "'" + " is not present anywhere in the given text.")
}


function deleteVowels(str) {
  var i = 0, vowelFound = false;
  while (i < str.length) {
          if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
                  str = str.slice(0, i) + str.slice(i+1);
                  vowelFound = true;
          } else 
          {
                 ++i;
          }
  }
  if (vowelFound) {
          return str;
  }
  else {
          return -1;
  }
}
string = prompt("Enter some text: ");	
var noVowelString = deleteVowels(string);
document.write("<h1>Vowel Remover</h1>");
if (noVowelString === -1) {
  document.write("Your string is already vowel free.");
}
else {
  document.write("Original String: <b>" + string + "</b><br />");
  document.write("Vowel Free String: <b>" + noVowelString);
}


function countVowelPairs(str) {
  str = str.toLowerCase();
  var i = 0, count = 0;
  while (i < str.length) {
          switch (str[i]) {
                  case "a":
                  case "e":
                  case "i":
                  case "o":
                  case "u":
                     switch (str[i+1]) {
                             case "a":
                             case "e":
                             case "i":
                             case "o":
                             case "u":
                                count += 1;
                    }
        }
        ++i;
  }
  return count;
}
string = prompt("Enter text to count vowel pairs in it: ");
var vowelPairs = countVowelPairs(string);
document.write("<h1>Vowel Pair Counter</h1>");
if (vowelPairs === 0) {
  document.write("There are no vowel pairs in this text.");
}
else if (vowelPairs === 1) {
  document.write("There is only one vowel pair in this text.")
}
else {
  document.write("There are " + vowelPairs + " vowel pairs in this text.");
}


function kmToMeters(km) {
  var metersInKm = 1000;
  var meters = 0;
  while (metersInKm > 0) {
          meters += km;
          --metersInKm;
  }
  if (meters % 1 != 0) {
          return meters.toFixed(2);
  }
  return meters;
}
function kmToFeet(km) {
  var feetInKm = 1000 * 3.281;
  var feet = 0;
  while (feetInKm > 0) {
          feet += km;
          --feetInKm;
  }
  if (feet % 1 != 0) {
          return feet.toFixed(2);
  }
  return feet;
}
function kmToInches(km) {
  var inchesInKm = 1000 * 3.281 * 12;
  var inches = 0;
  while (inchesInKm > 0) {
          inches += km;
          --inchesInKm;
  }
  if (inches % 1 != 0) {
          return inches.toFixed(2);
  }
  return inches;
}
function kmToCentimeters(km) {
  var cmInKm = Math.round(1000 * 3.281 * 12 * 2.54);
  var cm = 0;
  while (cmInKm > 0) {
          cm += km;
          --cmInKm;
  }
  if (cm % 1 != 0) {
          return cm.toFixed(2);
  }
  return cm;
}
distanceInKm = prompt("Enter distance between cities in kilometers: ");
distanceInKm = Number(distanceInKm);
var meters = kmToMeters(distanceInKm);
var feet = kmToFeet(distanceInKm);
var inches = kmToInches(distanceInKm);
var cm = kmToCentimeters(distanceInKm);
document.write("<h1>Distance Between Cities</h1>");
document.write("<p>In Kilometers: " + distanceInKm + "</p>");
document.write("<p>In Meters: " + meters + "</p>");
document.write("<p>In Feet: " + feet + "</p>");
document.write("<p>In Inches: " + inches + "</p>");
document.write("<p>In Centimeters: " + cm + "</p>");


function calcOvertimePay(jobHours, hoursWorked) {
  var extraHours = hoursWorked - jobHours;
  var overtimePay = extraHours * 12;
  return overtimePay;
}
var jobHours = 40;
var hoursWorked = "";
hoursWorked = prompt("Enter number of hours worked:");
var overtimePay = calcOvertimePay(jobHours, hoursWorked);
document.write("<h1>Overtime Pay Calculator</h1>");
if (overtimePay === 0) {
  document.write("You didn't work more than the normal job time!");
}
else if (overtimePay > 0){
  document.write("Your overtime pay is " + overtimePay + " Rs.")
}	
else {
  document.write("You underworked! How can YOU expect an overtime pay?");
}

//Question 10
function notesChange(amount) {
  var notesIn100 = 0, notesIn50 = 0, notesIn10 = 0;
  while (amount >= 100) {
          amount -= 100;
          notesIn100 += 1;
  }
  while (amount >= 50) {
          amount -= 50;
          notesIn50 += 1;
  }
  while (amount >= 10) {
          amount -= 10;
          notesIn10 += 1;
  }
  return [notesIn100, notesIn50, notesIn10];
}
amount = prompt("Enter the amount to receive change: ");
var changedAmount = notesChange(amount);
var hundredNotes = changedAmount[0];
var fiftyNotes = changedAmount[1];
var tenNotes = changedAmount[2];
document.write("<h1>Note Changer</h1>")
document.write("Your amount: <b>" + amount + " Rs.</b><br />");
document.write("Your change: <b>")
if (hundredNotes > 0) {
  document.write(hundredNotes + " hundred note(s)");
  if (fiftyNotes === 0 && tenNotes === 0) {
          document.write(".");
  }
  else if (fiftyNotes > 0 && tenNotes > 0) {
          document.write(", ");
  }
  else if (fiftyNotes > 0 || tenNotes > 0) {
          document.write(" and ");
  }
  else {
          document.write(".");
  }
}
if (fiftyNotes > 0) {
  document.write(fiftyNotes + " fifty note(s)");
  if (tenNotes > 0) {
          document.write(" and ");
  }
  else {
          document.write(".");
  }
}
if (tenNotes > 0) {
  document.write(tenNotes + " ten note(s).")
}
document.write("</b>");