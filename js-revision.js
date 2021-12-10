// alert("Welcome to javascript")


//   var, let and const

//   var keyword variable is global scope variable as well as function scope variable
//   let keyword variable is block scope variable as well function scope variable

// https://www.youtube.com/watch?v=BNC6slYCj50
// https://www.youtube.com/watch?v=Fnlnw8uY6jo

// https://www.youtube.com/watch?v=7tGmS2SPxBo

let student;
student = "Anand"

console.log(student)





//hoisting



if (true) {
    let city="pune";
    city="Mumbai"
    console.log(city);

 
   

   
   
}

function xyz(){
    var pet;
    pet = "cat";

  
}

console.log(pet)

xyz()

console.log("City :", city)



function displayData() {
    var country;
    country = "India";
   
}
console.log(country);

displayData();

if (true) {


    var number2 = 30;

    console.log(number2)
    number2 = 55;

    console.log(number2)

    let number1;

    number1 = 20;




}

console.log("data: " + number2);




function add() {
    let a = 20;
    let b = 30;
    console.log("addition:", a + b)
}


add()


function display() {

    var number3;
    number3 = 40;
    console.log("data: " + number3);
}



display()

var show = function () {
    console.log("Hello")
    return true;
    console.log("Hello welcome to functions")
}

console.log("show value:", show())


if (show == true) {
    console.log("Permision granted")

} else {
    console.log("Permision denied")
}