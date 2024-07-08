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

// <------arrays--->

let heroes = ["ironman","hulk","black widow","spiderman"];
console.log(heroes);
console.log(heroes[3]);
heroes[3]="dr strange";
console.log(heroes[3] ,"l \n \n");

for(ind = 0;ind<heroes.length;ind++){
  console.log(heroes[ind]);
}
for(let hero of heroes){
    console.log(hero);
}

let marksOf = [85,97,44,37,76,60];
let sum = 0;
for(let p=0 ;p<marksOf.length ;p++){
    sum =sum + marksOf[p];
}
let average = sum/marksOf.length;
console.log("average = ",average);



// let price =[250,645,300,900,50];
// for( let p of price){
//    p*=0.9;
// } 
// console.log(price);

let price =[250,645,300,900,50];
for( let q =0;q<price.length;q++){
    price[q]*=0.9;

}
console.log(price);


let veggies = ["potato","tomato","brocolli","bean"];

console.log(veggies.toString());
let numbermark = [45,43,666,865,212];
console.log(numbermark.toString());

let aka = numbermark.concat(veggies);
console.log(aka);

veggies.push("onion");
console.log(veggies);
let t = veggies.length ;
let deleted=[];

for(let g = 0; g < t ; g++){
 deleted[g] = veggies.pop();
 console.log(deleted[g]);
}
console.log(deleted);

aka.unshift("khira");
console.log(aka);
let val = aka.shift();
console.log(aka);

console.log(aka.slice(3,7));

console.log(aka.splice(2,3,"awwww","chumma"));
console.log(aka);


//Practice 1
let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
 company.shift();
 company.splice(1,1,"Ola");
 company.push("Amazon");
 console.log(company);
 */

 //<=-----functions methods--->
/*
 function myFunction () {
    console.log("Welcome to Apna college");
    console.log("We are learning JS");
 }
 myFunction();
 
 function my (msg){
   // parameter -> input
    console.log(msg);
 }
 my("I love U");

 function add(x,y){
    console.log(x+y);
    s=x+y;
    return s;
    console.log("after return"); //nothing works after return statements
 }
 add(5,7);
 let v =add(3,4);
 console.log(v);

const arrowSum = (a,b) =>{
    console.log(a+b);
}

//Practice 1
function vowel(string) {
    let a=0;
   for(const char of string){   
    if(char ==='a' || char ==='e'|| char ==='i'|| char ==='o'|| char ==='u'||
    char ==='A'|| char === 'E'|| char === 'i'|| char === 'O'|| char === 'U'
     ) 
    {
    a++;
    }

    }
    console.log(a);
} 

//Practice 2
let ar= (string) =>{
    let a=0;
    for(const char of string){   
     if(char ==='a' || char ==='e'|| char ==='i'|| char ==='o'|| char ==='u'||
     char ==='A'|| char === 'E'|| char === 'i'|| char === 'O'|| char === 'U'
      ) 
     {
     a++;
     }
 
     }
     console.log(a);
};
*/

//<----Methods--->
/*
let arr = [1,20,4,65,46,50,7];

arr.forEach((val,i) => { //value at each index
    console.log(val,i);
})

//Practice 1
let ap = [2,5,6,76,45,96];
ap.forEach((val) =>{
    console.log(val*val);
})
*/

/*
let app= [3,4,5,7,9,16];

let newarr = app.map((val) =>{
    return val*val;
});
console.log(newarr);

let filter = app.filter((val) =>{
    return val%2==0;
})
console.log(filter);

let output = app.reduce((result,current)=>{
    return result+current;
})
console.log(output);

let output1 = app.reduce((result,current)=>{
   if(result>current)
    return result;
 else return current;
// return result>current ? result : current ;
})
console.log(output1);

//Practice 1

let arrmark = [78,94,92,46,80,95,99];

let filtermark = arrmark.filter((val) =>{
    return val>=90;
})
console.log(filtermark);


//Practice 2

let input =prompt("enter number");
let arrnum=[];
for(let i=1;i<=input;i++){
    arrnum.push(i)    ;
};
//55console.log(arrnum);

let reduceNum = arrnum.reduce((prev,next)=>{
    return prev+next;
});
let reduceMulNum = arrnum.reduce((prev,next)=>{
    return prev*next;
});
console.log(reduceNum);
console.log(reduceMulNum);
*/

//<-----document object model--->
/*
window.console.log("hello");


let heading=  document.getElementById("heading");
console.dir(heading);

let head1 = document.getElementsByClassName("heading-class");
console.dir(head1);

let headin = document.getElementsByTagName("p");
console.dir(headin);
console.log(headin);
*/
// query Selector 
/*
let firstEl = document.querySelectorAll(".heading-class");
console.dir(firstEl);
let allEl = document.querySelector("#heading");//all cant be used on id
console.dir(allEl);
let el = document.querySelectorAll("p");
console.dir(el);



let dirsat = document.querySelector("#main");
console.dir(dirsat.textContent);
console.dir(dirsat.innerText);
console.dir(dirsat.innerHTML);
console.dir(dirsat.tagName);
*/

// Practice 1
/*
let pr = document.querySelector("h2");

pr.innerText = pr.innerText + "from Apna college";
console.dir(pr.innerText);

//Practice 2

let divs = document.querySelectorAll(".box");
console.log(divs);
// divs[0].innerText="aaa";
// divs[1].innerText="bbb";
// divs[2].innerText="ccc";
let idxx =1;
for(div of divs){
    div.innerText = `new Unique value ${idxx}`;
    idxx++;
}
console.log(divs);
*/

