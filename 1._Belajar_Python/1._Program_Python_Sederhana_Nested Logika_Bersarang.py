# Program Python Sederhana Nested Logika Bersarang 

print ("\n Program Python Sederhana Nested Logika Bersarang \n")


print ("\n Nested Percabangan If level 1 (Elif) \n")


a = 10
cek = True

if cek:
    if a > 5:
        print (f"Besar, nilai = {a}")
        
    elif a < 5:
        print (f"Kecil, nilai = {a}")
        
else:
    print (f"Semula, nilai = {a}")
    
    
print ("\n --- Batas --- \n")




b = 2
cek = True

if cek:
    if b > 5:
        print (f"Besar, nilai = {b}")
        
    elif b < 5:
        print (f"Kecil, nilai = {b}")
        
else:
    print (f"Semula, nilai = {b}")
    
    
print ("\n --- Batas --- \n")




print ("\n Nested Percabangan If level 1 (Else) \n")


c = 9
cek = True

if cek:
    if c > 5:
        print (f"Besar, nilai = {c}")
        
    else:
        print (f"Kecil, nilai = {c}")
        
else:
    print (f"Semula, nilai = {c}")
    
    
print ("\n --- Batas --- \n")




d = 3
cek = True

if cek:
    if d > 5:
        print (f"Besar, nilai = {d}")
        
    else:
        print (f"Kecil, nilai = {d}")
        
else:
    print (f"Semula, nilai = {d}")
    
    
print ("\n --- Batas --- \n")




print ("\n Nilai Rapor Sederhana \n")


nilai = 100

if nilai >= 90:
    print (f"A, nilai = {nilai}")
    
elif nilai >= 80:
    print (f"B, nilai = {nilai}")
    
elif nilai >= 75:
    print (f"C, nilai = {nilai}")
    
elif nilai >= 70:
    print (f"D, nilai = {nilai}")
    
elif nilai >= 60:
    print (f"E, nilai = {nilai}")
    
elif nilai >= 50:
    print (f"F, nilai = {nilai}")
    
else:
    print (f"Jelek semua nilainya, nilai = {nilai}")
    
    
print ("\n --- Batas --- \n")




print ("\n Skor UTBK dan SNBT \n")


skor = 1000

if skor >= 900:
    print (f"A, nilai = {skor}")
    
elif skor >= 800:
    print (f"B, nilai = {skor}")
    
elif skor >= 750:
    print (f"C, nilai = {skor}")
    
elif skor >= 700:
    print (f"D, nilai = {skor}")
    
elif skor >= 600:
    print (f"E, nilai = {skor}")
    
elif skor >= 500:
    print (f"F, nilai = {skor}")
    
else:
    print (f"Jelek amat nilainya, nilai = {skor}")


print ("\n --- Batas --- \n")




print ("\n Percabangan Nested level 2 (Usia Produktif Manusia) \n")


usia = 19
cek = True

if cek:
    if usia >= 15:
        print (f"Usia produktif, dan usia {usia}")
        
    elif usia <= 64:
        print (f"Masih bisa produktif, dan usia = {usia}")
        
else:
    print (f"Bukan usia produktif, dan usia = {usia}")


print ("\n --- Batas --- \n")




print ("\n Percabangan Nested level 3 (Join ke member JKT48) \n")


umur = 18
cek = True

if cek:
    if umur >= 13 and umur <= 19:
        print (f"Kamu boleh ikut audisi JKT48, dan usia = {umur}")
        
    elif umur > 19:
        print (f"Kamu sudah matang, gabung ke JKT48, dan usia = {umur}")
        
    else:
        print (f"Gak lolos audisi JKT48, usia = {umur}")
        
else:
    print (f"Belum bisa ikut audisi JKT48, usia = {umur}")
    
    
print ("\n --- Batas --- \n")




print ("\n For dasar \n")


for a in range (8):
    print (f"Urutan ke - {a}")
    
    
print ("\n --- Batas --- \n")




for b in range (6):
    print (f"Urutan ke - {b}")
    
    
print ("\n --- Batas --- \n")




for c in range (9):
    print (f"Urutan ke - {c}")
    
    
print ("\n --- Batas --- \n")




print ("\n While dasar \n")


a = 5

while a < 10:
    print (f"Urutan ke - {a}")
    a = a + 1
    
    
print ("\n --- Batas --- \n")




b = 8

while b < 16:
    print (f"Urutan ke - {b}")
    b = b + 1
    
    
print ("\n --- Batas --- \n")




c = 5

while c < 10:
    print (f"Urutan ke - {c}")
    c = c + 1
    
    
print ("\n --- Batas --- \n")




print ("\n For Nested \n")


for a in range (5):
    for b in range (5):
        print (f"Urutan ke - {a} dan Urutan ke - {b}")
        
        
print ("\n --- Batas --- \n")




for c in range (4):
    for d in range (4):
        print (f"Urutan ke - {c} dan Urutan ke - {d}")
        
        
print ("\n --- Batas --- \n")




for e in range (3):
    for f in range (3):
        print (f"Urutan ke - {e} dan Urutan ke - {f}")
        
        
print ("\n --- Batas --- \n")
