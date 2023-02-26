

// DATA SELECTION

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const defaultText = 'Klik Saya 1'
btn1.textContent = defaultText

// STYLING SELECTOR'
btn1.style.background = 'tomato'
btn1.style.padding = '8px'

// EVENT PROMP
function gantiWarna(){
    btn1.style.background = 'red'
    btn1.textContent = 'aawwwwww'
}

function ubahTextIn(){
    btn1.textContent = 'iihhhh'
}

function ubahTextOut(){
    btn1.textContent = defaultText
}