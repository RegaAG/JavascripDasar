// INCLUDE
let arraySaya = ['Abigail','Akasia','Adaline','Arabella','Aubrey']

const nama = arraySaya.includes('Akasia')

console.log(nama)

if(nama){
    const posisiNama = arraySaya.indexOf('Akasia')
    const indexBefore = posisiNama - 1
    const indexAfter = posisiNama + 1
    const before = arraySaya[indexBefore]
    const after = arraySaya[indexAfter]
    
    console.log(before)
    console.log(posisiNama)
    

    
}else{
    console.log('False')
}

// MENGETAHUI NILAI PERTAMA
const namaAwal = arraySaya.shift()
const namaAkhir = arraySaya.pop()
console.log(namaAwal)
console.log(namaAkhir)


// ARRAY DALAM ARRAY
const arraySayaa = ['Honda',10,'Buggati',{Ferrari: true}, ['eat','food']]

 console.log(arraySayaa)