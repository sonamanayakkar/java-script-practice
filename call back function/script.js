
//call-back function

//1--------------
// let  name=(welcome)=>{
//     console.log("hi sonu");
//     welcome();

// }

// let  greet=()=>{
//     console.log("welcome to vs code");

// }

// name(greet);

//1--------------
// let calculation = (a,b,addition) => {
//     return addition(a,b);
// }



// let add = (a,b) => {
//       return a + b;

// }

// let sub = (a,b) => {
//     return a - b;
// }

// let message = () => {
//     console.log("calculation completed!");

// }
// // calculation(5,10,add,message);

// console.log(calculation(10,20,add));



//task -1

// let sayHello=(callback)=>{
//     console.log("hello");
//     callback();

// }

// let greet=()=>{
//     console.log("good morning!");

// }

// sayHello(greet)


//task -2

let calculation = (a,b,callback,callback2) => {
    callback(a,b);
    callback2(a,b);
}
let add = (a,b) => {
    console.log(a+b);
    
}
let multiply = (a,b) => {
     console.log(a*b);
}


calculation(10,10,add,multiply)











