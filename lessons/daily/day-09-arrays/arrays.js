//arrays 
// you can give different varaible types in smae array
const colors =['pink', 'purple','black', 'green', 9, true]
console.log(colors[3])

//arrays to string
const arrayToString = colors.toString()

//access the full array
const fullArray = colors

//arrays are specail type of  objects
console.log(typeof(colors[4]))//number
console.log(typeof(colors[5]))//boolean
console.log(typeof(colors[2]))//string


//accessing elements of arrays 
// length, push(), pop(), shift(), unshift().

//length
//length of the array, it use length object 
console.log("This is lenght that return one more number of the of the last value index",colors.length)//6 ( its is from 0 to 5)

//accessing first element
colors[0]

//accessing last element
colors[colors.length -1]

//looping array 
console.log("This looping arrays to print all arrays")
for (let i=0; i<colors.length ; i++){
  
    console.log(colors[i])
  
}

//push
console.log("this is push which will add blue elemet and then returns the lenght of array",colors.push('blue'))

//pop
console.log("This is the pop , which gonna remove last element from array",colors.pop(9))

//shift
console.log('This is the shift that rmoves first element (0), and returns the removed value', colors.shift())
for (let i=0; i<colors.length ; i++){
  
    console.log(colors[i])
  
}
//unshift
console.log('This is unshift adds elements to first index and returns the new lenght of the array', colors.unshift(('light blue')))


//you can make two ways of arrays
//the array with []
const numbers = [ 10, 30]
//using array constructor 
// when it has two more arugemnet it will treat arrugment as elments as same sa [10, 30]
//when it has only when arrgument (10) it will creat an empty array with lenght of the 10 and the index (0) will be empty and the lenght of array it will be 10
const evenNumber = new Array(10, 30)

