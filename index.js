//Homework
//1. write file with fs -> core module




const fs=require("fs")

const data="Test 1";
const filename="test.txt"
fs.writeFile(filename,data,(err)=>{
     if(err){
        console.log("error message!");
         }
         else{
            console.log("File succesfully written");
         }
})