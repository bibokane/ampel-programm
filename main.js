//alert ruft ein Fenster auf
/*
-Hallo
-mein Name ist Habib
_Kané
*/
//alert("Hallo Habib");
//console.log(2+2);
/*let firstname = "Habib"; // String-variable
let surname = "Kane";

let age = 41;   // integer

let price = 3.45;   // float

let hasDrivingLicense = true;

let completName = firstname +" "+ surname;

if(hasDrivingLicense){
    console.log(completName+" darf Auto fahren");
}

names = ["Jannick", "Peter"];
numbers = [1,10,2,5]

console.log(names[0])
console.log(numbers)

fruits = ["apfel", "Banana", "Mango"]
console.log(fruits)

fruits[0] = "Orange"

console.log(fruits[fruits.length-1])*/

/*names = ["Habib", "Laura"]
console.log(names)

names.push("Aicha")     // hinzufügen
console.log(names)

names.splice(2,0,"Amidou")      // an einer bestimmten Position hinzufügen 
console.log(names)

names2 = ["Kadiatou", "Djeneba"]

console.log(names.concat(names2))

var numbers = [1,2,3,4,5,6,7,8,9]

numbers.pop()       // letzter Element entfernen

console.log(numbers)

numbers.shift() // erster Element entfernen

console.log(numbers)

numbers.splice(2,3)

console.log(numbers)

names = ["Habib", "Laura"]
console.log(names)

names.push("Aicha")     
console.log(names)

names.splice(2,0,"Amidou")      
console.log(names)

names2 = ["Kadiatou", "Djeneba"]

newArray = names.concat(names2)

console.log(newArray)

//var result = newArray.find(element => element == "Kadiatou")
var result = newArray.indexOf("Kadiatou")

console.log(result)


console.log(newArray.sort())

var human = {           //Objects
    vn: "Habib",
    nn:"Kane",
    height:"180",
    age: 40,
    countries: ["MLI","DE"]
}

console.log(human)

console.log(human.countries[0])
human.age = "Fourty"        // in Javascript kann man den type vortlaufend ändern zb: von int zu string
console.log(human)

var age = prompt("Trage dein Alter ein:")

if(!(age>18)){
    console.log("Nicht alt genug!")
}
else{
    console.log("Eintritt gewaehrt!")
}*/


function main(){
    var input = document.getElementById("inputColor")
    var color = input.value;
    var lowerColorName = color.toLowerCase();
    if(lowerColorName=="gruen"||lowerColorName=="gelb"||lowerColorName=="red"){
        if(lowerColorName=="gruen"){
            console.log("du darfst gehen!")
        }else if(lowerColorName=="gelb"){
            console.log("du darst schnell gehen wenn dich nicht anhalten kannst")
        }else{
            console.log("du muss anhalten")
        }
    }else{
        console.log("eine ungueltige Farbe wurde eingegeben!")
    }

}