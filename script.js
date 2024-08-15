var dmy =document.getElementById("dmy");
var btn = document.getElementById("btn");
var yr =document.getElementById("yr");
var mn =document.getElementById("mn");
var dt =document.getElementById("dt");

function calc(){
    var inpDate = new Date(dmy.value);
    var today =new Date();
    var years=today.getFullYear() - inpDate.getFullYear();
    if(today.getMonth()<inpDate.getMonth()){
        years--;
        var months = 12 + ((today.getMonth()) - (inpDate.getMonth()));
    }
    else{
        months = (today.getMonth()) - (inpDate.getMonth()) ;
    }
    if(today.getDate()<inpDate.getDate()){
        months--;
        var daymon = new Date(today.getFullYear(),today.getMonth(),0).getDate();
        var days = daymon -(inpDate.getDate()-today.getDate());
    }
    else{
        var days = today.getDate() - inpDate.getDate() ;
    }
    if(months<0){
        months=11;
        years--;
    }
    console.log(daymon);

    yr.textContent=years;
    mn.textContent=months;
    dt.textContent=days;
}

