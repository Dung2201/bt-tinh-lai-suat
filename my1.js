function tinh_tien_lai(){
    var money= +document.getElementById('money').value;
    var month= +document.getElementById('month').value;
    if(month>0&&money>50000){
    var totalMoney= money + money*0.065*(month/12);
    document.getElementById('result').innerHTML=totalMoney;
    }
    else{
        document.getElementById('result').innerHTML='Vui long kiem tra lai';
    }
}
