const num1= 80
const num2= 0
try{
    //  throw new Error : it stops program imeditly and threws errors to nearest catch block 
    // while console log if u use instead of  throw new Error it will print that block and the program will continue excuting
    //to detect number 2 if it is zero or not
    if(num2==0){
        throw new Error ("can not divide zero")
        
    }
// const div = num1 / num2
   const div = divide(num1, num2)

   //to dev result of infity or -infinty
   if(!isFinite(div)){
    throw new Error("Results  is infinity or invalid")
   }
   console.log(`this is the divison of two numbers, ${num1} and ${num2} =`, div )
}
catch (error){
    // to log all errors jsut use error 
    // to log only error message use error.message
    console.log("There is an error of in here:-", error.message)
}
finally{
    console.log ("The calculation end")
}
