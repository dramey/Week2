//Deb Ramey, Scott Bowen, September 16, 2016

//Problem 1 
//Show how you would determine the location of the number 27 in the array:
//var numArray = [18, 24, 57, 98, 45 27, 3, 456, 3, 35, 85];
//Store its location in a variable.
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
var numINeed = numArray.indexOf(27);
console.log(numINeed);


// Problem 2
//Using the same array from Problem 1, calculate the sum of 
//all numbers in the array and assign the sum to a variable

var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
var total = 0; 
for (var d = 0; d < numArray.length; d++){
    total = total + numArray [d];
   
}
 console.log (total);

//Problem 3
//Initialize a new array and fill it with 
//the numbers 1 through 10. Then, remove the last element of 
//the array. Output the array to the console.

var myArray = [1,2,3,4,5,6,7,8,9,10];
myArray.pop ();
console.log(myArray);

//Problem 4
//Create a function with two parameters. This function will be passed
// two numbers as arguments. Calculate the sum of the parameters. If the 
//sum is less than or equal to 25, the function should return true. If
// not it should return false. Be sure to use an appropriate function name.

function IsNumLessThan(num1, num2){
    if ((num1 + num2) <= 25){
    console.log("The statement is true");
} else {
    console.log("The statement is false");
}
}
var result = IsNumLessThan(8,18);

//Problem 5
//Create a function with two parameters. 
//This function will be passed two strings as arguments. 
//Combine both of these strings and assign the result to a variable. 
//If this new string is longer than 12 characters, return "Error, 
//string too long.". Otherwise, return the variable that stores the new 
//string. Be sure to use an appropriate function name.

function addMyString(myString1, myString2){ 
    sum = myString1.length + myString2.length; 
    if(sum > 12){
    console.log("Error, string too long");
} else {
      console.log(sum);
}
}
var result = addMyString("hello and  ", "goodbye"); 



//Problem 6

//Design a while loop that counts from 0 to 20 using the variable num. 
//If num is between 0 and 5 output "Very Low Number" to the console.
// If it is between 6 and 10 output "Low Number" to the console. //
//If it is between 11-15 output "High Number" to the console. 
//For everything else output "Very High Number" to the console.
//Contact 

var num = 0;

while(num < 20){
num = num + 1;
 if (num <= 5) {
    console.log ("Very Low Number");
} else  if (num == 6  || num <= 10){
    console.log ("Low Number");
 }else  if (num == 11 || num <= 15){
    console.log ("High Number");
 }else { console.log ("Very High Number")
}}


