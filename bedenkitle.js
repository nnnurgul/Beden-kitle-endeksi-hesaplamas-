let boy=number(prompt("lütfen boyunuzu giriniz"));
let kilo=number(prompt("lütfen kilonuzu giriniz"));

let sonuc=kilo/(boy*2);
let kişi=alert("qnx");
if(sonuc<18.5){
    console.log("ideal kilonun altında"+sonuc);

}
else if(sonuc>18.5&&sonuc<=24.9){
    console.log("ideal kilonun altında"+sonuc);
}
else if(sonuc>=25&&sonuc<=29.9)
{
    console.log("ideal kiloda"+sonuc);
}
else if(sonuc>=30&&sonuc<=39.9){
    console.log("ideal kilonun çok üstünde(obez)"+sonuc);
}
else if(sonuc>=40)
{
    console.log("ideal kilonun çok üstünde(morbid obez)");
}
