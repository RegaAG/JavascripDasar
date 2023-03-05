// Kode di bawah merupakan contoh objek mobil atau car di JavaScript. Seperti yang Anda lihat, objek car memiliki properti brand, color, maxSpeed, dan chassisNumber; dan juga method drive, reverse, dan turn. Kita bisa akses nilai properti dan panggil method yang ada di dalam objek tersebut.

const car = {
    // properties
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    // methods
    drive: () => {
      console.log('driving');
    },
    reverse: () => {
      console.log('reversing');
    },
    turn: () => {
      console.log('turning');
    }
  }
   
  console.log(car.brand); // Ford
  console.log(car.color); // red
  console.log(car.maxSpeed); // 200
  console.log(car.chassisNumber); // f-1
  car.drive(); // driving
  car.reverse(); // reversing
  car.turn(); // turning