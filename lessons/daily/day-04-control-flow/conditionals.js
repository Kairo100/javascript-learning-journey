// if statement, it will run only if the (if ) is true
x=10
if(x==9){
    console.log("X is: ", x)
}



//if-else 

if(x==9){
    console.log("X is 9")
}
else {
    console.log("X is not equal to 9")
}

//if-else if-else

score =89
if(score > 100 || score < 0){
    console.log("Score should be between 0-100 ")
}
else if(score <=100 && score >=80)
{
    console.log("A")
}
else if(score <=79 && score >=60)
{
    console.log("B")
}
else if(score <=59 && score >=50)
{
    console.log("C")
}
else 
{
    console.log("F")
}


//ternary operator
let y = 33
let numberBe = (y>55) ? "More than 50" :"Less than 50" 
console.log(numberBe)



//Switch
var day = new Date().getDay() //get day is return numbers from 0 t0 6
switch(day){
    case 0: day= " sunday"

    break;
    case 1 : day ="monday"

    break ;
    case 2: day= "tuesday"
    break ;
    case 3: day ="wednesday"
    break ;
    case 4 : day="thursday"
    break ;
    case 5: day ="friday"
    break;
    case 6: day=" saturday"
    
}
console.log(day)