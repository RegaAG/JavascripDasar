// Di pembahasan sebelumnya, kita sudah mengenal bahwa pemberian tanda underscore pada properti atau method bisa dijadikan sebagai penanda bahwa ia dianggap private. Masalahnya adalah cara tersebut tidak benar-benar memproteksi hak aksesnya.
// Untuk menyelesaikan masalah ini, JavaScript versi ES2022 secara resmi mengenalkan cara dalam menetapkan hak akses private pada properti dan method objek, yakni dengan menambahkan tanda # di awal penamaan properti atau method.

class Car {
    #chassisNumber = null;
   
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.#chassisNumber = this.#generateChassisNumber();
   }
   
    get chassisNumber() {
      return this.#chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
   
    // Methods
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn(direction) {
      console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
   
    #generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }