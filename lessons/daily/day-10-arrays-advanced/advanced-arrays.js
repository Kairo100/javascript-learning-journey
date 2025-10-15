const fruits =['apple', 'grapes', 'pinneaple', 'mango']

//for of
for (const fruit of fruits){
    console.log(fruit)
}


//for each
fruits.forEach((fruit, index)=>{
    console.log(index, fruit)
})

//map
const doubleFruits = fruits.map((fruit)=>{
    return fruit+" , "+ fruit
})
console.log(doubleFruits)
// filter
const filterFruites = fruits.filter(fruit =>fruit.toLowerCase()=="apple" 

)
console.log(filterFruites)

//reduce
const reduceArray = fruits.reduce((acc, con)=> acc+","+con)
console.log(reduceArray)

//reduce by using arrays of numbers
const numArrays = [12, 14, 15]
const reduceNumArray = numArrays.reduce((sum, num)=> sum+num)
console.log(reduceNumArray)