/*Quiz Questions in Lecture



Class Quiz

let a =10;

console.log("++a =", ++a); 
console.log("a++ =", a++); 
console.log("--a =", --a);
console.log("a-- =", a--);
console.log("++a =",++a);
console.log("a =", a);
console.log("a-- =", a--);

print 11, 11,11,11,11,11,11
value 11, 12, 11, 10, 11, 11, 10

Quick Quiz

Write a JS program to store a name, phone number and marks of a student using Object.
let student = {
firstName : "Sharjeel",
phoneNumber : 92300220885244,
urduMarks : 85,
englishMarks : 75
}

console.log(student);

Chapter # 01 Practise set

Question # 01
Create a variable of type string and try to add a number to it.
let number = "Hello World";
let b = 45;
console.log(number+" "+b);

Question # 02
Use typeof operator to find the datatype of the string in the last question.
console.log(typeof((number+" "+b)));

Question # 03
Create a const object in jS can you change it to hold a number in it later?
const hello = {
    fistName : "Jawan",
    institute : "SAIM",
    class : "web development",
    fees : 45000
}
console.log(hello);
console.log("No const can not be assigned again");

Question # 04
Try to add a new key to the const object in problem 3 were you able to do it?
hello["last name"] = "hassan";
hello['phone'] = 123;
console.log(hello);

Question # 05
Write a JS program to create a word meaning dictionary of 5 words.

const dictionary = {
    absence : "The lack or unavailability of something or someone",
    baffle : "An event or thing that is a mystery and confuses.",
    banter : " Conversation that is teasing and playful. ",
    decisive : "a person who can make decisions promptly",
    hogwash: "Insincere or useless statements.",
}
console.log(dictionary);

Practise set Chapter -02
Question #01
Use logical operator to find whether the age of a person lies between 10 and 20?

let aged = +prompt("Enter your age",15);
if(aged<=20 && aged>=10 ) {console.log("You are good to go");
}
else{
    console.log("Your age is not between 10 and 20");
}

Question # 02
Demonstrate the use of case switch statement in JS.

Question # 03
Write a JS program to find whether a number is divisible by 2 and 3.

yahan main yeh try kar raha tha ka jo number input ho uska sum inkal lon, individual number ka 
console.log(typeof divNum, divNum);
let divNum3 =toString(divNum).split("")
console.log(typeof divNum3, divNum3);
 let divNum3Sum = for(let i=0;) 

let divNum = parseInt(prompt("Enter the number"));
if((divNum % 2 == 0 )&&(divNum % 3 == 0 ) ){console.log("The number is divisible by 2 and 3")
}else {
    console.log("Number is lumber");
}

Question # 04
Write a JS program to find whether a number is divisible by 2 or 3.


Question # 05
Print "You can drive" or "you can not drive" based on the age being greater than 18 using ternary operator
let age = prompt("Enter the age");
(age >18) ? "You can drive" : "you can not drive";

Chapter 4
Question # 01

What will be the following print in jS
console.log("har\"".length);

Question # 02
Explore the includes, starts with & ends with functions of String.

Question # 03
Write the program to convert the given string to lower case.
let str = "CODE WITH HARRY";
console.log(str.toLowerCase());
console.log(str);
Question # 04
Extract the amount out of this String, "Please give Rs 1000"

let extract = "Please give Rs 1000";

let extrAmount = console.log(extract.slice(14));

let amountSlpit = console.log(extract.split(" "));

for(i=0;i<4;i++){
    if(amountSlpit[i] == 1000) {
        console.log("The extracted amount is 1000 " + "at the postion of "+ i);
    }
}
Question # 05
Try to change 4th character of a given string .Were you able to do it?

let characterChange = "Karachi";
characterChange[4] ="p";
console.log(characterChange);

let characterChangeTry=characterChange[4] ="p";
console.log(characterChangeTry);

let arrChange =["one", "two", "three", "four", "five"];
console.log(arrChange);
arrChange[4]="ten";
console.log(arrChange);
*/

// Ch1 ( All quiz and practise done)
// Ch2 (All practise done, there were no Quiz in this chapter)
// Ch3 (All practise done, there were some Quiz remaining in this chapter)
// Ch4 (All practise done, Quiz also done)
// Ch5 (Some questions are remaining)
// Ch6 ()
// Ch7 ()
// Ch8 ()
// Ch9 ()




// Quiz Questions in Lecture
// Chapter 1 Class Quiz
// let a =10;

// console.log("++a =", ++a); 
// console.log("a++ =", a++); 
// console.log("--a =", --a);
// console.log("a-- =", a--);
// console.log("++a =",++a);
// console.log("a =", a);
// console.log("a-- =", a--);

// print 11, 11,11,11,11,11,11
// value 11, 12, 11, 10, 11, 11, 10

// Quick Quiz

