//3. find whatever package (module) on npmjs.com and use it-> third-party module

const take=require('lodash');

const newarr=take.shuffle([1,2,3,4,5,6]);

console.log(newarr);