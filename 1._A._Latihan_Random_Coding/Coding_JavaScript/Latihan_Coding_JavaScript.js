// Latihan Coding JavaScript

console.log ("\n Latihan Coding JavaScript \n")


console.log ("Hello World")


console.log ("\n --- Batas --- \n")




console.log ("\n Sintaks dasar \n")


var nama = "Jansen Rust"
var umur = "25 tahun"
var tinggi = "170 cm"
var coding = "HTML, CSS, JavaScript dan Python"
var warga = "Amerika Serikat"
var asal = "Silicon Valley"


console.log ("Nama :", nama)
console.log ("Umur :", umur)
console.log ("Tinggi :", tinggi)
console.log ("Coding :", coding)
console.log ("Warga :", warga)
console.log ("Asal :", asal)


console.log ("\n --- Batas --- \n")



console.log ("\n Tipe data dasar \n")


var teks = "Tes aja"
var angka = 34
var desimal = 34.2
var cek_1 = true
var cek_2 = false
var kosong = null


console.log ("Teks =", teks)
console.log ("Angka =", angka)
console.log ("Cek 1 =", cek_1)
console.log ("Cek 2 =", cek_2)
console.log ("Kosong =", kosong)


console.log ("\n --- Batas --- \n")




console.log ("\n Operasi Dasar \n")


var x = 9
var y = 3


console.log ("Tambah =", x + y)
console.log ("Kurang =", x - y)
console.log ("Kali =", x * y)
console.log ("Bagi =", x / y)
console.log ("Pangkat =", x ** y)


console.log ("\n --- Batas --- \n")




console.log ("\n Operator Perbandingan \n")


console.log ("Hasil =", x > y)
console.log ("Hasil =", x > y)
console.log ("Hasil =", x >= y)
console.log ("Hasil =", x <= y)
console.log ("Hasil =", x == y)
console.log ("Hasil =", x != y)


console.log ("\n --- Batas --- \n")




console.log ("\n Operator Logika \n")


console.log ("Hasil =", (x > y) && (x < y))
console.log ("Hasil =", (x < y) || (x > y))
console.log ("Hasil =", (!x))
console.log ("Hasil =", (!y))


console.log ("\n --- Batas --- \n")




console.log ("\n Switch Case \n")


var nilai = 95

switch (nilai) {
    
    case 95:
        console.log ("A")
        break
      
    case 90:
        console.log ("B")
        break
         
    case 80:
        console.log ("C")
        break
        
    case 75:
        console.log ("D")
        break
        
    case 60:
        console.log ("E")
        break
    
}


console.log ("\n --- Batas --- \n")



console.log ("\n Percabangan dasar \n")


var c = 3

if (c >= 5) {
    console.log (`Besar, nilai = ${c}`)
}

else {
    console.log (`Kecil, nilai = ${c}`)
}


console.log ("\n --- Batas --- \n")



console.log ("\n Percabangan Lanjutan \n")


var a = 7

if (a >= 5) {
    console.log (`Besar, nilai = ${a}`)
}

else if (a <= 5) {
    console.log (`Kecil, nilai = ${a}`)
}

