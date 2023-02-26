/*
    TUGAS BESAR
1. MEMBUAT PERHITUNGAN MATEMATIKA
    - LUAS LINGKARAN
    - LUAS SEGITIGA
    - LUAS PERSEGI PANJANG
    - LUAS PERSEGI JAJARGANJANG
2. MENGHITUNG TOTAL GAJI YANG DIDAPAT DALAM 1 BULAN DENGAN INPUT MINIMAL:
    - NAMA KARYAWAN
    - GAJI PERHARI
    - JUMLAH HARI MASUK KERJA
**/

// FUNCTION LUAS LINGKARAN
function luasLingkaran(r) {
    return 22/7 * r * r;
}

let jari = prompt('Masukan Jari-Jari Lingkaran: ');
let hasilLuas = luasLingkaran(Number(jari));
alert(`Luas lingkarannya adalah ${hasilLuas}cm`);



// FUNCTION LUAS SEGITIGA
function luasSegitiga(a,t){
    return (1/2) * a * t
}

let alasSegitiga = prompt('Masukan Alas Segitiga: ')
let tinggiSegitiga = prompt('Masukan Tinggi Segitiga: ')
hasilLuas = luasSegitiga(Number(alasSegitiga), Number(tinggiSegitiga))
alert(`Luas Segitiganya adalah ${hasilLuas}cm`)



// FUNCTION LUAS PERSEGI PANJANG
function luasPersegiPanjang(p,l){
    return (p*l)
}
    
let panjang = prompt('Masukan Panjang Persegi Panjang: ')
let lebar = prompt('Masukan lebar Persegi Panjang: ')
hasilLuas = luasPersegiPanjang(Number(panjang), Number(lebar))
alert(`Luas Persegi Panjangnya adalah ${hasilLuas}cm`)



// FUNCTION LUAS JAJAR GENJANG
function luasJajargenjang(a,t){
    return (a * t)
}

let alas = prompt('Masukan Alas JajarGenjang: ')
let tinggi = prompt('Masukan Tinggi JajarGenjang: ')
hasilLuas = luasJajargenjang(Number(alas), Number(tinggi))
alert(`Luas JajarGenjangnya adalah ${hasilLuas}cm`)







// MENGHITUNG TOTAL GAJI KARYAWAN
function gajiKaryawan(gajiPerhari, jumlahMasukKerja){
    return (gajiPerhari * jumlahMasukKerja)
}

let nama = prompt('Masukan Nama Anda: ')
let jumlahGaji = prompt('Masukan Jumlah Gaji Anda Perhari: ')
let jumlahKerja = prompt('Berapa Hari Anda Masuk Kerja Dalam Sebulan: ')
let total = gajiKaryawan(Number(jumlahGaji), Number(jumlahKerja))
alert(`TOTAL GAJI ${nama} adalah ${total}`)