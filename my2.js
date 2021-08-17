const PI=3.14;
function tinh_chu_vi() {
    let R = +document.getElementById('R').value;
    C =R*2*PI;
document.getElementById('result').innerHTML=C;
}
function tinh_dien_tich() {
    let R = +document.getElementById('R').value;
    S =R*R*PI;
document.getElementById('result1').innerHTML=S;
}