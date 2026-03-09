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



const terminalLines=[
"> Initializing Cybersecurity Portfolio...",
"> Loading Threat Intelligence Modules...",
"> SOC Monitoring Active...",
"> Access Granted ✔"
]

let i=0

function terminal(){

if(i<terminalLines.length){

const p=document.createElement("p")

p.textContent=terminalLines[i]

document.querySelector(".terminal").appendChild(p)

i++

setTimeout(terminal,800)

}

}

terminal()
