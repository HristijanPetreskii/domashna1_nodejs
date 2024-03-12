//2. make a function in another file (Simple hello world) and use it in another file -> local module

const Hello=require("./file");

const  mess=Hello();

console.log(mess)