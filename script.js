const endDate='31 DECEMBER 2023 12:00 PM'
document.getElementById('enddate').innerHTML=endDate;

const inputs= document.querySelectorAll('input')

const clcok =()=>{
    const end = new Date(endDate)
    const now = new Date()
    // convert milisec
    const diff = (end-now)/1000;
    if(diff<0)return;
    // diff=milisec, sec, hours=days
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/30)%60;
    inputs[3].value=Math.floor(diff)%60;

}
clcok()

setInterval(()=>{
    clcok()
},1000)