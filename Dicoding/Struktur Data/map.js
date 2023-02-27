// Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun

const myMap = new Map([
    ['1', 'String'],
    [1, 'Number'],
    [true, 'boolean']
]);

console.log(myMap);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size); // mengetahui jumlah map
console.log(capital.get("London")); // mengakses nilai
capital.set("New Delhi", "India"); // fungsi set bisa mengubah atau menetapkan nilai
console.log(capital.size);
console.log(capital.get("New Delhi"));