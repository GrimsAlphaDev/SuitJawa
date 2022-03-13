let lagi = true;

while (lagi) {
    
    let p = prompt("Pilih : Gajah, Semut, Orang");
    
    
    let comp = Math.round(Math.random() * 10);
    
    if (comp < 3.3) {
        comp = "Gajah";
    } else if(comp < 6.6) {
        comp = "Orang";
    } else {
        comp = "Semut";
    }
    
    
    if (p == comp) {
        hasil = "SERI";
    } else if(p == 'Gajah'){
        hasil = (comp == 'Orang' ? "Menang" : "Kalah");
    } else if (p == 'Semut'){
        hasil = (comp == 'Gajah' ? "Menang" : "Kalah");
    } else if (p == 'Orang'){
        hasil = (comp == 'Semut' ? "Menang" : "Kalah");
    } else {
        hasil = "Pilihan Anda Salah"
    }

    alert('Anda memilih ' + p + ', dan komputer memilih '+ comp +'\nMaka hasilnya '+ hasil );

    lagi = confirm('Lagi ?');

}


