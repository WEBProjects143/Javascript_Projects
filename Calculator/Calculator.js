console.log("hello")
const input=document.getElementById("Input");
const button=document.querySelectorAll("button");

let string="";
let btnarr=[...button];
console.log(btnarr)
btnarr.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
     if(e.target.innerHTML != "=" && e.target.innerHTML != "AC" && e.target.innerHTML != "DEL" ){
        let btnvalue=e.target.innerHTML
        string+=btnvalue
        input.value=string;
     }else if(e.target.innerHTML == "AC"){
        string="";
        input.value=string;

     }else if(e.target.innerHTML == "="){
     string=eval(string)
     input.value=string;
     } else if(e.target.innerHTML == "DEL"){
        string=string.substring(0,string.length-1);
        input.value=string;
     }

    })
})