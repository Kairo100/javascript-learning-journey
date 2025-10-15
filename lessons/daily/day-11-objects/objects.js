const person = {name:'Muha', age:'23', city:'New York'}
console.log("This is the object",person)
//accesing object
console.log("Accessing object using braket ", person['age'])
console.log("Accesing object using dot",person.name)
//adding to the object
person.occupation='Engireening'
console.log("Added new key-value",person)
//deleting object 
delete person.occupation
console.log("After deleting one properties", person)