// Write a JS program to store a name, phone number and marks of a student using Object.
// let student = {
// firstName : "Sharjeel",
// phoneNumber : 92300220885244,
// urduMarks : 85,
// englishMarks : 75
// }

// console.log(student);

// Chapter # 01 Practise set

// Question # 01
// Create a variable of type string and try to add a number to it.
// let number = "Hello World";
// let b = 45;
// console.log(number+" "+b);

// Question # 02
// Use typeof operator to find the datatype of the string in the last question.
// console.log(typeof((number+" "+b)));

// Question # 03
// Create a const object in jS can you change it to hold a number in it later?
// const hello = {
//     fistName : "Jawan",
//     institute : "SAIM",
//     class : "web development",
//     fees : 45000
// }
// console.log(hello);
// console.log("No const can not be assigned again");

// Question # 04
// Try to add a new key to the const object in problem 3 were you able to do it?
// hello["last name"] = "hassan";
// hello['phone'] = 123;
// console.log(hello);

// Question # 05
// Write a JS program to create a word meaning dictionary of 5 words.

// const dictionary = {
//     absence : "The lack or unavailability of something or someone",
//     baffle : "An event or thing that is a mystery and confuses.",
//     banter : " Conversation that is teasing and playful. ",
//     decisive : "a person who can make decisions promptly",
//     hogwash: "Insincere or useless statements.",
// }
// console.log(dictionary);

// Practise set Chapter -02
// Question #01
// Use logical operator to find whether the age of a person lies between 10 and 20?

// let aged = +prompt("Enter your age",15);
// if(aged<=20 && aged>=10 ) {console.log("You are good to go");
// }
// else{
//     console.log("Your age is not between 10 and 20");
// }

// Question # 02
// Demonstrate the use of case switch statement in JS.

// const day = "sunday";
//  switch (day) {
//      case "monday":
//          console.log("Monday is the fun day")
//          break;
//      case "tuesday":
//      console.log("Tuesday ko bachat bazar lagtahy")
//      break;
//      case "wednesday" :
//          case "thursday" :
//      console.log("Long working day")
//       break;
//      case "friday" :
//      console.log("my last working week day")
//      break;
//      case "saturday":
//  case "sunday":
//       console.log("Minhaj will work in these days")
//                      break;
//      default:
//          console.log("Ghr jao sojao")
//          break;
//  }

// Question # 03
// Write a JS program to find whether a number is divisible by 2 and 3.

// let divNum = +prompt("Enter the number");
// if((divNum % 2 == 0 )&&(divNum % 3 == 0 ) ){console.log("The number is divisible by 2 and 3")
// }else {
//     console.log("Number is lumber");
// }

// Question # 05
// Print "You can drive" or "you can not drive" based on the age being greater than 18 using ternary operator
// let age = prompt("Enter the age");
// (age >18) ? console.log("You can drive") : console.log("you can not drive");

// Chapter 3 Class Quiz
// Write a sample for loop of your choice.

// ANS: Lets take example of table and factorial.
// I will write table of number input by user.
// let inputNum = parseInt(prompt("Enter the number please of generating the table"));
// for (let i=1;i<=12;i++){
//     console.log(`${inputNum} x ${i} = ${i*inputNum}`);
// }
// console.log(`Thanks for using my program to generate the table of asked number`)

// Now lets make the factorial class quiz
// let fact=1;
// let inputFactor = parseInt(prompt("Enter the number please for the factorial thing"));
// for(let i=inputFactor;i>=1;i--){
//     fact *=i ; 
// }
// console.log(`Factorial of ${inputFactor} is ${fact}`);

let string1 = "Sharjelhasan";
for (let i = 0; i <string1.length;i++){
console.log(`The indivdual letter of ${string1} is ${string1[i]}`)
}

// Chapter 3 Class Quiz
// Write a sample program demonstrating for-in Loop.
let chp3ClassQuiz1 = ["sharjeel", "hassan", 1, 2, 33, 4];
for (let array in chp3ClassQuiz1 ){
    console.log(`This is the array using for-in loop in array ${array}`);
}

let chp3String = "Sharjeel Hassan";
for(let sting in chp3String){
    console.log(`This is the for in loop for String ${sting}`);
}

let chpObj = {
    sharjeel : 32,
    umer : 24,
    awais :25
}
for(let obj in chpObj){
    console.log(`This is the for in loop of Object ${obj}`);
}

 

//  Write a sample program demonstrating for-of Loop.
for(let array of chp3ClassQuiz1 ){
    console.log(`The array for, for of loop is ${array}`);
}

for(let string of chp3String){
    console.log(`The string for, for of loop is ${string}`);
}

// Write a sample program demonstrating while Loop.

// Write a sample program demonstrating do-while Loop.

// Chapter 3 Practise Set

// Chapter 3 practis set

