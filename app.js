
function rating(){
    let a=document.getElementById("one").innerText;
    localStorage.setItem("value",a);
}
function rating1(){
    let b=document.getElementById("two").innerText;
    localStorage.setItem("value",b);
}
function rating2(){
    let c=document.getElementById("three").innerText;
    localStorage.setItem("value",c);

}
function rating3(){
    let d=document.getElementById("four").innerText;
    localStorage.setItem("value",d);

}

function rating4(){
    let e=document.getElementById("five").innerText;
    localStorage.setItem("value",e);
}

let y=document.getElementById("1");
y.textContent=localStorage.getItem("value");