/// Kode di bawah merupakan contoh proses destructuring array. Di dalam array favorites terdapat 4 (empat) nilai string yang masing-masing nilainya dimasukkan ke variabel lokal firstFood, secondFood, thirdFood, dan fourthFood.

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood] = favorites;

// Kita juga bisa memilih nilai pada index tertentu untuk destrukturisasi pada array
const [, , fourthFood ] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
 

// Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel

let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log(`Nilai a = ${a}`);
console.log(`Nilai b = ${b}`);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);