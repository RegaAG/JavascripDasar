
//2 ARRAY DALAM 1
const arraySaya = [1,2,3,4,5]
const arrayKamu = [6,7,8,9,10]

const arrayGabungan = arraySaya.concat(arrayKamu)

console.log(arrayGabungan)

for(list of arrayGabungan) console.log(list)

// MAPPING DATA
const data = [
    {
        nama: 'afege',
        nim: 3242,
        age: 22
    },
    {
        nama: 'ajshc',
        nim: 5634,
        age: 20
    },
    {
        nama: 'wrrty',
        nim: 8675,
        age: 30
    },
]

data.map((values, index) => {
    console.log(values.nama)
})

// MENGURUTKAN BERDASAR UMUR
data.sort((a,b) => a.age - b.age).map((values) => console.log(values))

// MEMFILTER UMUR DIATAS 30
data.filter((x) => x.age >= 30).map((values) => console.log(values))