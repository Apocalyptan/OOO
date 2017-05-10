/**
 * Main object
 */
function Telephone(name, brand, price, color) {
	this.name = name;
	this.brand = brand;
	this.price = price;
	this.color = color;
}

/**
 * Main object - prototypes
 */
Telephone.prototype.printInfo = function() {
	console.log('Nazwa tego telefonu to ' + this.name + ', marka to ' + this.brand + ', kolor to ' + this.color + ', a cena to $' + this.price + '.');
}

Telephone.prototype.throwDistance = function() {
	console.log('Telefon o nazwie ' + this.name + ', marki ' + this.brand + ', można rzucić na odległość ' + (this.price * 123) + ' metrów.');
}

/**
 * Variables for purposes of the given task
 */
var nokia3310 = new Telephone('Nokia 3310', 'Nokia', 666, 'indygo');
var iPhone = new Telephone('iPhone', 'Apple', 1500, 'czarny');
var firstPhone = new Telephone('Prototyp Telefonu', 'Bell Telephone Company', 1000000000000, 'srebrny');

/**
 * Functions for purposes of the given task
 */
function phonePrint() {
	console.log('Informacje o telefonach:');
	nokia3310.printInfo();
	iPhone.printInfo();
	firstPhone.printInfo();
}

function throwPrint() {
	console.log('Informacje o dystansie na jaki można dorzucić dany telefon:');
	nokia3310.throwDistance();
	firstPhone.throwDistance();
	iPhone.throwDistance();
}

// Main factory layout and functionality
phonePrint();
console.log(' ');
throwPrint();