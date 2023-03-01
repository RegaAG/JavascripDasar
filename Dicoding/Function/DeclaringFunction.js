function salam() {
    console.log("Good Morning!")
}

salam();

function greeting(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else if (language === "Indonesia"){
        console.log(`Selamat Pagi ${name}!`);
    } else if (language === "Korea") {
        console.log(`좋은 아침 ${name}`)
    } else{
        console.log(`Bahasa tidak diketahui`)
    }
}

greeting("Rega", "Korea");

// kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)

// gunakan keyword return diikuti dengan nilai yang akan dikembalikan. Nilai kembalian tidak hanya number, bisa juga berupa string, boolean, object, array, atau tipe yang lain

function greetingg(name, language) {
    if(language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

let greetingMessage = greetingg("Harry", "English");
console.log(greetingMessage);

// Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak bernama juga dikenal dengan anonymous function.

const expression = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(expression('Ron', 'English'));