//<---DOM PART 2--->
//<--attribute get and set
/* let buto = document.querySelector("button");
console.log(buto.getAttribute("class"));
console.log(buto.setAttribute("id","mine"));

// node.style   is used to check style and change styles
console.log(buto.style);
buto.style.backgroundColor = "white";

// insert element and delete element
let newBtn = document.createElement("button");
newBtn.innerText = "click there!";
console.log(newBtn);

let h4 = document.querySelector(".h4");
h4.prepend(newBtn);
//h4.before(newBtn);
//h4.append(newBtn);

//newBtn.remove(); 

*/

// Practice 1
/*
let newerBtn = document.querySelector("button");
newerBtn.innerText ="Click me";
newerBtn.style.backgroundColor = "red";
newerBtn.style.color = "white";

let body1 = document.querySelector("body");
body1.prepend(newerBtn);
// document.querSelector("body").prepend("newerBtn");

//Practice 2
let head4 = document.querySelector("h4");
head4.classList.add("heading4");

*/

// <---Events-->
/*
let btn1 = document.querySelector("button");

btn1.onclick = () => {
    console.log("Handler");
    let a= 30;
    a++;
    console.log(a);
}

let box1 = document.querySelector(".box");
box1.onmouseover = (e) => {
    console.log("you are good.");
    console.log(e.target);
}

let btn2 = document.querySelector("button");

btn2.addEventListener("click", () => {
    console.log("button2 was clicked -- Handler 1");
})
btn2.addEventListener("click", () => {
    console.log("button2 was clicked -- Handler 2");
})
const handler =() => {
    console.log("button2 was clicked -- Handler 3");
}
btn2.addEventListener("click",handler);
btn2.addEventListener("click", () => {
    console.log("button2 was clicked -- Handler 4");
})

btn2.removeEventListener("click",handler);
*/

// Practice 1
/*
let mode = document.querySelector("#mode");
let currMode = "dark"; //light

mode.addEventListener("click",() => {
if(currMode === "dark"){
    currMode = "light";
    document.body.style.backgroundColor = "white";
    document.querySelector("button").style.backgroundColor = "white";
}else {
    currMode = "dark";
    document.body.style.backgroundColor = "black";
}
});
*/

//objects and classses

//prototype and use 
/*
const employee = {
    calcTax() {
        console.log("tax rate is 13%.");
    },
}

const karanArjun = {
    salary:50000,
};

const karanArjun2 = {
    salary:500000,
};


karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
*/

//classes

/*
class restaurant {
    chicken() {
        console.log("chicken");
    }

    biryani() {
        console.log("biryani");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let dawnRestaurant = new restaurant();
dawnRestaurant.setBrand("Elite");
*/

//class apna way
/*
class ToyotaCar {
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner",10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus",12);
console.log(lexus);
*/

//Inheritance
/*
class person {
    constructor(){
        this.species = "homo sapiens";
    }

    eat(){
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends person {
    constructor(branch){
        //super keyword
        super(); //to invoke parent class constructor
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("solve problems,build something");
    }
}
let mohitObj = new Engineer();
let engObj = new Engineer("chemical engineer");
//super keyword
*/

//Practice 1
/*
let data = "secret data";
class user {
    constructor(name,email) {
        this.name = name;
        this.email = email ;
    }

    viewData () {
        console.log ("data = " , data);
    }
}

let student1 = new user("nim","nim78@email.com");
let teacher1 = new user("mohit","mohit56@email.com")

//Practice 2

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData () {
       data = "some new value " ;
    }
}

let admin1 = new Admin("denim","admin@email.com");
*/

// try catch error
/*
let a =5;
let b=10;
console.log("a = ", a);
console.log("b = ",b);
console.log("a + b = ",a+b);
console.log("a + b = ",a+b);
try{
    console.log("a + b = ",a+c);
} catch(err){
    console.log(err);
}
console.log("a + b = ",a+b);
console.log("b - a = ",b-a);
console.log("b - a = ",b-a);
try{
    console.log("b - a = ",b-u);
} catch(err){
    console.log(err);
}
console.log("b - a = ",b-a);
console.log("b - a = ",b-a);
*/

// Callback , Promises & Async Await

//Asynchronous
/*
console.log("one");
console.log("two");
setTimeout(() => {
    console.log("timer");
},4000);
console.log("three");
console.log("four");

//callback
function sum(a,b){
    console.log(a+b);
}
function calculator (a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);
*/
//Callback hell
/*
function getData(dataId){
   setTimeout(() =>{
    console.log("data =" , dataId);
   },2000);
}
getData(1);
getData(2);
getData(3);

function getData(dataId,getNextData){
    setTimeout(() =>{
     console.log("data =" , dataId);
     if(getNextData){
        getNextData();
     }
    },2000);
 }
 getData(1,() =>{
    getData(2 , () =>{
         getData(3);
    });
 });
*/

 //promise
 //promise module 
 /*
 let promise = new Promise((resolve,reject) =>{
    console.log("I am promise.")
    //reject("some error");
})
function getData(dataId,getNextData){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("data =" , dataId);
            resolve("success");
            if(getNextData){
               getNextData();
            }
           },5000);
    })
 }
 let re = getData(112);
 */
//promise use for us
/*
const getPromise = () =>{
    return new Promise((resolve,reject) =>{
    console.log("I am promise.")
    resolve("success");
    //reject("error");
});
};

let promise = getPromise();
promise.then(() =>{
    console.log("promise fulfilled");
});
promise.catch((err) => {
    console.log("rejected",err);
});
*/