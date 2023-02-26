/*
1. Promp untuk mengetahui saldo akhir dari apa yang diinputkan user
2. Menentukan hari dari tanggal yang ada saat ini di pc kalian
**/

let saldoAwal = prompt("Masukkan saldo awal:");
let gaji = prompt("Masukkan gaji:");
let hutang = prompt("Masukkan jumlah hutang:");

let total = Number(saldoAwal) + Number(gaji) - Number(hutang);

alert(`Total saldo anda adalah RP.${total}`);



let hari = new  Date().getDay()

switch (hari) {
    case 1:
        hari = 'SENIN'
        break;
    case 2:
        hari = 'SELASA'
        break;
    case 3:
        hari = 'RABU'
        break;
    case 4:
        hari = 'KAMIS'
        break;
    case 5:
        hari = 'JUMAT'
        break;
    case 6:
        hari = 'SABTU'
        break;
    case 7:
        hari = 'MINGGU'
        break;

    default:
        break;
}

alert(`SEKARANG ADALAH HARI ${hari}`)