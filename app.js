const enddate="30 August 2024 12:00 AM";
document.querySelector('h2').innerText=enddate;
let input=document.querySelectorAll('input');
function clock(){
    const end=new Date(enddate);
    const now=new Date();
    const diff=(end-now)/1000;
    if(diff<0)return;
    input[0].value=Math.floor(diff/3600/24);
    input[1].value=Math.floor(diff/3600)%24;
    input[2].value=Math.floor(diff/60)%60;
    input[3].value=Math.floor(diff%60);

}
clock();
setInterval(()=>{
    clock();
},1000);
