// Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel
console.log('Array Normal')
let arrayNormal = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(arrayNormal[1]);
console.log(arrayNormal);
console.log(`Panjang nilai arrayNormal adalah ${arrayNormal.length}`);

// metode push() berfungsi untuk menambahkan data di akhir array
console.log('Array Push')
let arrayPush = ["Cokelat", 42.5, 22, true, "Programming"];
arrayPush.push('JavaScript');
console.log(`setelah ditambahkan ${arrayPush}`);

// Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop()
console.log('Array Pop')
let arrayPop = ["Cokelat", 42.5, 22, true, "Programming"];
arrayPop.pop();
console.log(`setelah dihapus ${arrayPop}`);

// Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.
console.log('Array Shift dan Unshift')
let arrayShiftUnshift = ["Cokelat", 42.5, 22, true, "Programming"];
arrayShiftUnshift.shift();
arrayShiftUnshift.unshift("Apple");
console.log(arrayShiftUnshift);

// Untuk menghapus elemen, gunakan metode splice() seperti ini:
console.log('Array Splice')
const arraySplice = ["Cokelat", 42.5, 22, true, "Programming"];
arraySplice.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(arraySplice);

// Array dengan For Loop
console.log('Array For Loop')
let arrayForLoop = ["Cokelat", 42.5, 22, true, "Programming"];
for (let array of arrayForLoop){
    console.log(array)
}