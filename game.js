var ulang=true;
while (ulang){

// Menangkap pilihan player
var p= prompt("Silahkan pilih : gajah, semut, orang");
// Menangkap pilian komputer
// Membangkitkan bilangan random
var c=Math.random();

if(c<0.34){
    c="gajah";
}else if(c>=0.34 && c<0.67){
    c="orang"
}else{
    c="semut";
}
console.log(c);

// Menentukan rules
var hasil="";
if(p==c){
    hasil="SERI";
}else if(p=="gajah"){
    // if(c=="orang"){
    //     hasil="MENANG";
    // }else{
    //     hasil="KALAH";
    // }
    hasil=(c=='orang') ? "MENANG" : "KALAH";
}else if(p=="orang"){
    // if(c=="gajah"){
    //     hasil="KALAH";
    // }else{
    //     hasil="MENANG";
    // }
    hasil=(c=="gajah") ? "KALAH" : "MENANG";
}else if(p=="semut"){
    hasil=(c=="orang") ? "KALAH" : "MENANG";
}else{
    hasil="Memasukan pilihan yang salah"

// Tampilkan hasilnya
alert("Kamu memilih: "+p+" \nKomputer memilih: "+c+" \nHasilnya kamu: "+hasil);

    ulang = confirm("Mencoba bermain lagi?");
}

    alert("Terima kasih sudah bermain")