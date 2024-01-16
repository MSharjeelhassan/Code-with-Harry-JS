// Quiz Questions in Lecture




// Class Quiz

let a =10;

console.log("++a =", ++a); 
console.log("a++ =", a++); 
console.log("--a =", --a);
console.log("a-- =", a--);
console.log("++a =",++a);
console.log("a =", a);
console.log("a-- =", a--);

// print 11, 11,11,11,11,11,11
// value 11, 12, 11, 10, 11, 11, 10

// Quick Quiz

// Write a JS program to store a name, phone number and marks of a student using Object.
let student = {
firstName : "Sharjeel",
phoneNumber : 92300220885244,
urduMarks : 85,
englishMarks : 75
}

console.log(student);

// Chapter # 01 Practise set

// Question # 01
// Create a variable of type string and try to add a number to it.
let number = "Hello World";
let b = 45;
console.log(number+" "+b);

// Question # 02
// Use typeof operator to find the datatype of the string in the last question.
console.log(typeof((number+" "+b)));

// Question # 03
// Create a const object in jS can you change it to hold a number in it later?
const hello = {
    fistName : "Jawan",
    institute : "SAIM",
    class : "web development",
    fees : 45000
}
console.log(hello);
console.log("No const can not be assigned again");

// Question # 04
// Try to add a new key to the const object in problem 3 were you able to do it?
hello["last name"] = "hassan";
hello['phone'] = 123;
console.log(hello);

// Question # 05
// Write a JS program to create a word meaning dictionary of 5 words.

const dictionary = {
    absence : "The lack or unavailability of something or someone",
    baffle : "An event or thing that is a mystery and confuses.",
    banter : " Conversation that is teasing and playful. ",
    decisive : "a person who can make decisions promptly",
    hogwash: "Insincere or useless statements.",
}
console.log(dictionary);

// Practise set Chapter -02
// Question #01
// Use logical operator to find whether the age of a person lies between 10 and 20?

let aged = +prompt("Enter your age",15);
if(aged<=20 && aged>=10 ) {console.log("You are good to go");
}
else{
    console.log("Your age is not between 10 and 20");
}

// Question # 02
// Demonstrate the use of case switch statement in JS.

// Question # 03
// Write a JS program to find whether a number is divisible by 2 and 3.

let divNum = +prompt("Enter the number");
if((divNum % 2 == 0 )&&(divNum % 3 == 0 ) ){console.log("The number is divisible by 2 and 3")
}else {
    console.log("Number is lumber");
}

// Question # 05
// Print "You can drive" or "you can not drive" based on the age being greater than 18 using ternary operator
let age = prompt("Enter the age");
(age >18) ? "You can drive" : "you can not drive";