else {
    console.log (`Sama saja, nilai = ${a}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n Percabangan Skor Sederhana \n")


var b = 5

if (b >= 9) {
    console.log (`A, nilai = ${b}`)
}

else if (b >= 8) {
    console.log (`B, nilai = ${b}`)
}

else if (b >= 7) {
    console.log (`C, nilai = ${b}`)
}

else if (b >= 6) {
    console.log (`D, nilai = ${b}`)
}

else if (b >= 5) {
    console.log (`E, nilai = ${b}`)
}

else if (b >= 4) {
    console.log (`F, nilai = ${b}`)
}

else {
    console.log (`Sama saja, nilai = ${b}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n Percabangan Nilai Rapor Sederhana \n")


var nilai = 95

if (nilai >= 95) {
    console.log (`A, nilai = ${nilai}`)
}

else if (nilai >= 90) {
    console.log (`B, nilai = ${nilai}`)
}

else if (nilai >= 80) {
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
    console.log (`Sama saja, nilai = ${nilai}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n For dasar \n")


for (a = 0; a < 11; a++) {
    console.log (`Urutan ke - ${a}`)
}


console.log ("\n --- Batas --- \n")




for (b = 0; b < 11; b++) {
    console.log (`Urutan ke- ${b}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n While dasar \n")


var a = 2

while (a < 11) {
    console.log (`Urutan ke - ${a}`)
    a++
}


console.log ("\n --- Batas --- \n")




var b = 5

while (b < 16) {
    console.log (`Urutan ke - ${b}`)
    b++
}


console.log ("\n --- Batas --- \n")




console.log ("\n Do While dasar \n")


var e = 8

do {
    console.log (`Urutan ke - ${e}`)
    e++
} while (e < 17)


console.log ("\n --- Batas --- \n")




var h = 3

do {
    console.log (`Urutan ke - ${h}`)
    h++
} while (h < 7)


console.log ("\n --- Batas --- \n")




var d = 5

do {
    console.log (`Urutan ke - ${d}`)
    d++
} while (d < 17)


console.log ("\n --- Batas --- \n")




console.log ("\n Array \n")


var data = [
    
    "1. Nangka",
    "2. Melon",
    "3. Semangka",
    "4. Buah Naga",
    "5. Pepaya",
    "6. Buah Anggur",
    
    ]
    
    
for (a = 0; a < data.length; a++) {
    console.log (data [a])
}


console.log ("\n --- Batas --- \n")




console.log ("\n Dictionary \n")


var profil = {
    
    "nama" : "Jansen Rust",
    "umur" : "25 tahun",
    "tinggi" : "170 cm",
    "coding" : "HTML, CSS, JavaScript, dan Python",
    "warga" : "Amerika Serikat",
    "asal" : "Silicon Valley",
}


console.log ("Nama :", profil ["nama"])

console.log ("Umur :", profil ["umur"])

console.log ("Tinggi :", profil ["tinggi"])

console.log ("Coding :", profil ["coding"])

console.log ("Asal :", profil ["asal"])


console.log ("\n --- Batas --- \n")




console.log ("\n Percabangan Nested 1 \n")


var a = 9
var cek = true

if (cek) {
    if (a >= 5) {
        console.log (`Besar, nilai = ${a}`)
    }
    
    else if (a <= 5) {
        console.log (`Kecil, nilai = ${a}`)
    }
}

else {
    console.log (`Sama saja, nilai = ${a}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n Percabangan Nested 2 \n")


var b = 3
var cek = true

if (cek) {
    if (b >= 5) {
        console.log (`Besar, nilai = ${b}`)
    }
    
    else {
        console.log (`Kecil, nilai = ${b}`)
    }
}

else {
    console.log (`Sama saja, nilai = ${b}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n Percabangan Nested, Daftar JKT48 \n")


var usia = 19
var cek = true

if (cek) {
    if ((usia >= 13) && (usia <= 19)) {
        console.log (`Sudah boleh daftar JKT48, usia = ${usia}`)
    }
    
    else if (usia > 19) {
        console.log (`Sudah matang masuk JKT48, usia = ${usia}`)
    }
    
    else {
        console.log (`Belum boleh ya, ${usia}`)
    }
}

else {
    console.log (`Jangan dulu ya, usia = ${usia} `)
}


console.log ("\n --- Batas --- \n")




console.log ("\n Percabangan Nested, usia produktif manusia \n")


var umur = 25
var cek = true

if (cek) {
    if ((umur >= 15) && (umur <= 64)) {
        console.log (`Masuk usia produktif, umur = ${umur}`)
    }
    
    else if (umur > 64) {
        console.log (`Masuk lanjut usia, umur = ${umur}`)
    }
    
    else {
        console.log (`Bukan usia produktif, umur = ${umur}`)
    }
}

else {
    console.log (`Masih kecil usianya, umur = ${umur}`)
}


console.log ("\n --- Batas --- \n")




console.log ("\n For Nested \n")


for (a = 0; a < 4; a++) {
    for (b = 0; b < 4; b++) {
        console.log (`Urutan ke - ${a}, dan Urutan ke - ${b}`)
    }
}


console.log ("\n --- Batas --- \n")




console.log ("\n For Nested 1 \n")


for (x = 0; x < 4; x++) {
    for (y = 0; y < 4; y++) {
        for (z = 0; z < 4; z++) {
            console.log (`Urutan ke - ${x}, Urutan ke - ${y}, dan Urutan ke - ${z}`)
        }
    }
}


console.log ("\n --- Batas --- \n")
