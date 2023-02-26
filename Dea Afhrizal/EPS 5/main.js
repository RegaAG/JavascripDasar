

// FOR

console.log(`FOR`)
for(let i = 1; i <= 10; i++){
    console.log(i)
}


// WHILE

console.log(`WHILE`)
let x = 1
while (x <= 10){
    console.log(x)
    x++
}

// DO WHILE

console.log(`DO WHILE`)
let y = 1
do{
    console.log(y)
    y++
} while (y <= 10)


const buahBuah = ['mangga','jeruk','appel','nanas','pisang']

//for of
for (buah of buahBuah){
    console.log(buah)
}

//for in
for (buah in buahBuah){
    console.log(buah)
}

buahBuah.forEach(buah => {
    console.log(buah)
});