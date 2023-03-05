// Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class. jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber.

// adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri. Contohnya, kita tidak ingin pengguna menentukan nomor rangka mobil secara mandiri, maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor.

class Carr {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      // Set a random chassis number
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
  }
   
  const carr1 = new Carr('BMW', 'red', 200);
  const carr2 = new Carr('Audi', 'blue', 220);
  const carr3 = new Carr('BMW', 'black', 250);
   
  console.log(carr1);
  console.log(carr2);
  console.log(carr3);

// Properti Getter dan Setter
// bagaimana cara memproteksi agar nilai dari properti chassisNumber tidak dapat diubah? Nah, ketika kita berhadapan dengan kasus seperti ini, kita bisa memanfaatkan properti getter dan setter.
// Untuk menerapkan pola ini, pertama kita perlu mengubah nama dari properti chassisNumber, misalnya dengan menambahkan tanda garis bawah di depannya menjadi _chassisNumber.
// Lalu, kita tetapkan getter dan setter untuk properti chassisNumber. Untuk getter, kita kembalikan dengan nilai properti _chassisNumber.
// Kita tidak ingin nilai chassisNumber dapat diubah sehingga untuk setter properti chassisNumber, cetak saja teks peringatan menggunakan console.log() seperti ini.

class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
   
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
  }
   
  const car = new Car('BMW', 'red', 200);
  console.log(car.chassisNumber);
  car.chassisNumber = 'BMW-1';
  console.log(car.chassisNumber);