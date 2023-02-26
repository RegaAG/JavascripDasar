// dengan menggunakan spread operator kita dapat menyebarkan nilai-nilai dalam array tersebut

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites1, ...others];

console.log(...allFavorites);

// spread operator juga bisa digunakan untuk object literals.

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);