// Question #1
//Write a progam to print the marks of a student in an object using for loop,
let obj = {
harry : 98,
rohan : 70,
aakash : 7
}
for(let i=0; i<(Object.keys(obj)).length;i++){
console.log(`the marks of ${Object.keys(obj)[i]} are ${obj[Object.keys(obj)[i]]}`)
}

// Question #2
// Write the program in Q1 using for in loop.

for (let key in obj){
    console.log(`the marks of ${key} are ${obj[key]}`);
}

// Question #3
// Write a program to print "try again" until the user enters the correct number.

// let input = prompt("Enter number")
// (input==2) ? console.log("great") : console.log("try again")

// let numb = 45;
// let user = parseInt(prompt("Enter number"));

// for (let i=0;i<100;i++){
//     if(i == numb){
//         prompt("enter number");
//     }

// }
// Code with Harry ka solution hy yeh
// let cn = 45;
// let i;
// while(i!=cn){
//     console.log("try again", i);
//     i = prompt("enter number");
// }
// console.log("Correct NIKAL AB");

// Question #4
// Write a function to find mean of 5 numbers.

// let numb5 = [];
// while(numb5.length !== 5){
//     numb5.push(parseInt(prompt("enter number")));
//     console.log(numb5)
// }
// let sum=0;
// for (let i=0; i<numb5.length; i++ ){
//     sum += numb5[i];
//     console.log(sum,i)
// }
// console.log(sum/numb5.length);

// function mean(a,b,c,d,e){
//     let means = (a+b+c+d+e)/5;
//     return means;
// }

// let meant = console.log("the mean is " + mean(1,2,3,4,5));

// Chapter 4 Class Quiz

// Use a for loop to print a string
// let stringBe = prompt("Enter the string, write the name please");
// let ff;
// for (let i = 0; i < stringBe.length; i++){
//      ff= console.log(stringBe[i]);
// }

// Chapter 4 practis set

// Question #1
// What will the following print in JS?
// console.log("har\"".length);

// Question 2
// Explore the includes, starts with & ends with functions of a string.
let wrdInclude = "The big brown dog is cute and small";
let wordToLook = "bigs";
console.log(`the word ${wordToLook} ${wrdInclude.includes(wordToLook) ? "is" : "is not" } included in the sentence. `)

// Question 3
// Write a program to convert a given string to lower case
let stringCase = "CODE WITH HARRY";
let strCase = stringCase.toLowerCase();
console.log(stringCase + "is the original string");
console.log(strCase + "after using to lowercase");

// Question 4
// Extract the amount out of this string.
let chp4Q4 = "Please give Rs 1000";
let index1000 = chp4Q4.indexOf("1000");
console.log(index1000);
let extractAmount = chp4Q4.slice(chp4Q4.indexOf("1000"),19)
console.log(extractAmount);

// Question 5
// Try to change 4th character of a given string were you able to do it?
// let changeChar = prompt("Enter any statement to change its 4h character");
// let char4th = changeChar.replace(changeChar.charAt(4),"ponka");
// console.log(char4th);

// Chapter 5 class Quiz
// Print an array using for loop.

let arrayToPrint = [1,23,"sharjeel","umer", true, false];
console.log(arrayToPrint);
for (let i = 0; i< arrayToPrint.length;i++){
    console.log("The part of array is ",arrayToPrint[i]);
}

let arr=[1,2,4,"hh","jhk"];
let arrString = arr.toString();
console.log(typeof arr, arr);
console.log(typeof arrString, arrString);

//Chapter 5 Array
// Class Quiz

// let array1Class = [1, 2, 45, "abc", "xyz", true, false, null];

// for(let i = 0; i < array1Class.length; i++) {
//     console.log(i,array1Class[i]);
// }

// Question # 01
// Create an array of numbers and take input from the user to add numbers to this array.

// let arrayNumber = [prompt("Enter the number"), prompt("Enter 2nd number"), prompt("Enter 3rd number")];
// console.log(arrayNumber);

// Question # 02
// Keep adding numbers to the array in Question 1 until 0 is added to the array.

// Question # 03
// Filter for numbers divisible by 10 from a given array.

// Question # 04
// Create an array of square of given numbers.
// let arrSqr = [prompt("Enter the number"), prompt("Enter 2nd number"), prompt("Enter 3rd number"), prompt("Enter 4th number"), prompt("Enter 5th number")];

// for (let i = 0; i<arrSqr.length; i++){
//     console.log(`Square of number ${arrSqr[i]} is ` + arrSqr[i]*arrSqr[i]);
// }

// Question # 05
// Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated).

//Write a progam to print the marks of a student in an object using for loop,
let objz = {
    harry : 98,
    rohan : 70,
    aakash : 7
    }

    // for (let i = 0; i <objz.length;i++){

    // }
console.log(Object.entries(objz));
console.log(Object.values(objz));
console.log(Object.keys(objz));

