//Very Easy 
// Write a function named min that takes two arguments and returns their minimum.

function min(num, numTwo) {
  return Math.min(num, numTwo);
}

// Easy 
// Create an array of students holding their last name,
//  first name, and age with 3 students. To validate, 
//  please log a greeting with the first name,
//   last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

var students = [["viloria", "Paula", 20],
 ["minion", "Stew", 500],
 ["Puebla", "Eddie", 19]
]

console.log(`Helo, my name is ${students[0][1]} and I'm ${students[0][2]} years old`)


// Medium 

months = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"];

var user = prompt("enter a number:");

if(user < 1 || user > 12) {
  console.log("number is invalid purrr");
} else {
  console.log(months[user-1]);
}


// Hard

var Paula = [ 9, 8];
var Eddie = [ 10, 45];

var p_bmi = Paula[1] / (Paula[0] * Paula[0]);
var e_bmi = Eddie[1] / (Eddie[0] * Eddie[0]);

var answer = false;

if (p_bmi > e_bmi) {
  answer = true;
} 

console.log(`Is Paula's BMI higher than Eddie's? ${answer}`)
