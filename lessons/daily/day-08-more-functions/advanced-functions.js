//declaration of function, it can be called anywhere in file , and it can be hoisted before declaration

function myfuc(){

}

//expression of function, its private to its scope and cant be hoisted before declaring it 
//named function
var expreFunction = function namedFunction (){

}
//anonymous function
var anonyFunction = function (){

}

//arrow function
var arrowFunction = ()=>{

}

//default parameters 
function defParameters (a=9){
    console.log(a)
}
defParameters()