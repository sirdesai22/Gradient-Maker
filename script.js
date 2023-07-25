const body = document.querySelector("body")
const c1 = document.getElementById("color1")
const c2 = document.getElementById("color2")

c1.addEventListener("input", ()=>{
    body.style.background = `linear-gradient(to right, ${c1.value}, ${c2.value})`
})
c2.addEventListener("input", ()=>{
    body.style.background = `linear-gradient(to right, ${c1.value}, ${c2.value})`
})