function la_thu(){
    var name,address,date;
    name=document.getElementById('name').value;
    date=document.getElementById('date').value;
    address=document.getElementById('address').value;

    document.getElementById('result1').innerHTML= name ;
    document.getElementById('result2').innerHTML= date + " " + address;
}