// bagaimana cara membuat object blueprint di JavaScript? Fitrahnya, object blueprint dapat dibuat dengan menggunakan constructor function yang tampak seperti ini.

function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}
   
  Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
}
   
  Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
}
   
  Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
}

// Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
 
console.log(car1);
console.log(car2);
console.log(car3);

// Sintaks JavaScript modern (ES6) menawarkan cara membuat constructor function dengan menggunakan keyword class.

class Motor {
    constructor(brand, color, maxSpeed, chassisNumber) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;
    }
   
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn() {
      console.log(`${this.brand} ${this.color} is turning`);
    }
  }
   
  // Membuat objek mobil dengan constructor function Car
  const motor1 = new Motor('Ducati', 'Silver', 400, 'to-1');
  const motor2 = new Motor('Honda', 'Black', 180, 'ho-1');
  const motor3 = new Motor('Suzuki', 'Red', 220, 'su-1');
   
  console.log(motor1);
  console.log(motor2);
  console.log(motor3);
   
  motor1.drive();
  motor2.drive();
  motor3.drive();