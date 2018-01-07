myObject = new Object();
myObject.info = "Jestem zupełnie nowym obiektem";
function myFunction(){
    alert(this.info);
};
myObject.funk = myFunction;

var person = {
    name: "Paweł",
    surname: "Karpik",
    print: function(){
        console.log(this.name)
    }
}


function Animal(getName, getSound){
	this.name = getName,
	this.sound = getSound(){
	console.log(getSound)
        }
}

var dog = new Animal("Reksio","wow wow");
	dog.sound();




function Person(name){
    this.name = name;
    this.sayHi = function(){
    return "Hi " + this.name;
    }
}
elie = new Person("Elie");
elie.sayHi();

// inna opcja to poniższy zapis

function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    return "Hi " + this.name;
}
elie = new Person("Elie");
elie.sayHi();

// Exercise

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    return this.isRunning = true;
}
Vehicle.prototype.turnOff = function(){
    return this.isRunning = false;
}
Vehicle.prototype.honk = function(){
    if (this.isRunning){
    return "beep!";
    }
} 
