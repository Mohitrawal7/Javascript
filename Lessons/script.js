// arithmetic operators
let a=2;
let b=3;

/* console.log("a + b = ",a + b);
console.log("a - b = ", a-b);
console.log("a - b = ", a * b);

console.log("a++ =", a++ );
console.log("a =", a);
console.log("++a =", ++a);
*/

/*
  a /= 4; //  a/4 =1
a**=4 // a= a**4
console.log("a =",a); 
*/ 

//practice 1
let n = prompt("Enter a number");
if(n%5===0){
    console.log("It is a multiple of 5.");
} else{
    console.log("It is not an multiple of 5.");
}

//practice 2
let score = prompt("Enter score");

if(score >=90 && score<=100){
    console.log("Student has secured A grade.");
} 
else if(score < 90 && score >= 70){
    console.log("Student has secured B grade.");
}
else if(score >= 60 && score < 70){
    console.log("Student has secured C grade.");
}
else if(score >= 50 && score < 60){
    console.log("Student has secured D grade.");
}
else if (score >=0 && score<50){
    console.log("Student has secured D grade.");
}
else{
    console.log("Error in scoring");
}