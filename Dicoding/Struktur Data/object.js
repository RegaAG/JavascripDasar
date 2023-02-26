// Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}
let object = {key1: "value1", key2: "value2", key3: "value3"}

const user = {
    firstName: "Rega",
    lastName: "Anton Giapierro",
    age: 20,
    mahasiswa: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

// memodifikasi dan menambahkan sebuah object. Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=).

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship.maxSpeed = 1300;
spaceship.class = "Light freighter";
console.log(spaceship);

//Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut:

const spaceship2 = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship2.color = "Glossy red";
spaceship2.maxSpeed = 1300;

delete spaceship2.manufacturer;

console.log(spaceship2);