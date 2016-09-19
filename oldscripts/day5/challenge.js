//Scotts Weekend Challenge ---  NOT REQUIRED.  
//JavaScript Challenges

//DICE ROLL
//bronze challenge - write a function to obtain random values for each dice rolled.
//                   display value of each dice and their combined total.  Remember there are 2 dice in the game.
//silver challenge - if total of both dice is 7 display  "Lucky 7"  
//                   if total of both dice is 2 display "Snake Eyes"...all other totals display values
//gold challenge   - have game run 5 times automatically and display roll number as well
//                 - Example.   Dice Roll 1 ,  Dice Roll 2....etc (edited)  
//As always NOT REQUIRED.....Just some good Function, if and loop practice.
//BRONZE
var dice1 = Math.floor((Math.random() * 6) + 1);
var dice2 = Math.floor((Math.random() * 6) + 1);
var totalOfTwo = dice1 + dice2;
console.log("Dice One amount = " + dice1 +  "  Dice Two amount = " + dice2 + "  Total of both dice = " + totalOfTwo);

//SILVER
var dice1 = Math.floor((Math.random() * 6) + 1);
var dice2 = Math.floor((Math.random() * 6) + 1);
var totalOfTwo = dice1 + dice2;
if(totalOfTwo === 7){
    console.log("Dice One amount = " + dice1 +  "  Dice Two amount = " + dice2 + "  Total of both dice = " + "Lucky 7");
} else if (totalOfTwo === 2){
    console.log("Dice One amount = " + dice1 +  "  Dice Two amount = " + dice2 + "  Total of both dice = " + "Snake Eyes");
} else {
    console.log("Dice One amount = " + dice1 +  "  Dice Two amount = " + dice2 + "  Total of both dice = " + totalOfTwo);
}
//GOLD 

var roll = 5;
var x = 0;
while(x !== roll){
    x++;
  dice1 = Math.floor((Math.random() * 6) + 1);
  dice2 = Math.floor((Math.random() * 6) + 1);
  totalOfTwo = dice1 + dice2;
   console.log("Dice Roll " + x +  "  Dice One amount = " + dice1 +  "  Dice Two amount = " + dice2 + "  Total of both dice = " + totalOfTwo);
}

//I challenged myself and asked how would I add the total of all rolls
//together after every throw of the dice and figured this code below out:

var roll = 5;
var x = 0;
var grandTotal = 0;
while(x !== roll){
    x++;
  dice1 = Math.floor((Math.random() * 6) + 1);
  dice2 = Math.floor((Math.random() * 6) + 1);
  totalOfTwo = dice1 + dice2;
  grandTotal = grandTotal + totalOfTwo;
   console.log("Dice Roll " + x +  "  Dice One amount = " + dice1 +  
   "  Dice Two amount = " + dice2 + "  Total of both dice = " + totalOfTwo + " Cumulative total of all rolls as we go " + grandTotal);
}




