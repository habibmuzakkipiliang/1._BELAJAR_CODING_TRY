// Program JavaScript Sederhana Nested Logika Bersarang 

console.log ("\n Program JavaScript Sederhana Nested Logika Bersarang \n")


console.log ("\n Nested Percabangan If level 1 (Else If) \n")


var a = 10
var cek = true

if (cek) {
    if (a > 5) {
        console.log (`Besar, nilai = ${a}`)
    }
    
    else if (a < 5) {
         console.log (`Kecil, nilai = ${a}`)
    }
}

else {
    console.log (`Semula, nilai = ${a}`)
}


console.log ("\n --- Batas --- \n")




var b = 2
var cek = true

if (cek) {
    if (b > 5) {
        console.log (`Besar, nilai = ${b}`)
    }
    
    else if (b < 5) {
        console.log (`Kecil, nilai = ${b}`)
    }
}

else {
    console.log (`Semula, nilai = ${b}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n Nested Percabangan If level 1 (Else) \n")


var c = 9
var cek = true

if (cek) {
    if (c > 5) {
        console.log (`Besar, nilai = ${c}`)
    }
    
    else {
        console.log (`Kecil, nilai = ${c}`)
    }
}

else {
    console.log (`Semula, nilai = ${c}`)
}


console.log ("\n --- Batas --- \n")




var d = 3
var cek = true

if (cek) {
    if (d > 5) {
        console.log (`Besar, nilai = ${d}`)
    }
    
    else {
        console.log (`Kecil, nilai = ${d}`)
    }
}

else {
    console.log (`Semula, nilai = ${d}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n Nilai Rapor Sederhana \n")


var nilai = 100

if (nilai >= 90) {
    console.log (`A, nilai = ${nilai}`)
}

else if (nilai >= 80) {
    console.log (`B, nilai = ${nilai}`)
}

else if (nilai >= 75) {
    console.log (`C, nilai = ${nilai}`)
}

else if (nilai >= 70) {
    console.log (`D, nilai = ${nilai}`)
}

else if (nilai >= 60) {
    console.log (`E, nilai = ${nilai}`)
}

else if (nilai >= 50) {
    console.log (`F, nilai = ${nilai}`)
}

else {
    console.log (`Jelek semua nilainya, nilai = ${nilai}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n Skor UTBK dan SNBT \n")


var skor = 1000

if (skor >= 900) {
    console.log (`A, nilai = ${skor}`)
}

else if (skor >= 800) {
    console.log (`B, nilai = ${skor}`)
}

else if (skor >= 750) {
    console.log (`C, nilai = ${skor}`)
}

else if (skor >= 700) {
    console.log (`D, nilai = ${skor}`)
}


else if (skor >= 600) {
    console.log (`E, nilai = ${skor}`)
}

else if (skor >= 500) {
    console.log (`F, nilai = ${skor}`)
}

else {
    console.log (`Jelek amat nilanya, nilai = ${skor}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n Percabangan Nested level 2 (Usia Produktif Manusia) \n")


var usia = 19
var cek = true

if (cek) {
    if (usia >= 15) {
        console.log (`Usia produktif, dan usia = ${usia}`)
    }
    
    else if (usia <= 64) {
        console.log (`Masih bisa produktif, dan usia = ${usia}`)
    }
}

else {
    console.log (`Bukan usia produktif lagi, dan usia = ${usia}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n Percabangan Nested level 3 (Join ke member JKT48) \n")


var umur = 18
var cek = true

if (cek) {
    if ((umur >= 13) && (umur <= 19)) {
        console.log (`Kamu boleh ikut audisi JKT48, dan usia = ${umur}`)
    }
    
    else if (umur > 19) {
        console.log (`Kamu sudah matang, gabung ke JKT48, dan usia = ${umur}`)
    }
    
    else {
        console.log (`Gak lolos audisi JKT48, usia = ${umur}`)
    }
}

else {
    console.log (`Belum bisa ikut audisi JKT48, usia = ${umur}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n For dasar \n")


for (a = 0; a < 8; a++) {
    console.log (`Urutan ke - ${a}`)
}


console.log ("\n --- Batas --- \n")




for (b = 0; b < 9; b++) {
    console.log (`Urutan ke - ${b}`)
}


console.log ("\n --- Batas --- \n")




for (c = 0; c < 6; c++) {
    console.log (`Urutan ke - ${c}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n While dasar \n")


var a = 3

while (a < 9) {
    console.log (`Urutan ke - ${a}`)
    a++
}


console.log ("\n --- Batas --- \n")




var b = 6

while (b < 11) {
    console.log (`Urutan ke - ${b}`)
    b++
}


console.log ("\n --- Batas --- \n")




var c = 6 

while (c < 14) {
    console.log (`Urutan ke - ${c}`)
    c++
}


console.log ("\n --- Batas --- \n")




console.log ("\n Do While dasar \n")


var a = 3

do {
    console.log (`Urutan ke - ${a}`)
    a++
} while (a < 11)


console.log ("\n --- Batas --- \n")




var b = 4

do {
    console.log (`Urutan ke - ${b}`)
    b++
} while (b < 13)


console.log ("\n --- Batas --- \n")




var c = 5

do {
    console.log (`Urutan ke - ${c}`)
    c++
} while (c < 18)


console.log ("\n --- Batas --- \n")




console.log ("\n For Nested \n")


for (a = 0; a < 5; a++) {
    for (b = 0; b < 5; b++) {
        console.log (`Urutan ke - ${a} dan Urutan ke - ${b}`)
    }
}


console.log ("\n --- Batas --- \n")




for (c = 0; c < 4; c++) {
    for (d = 0; d < 4; d++) {
        console.log (`Urutan ke - ${c} dan Urutan ke - ${d}`)
    }
}


console.log ("\n --- Batas --- \n")




for (e = 0; e < 3; e++) {
    for (f = 0; f < 3; f++) {
        console.log (`Urutan ke - ${e} dan Urutan ke - ${f}`)
    }
}


console.log ("\n --- Batas --- \n")

