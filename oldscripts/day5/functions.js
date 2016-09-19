//create an arguement with no parameters and no arguments

function greetings (){
    console.log("Weekend is near o.0");
}
greetings ();
greetings ();


//
function greetings (name){
    console.log("Weekend is near o.0 ", name);
}
greetings ("name");


// function helloWorld(){
//     console.log("Hello World!);

// helloWorld();

function helloWorld (name){
    console.log("Hello:  ", name);
}
helloWorld ("Deb");


// challenge create a function that adds 
//2 numbers togther then return the results


function add (x,y){
    return x+y;
}
var result = add (3,4);
console.log(result);
//instruct
function add (num1,num2){
    return num1 + num2;
}
console.log(add(3,4)); 





function multiply (x,y){
    return x * y;

}
var result = multiply (6,9);
console.log(result);

function subtract (x,y){
    return x - y;
    }
var result = subtract (950,800);
console.log (result);


//Write a function that return true if the number passed in is even, false otherwise

function isEven(num){
    return num % 2 ==0;     // the ==  (or others like <=,>= and othersis where the comparison between true and false works
    }
 var result = isEven (47);    //this is calling the function ?
console.log (result ? "Even" : "odd");    ///this says if the var is "TRUE" (in this case "result" is even) write even  but if false (else :) write odd


 
//Write a minimum function that takes two numbers and returns the smaller of the two.

function isSmall (num1, num2){
    return num1 < num2;
}
var result = isSmall (87, 2);
console.log (result ? "num1" : "num2");


//correct;
function isSmall(num1, num2){
    if(num1 < num2){
    return num1;
}else{
    return num2;
}
}
var result = isSmall (87, 2);
console.log (result);


//write a function that takes in an array of numbers have it return the average array
//: [10,20,30,40]



function average (array){
    var totalArray = 0;
    for (var i =0; i < array.length; i++){
        totalArray = totalArray + array[i];
}
return totalArray/array.length
}
var myArr = [10,20,30,40];
var myAvg = average  (myArr);
console.log(myAvg); 



//SILVER - reverse the string "kentucky" then write out the solution
var reverse = "";
var ken = "kentucky";
for(var d = ken.length - 1; d >= 0; d--){
reverse = reverse + ken [d];
}

console.log(reverse);



//GOLD sort the numbers [8,6,7,5,3,0,9] 















