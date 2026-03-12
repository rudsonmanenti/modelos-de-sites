/* filtro de produtos */

const botoes=document.querySelectorAll(".filtros button")
const itens=document.querySelectorAll(".item")

botoes.forEach(btn=>{

btn.addEventListener("click",()=>{

const filtro=btn.dataset.filter

itens.forEach(item=>{

if(filtro==="all"||item.classList.contains(filtro)){

item.style.display="block"

}else{

item.style.display="none"

}

})

})

})

/* animação no scroll */

window.addEventListener("scroll",()=>{

const header=document.getElementById("header")

if(window.scrollY>50){

header.style.background="#000"

}else{

header.style.background="rgba(0,0,0,0.4)"

}

})