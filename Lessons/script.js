// arithmetic operators
// let a=2;
// let b=3;

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

/*

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
    */

//-------- loop and strings------------>

/*for (let count =1 ; count <= 5 ;count++){
    console.log("Apna College");
}

let   i = 1;
while(i<=5){
    console.log("i =",i)
    i++;
}

let m = 20;
do{
    console.log("Apna College");
    m++;
}while(m<=10);

//for of loop
let str = "ApnaCollege";
for(let i of str){
    console.log(i);
};

//for in loop
let student = {
    name: "rahul kumar",
    age : 20,
    cgpa : 3,
    isPass : true
}

for ( let key in student){
    console.log("key = ",key ,", value = ", student[key]);
}


//practice 1

for (let i=2;i<=100;i++){
    if(i%2===0){
        console.log(i);
    }
}
let i=2;
while(i<=100){
    console.log(i);
    i=i+2;
}
 
let a = Math.floor(Math.random()*100);;
console.log(a);

let b = prompt("enter a number");
while(a!=b){
b = prompt("You guessed wrong.Guess again. ")
}
console.log("Congratulations, You entered right number")
*/

//<------strings---------->
/*
let str = "apna \n college";
console.log(str);
let specialString = `This is a /t template literal.`;
console.log(str[7]);
console.log(specialString.length);

let obj = {
    item: "pen",
    price : 10    
}
console.log("the cost of", obj.item,"is",obj.price, "rupees." );

let output = `the cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);


let str = "hello world";
let str1 =" hemmm";
let str2 ="   @2";
console.log(str.slice(2,5));

 str = str.toUpperCase();
console.log(str);

let res = str + str1 +str2;
console.log(res);

let strr = "hello";
console.log(strr.replace("l","y"));
console.log(strr.charAt(3));


//Practice 1

let p = prompt("Enter full name");

console.log(`Username for your name is @${p}${p.length}.`);
*/