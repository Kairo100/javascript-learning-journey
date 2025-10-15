const person ={name:'Alice', age:24, city:'New york'}
console.log('This is object person before adding method', person)
//adding function as key-value to object
person.great = function (){
    console.log("Hello from great method of the person object")
    console.log(`Hello ${this.name}`)
}
person.great()

//nested objects
const post={
    title:'My Day',
    author:{name:'Kairo', id:1}
}
console.log("this is nested objects", post.author.name)

//converting to JSON 
const jsonObject = JSON.stringify(person)
console.log("this is object changed to json", jsonObject)

//converting to object
const objectJson = JSON.parse(jsonObject)
console.log('This is json changed to object', objectJson)