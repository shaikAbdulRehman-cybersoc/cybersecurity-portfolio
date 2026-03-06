const text=["SOC Analyst","Cybersecurity Enthusiast","AI Security Explorer"]

let count=0
let index=0
let current=""
let letter=""

function type(){

if(count===text.length){
count=0
}

current=text[count]

letter=current.slice(0,++index)

document.querySelector(".typing").textContent=letter

if(letter.length===current.length){

count++
index=0

}

setTimeout(type,150)

}

type()

particlesJS("particles-js",{

particles:{

number:{value:80},

size:{value:3},

color:{value:"#00f7ff"},

line_linked:{enable:true,color:"#00f7ff"}

}

})
