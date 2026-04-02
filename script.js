const text=["SOC Analyst","Cybersecurity Enthusiast","AI Security Explorer"]

let count=0
let index=0
let current=""
let letter=""

function type(){

if(count===text.length){count=0}

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



const canvas=document.getElementById("matrix")
const ctx=canvas.getContext("2d")

canvas.height=window.innerHeight
canvas.width=window.innerWidth

const letters="01ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const matrix=letters.split("")

const fontSize=14
const columns=canvas.width/fontSize
const drops=[]

for(let x=0;x<columns;x++)drops[x]=1

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#00ff9c"
ctx.font=fontSize+"px monospace"

for(let i=0;i<drops.length;i++){

const text=matrix[Math.floor(Math.random()*matrix.length)]

ctx.fillText(text,i*fontSize,drops[i]*fontSize)

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0

drops[i]++

}

}

setInterval(draw,33)



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
const ctxRadar = document.getElementById('radarChart');

new Chart(ctxRadar, {
type: 'radar',

data: {
labels: [
'Threat Detection',
'SIEM Analysis',
'Incident Response',
'OSINT',
'AI Security',
'Malware Analysis'
],

datasets: [{
label: 'Skill Level',
data: [85, 80, 75, 70, 80, 75],

backgroundColor: 'rgba(0, 255, 156, 0.2)',
borderColor: '#00ff9c',
borderWidth: 2,
pointBackgroundColor: '#00ff9c'
}]
},

options: {
scales: {
r: {
angleLines: { color: '#00ff9c' },
grid: { color: '#1b1b1b' },
pointLabels: { color: '#ffffff' },
ticks: {
color: '#00ff9c',
backdropColor: 'transparent'
}
}
},
plugins: {
legend: {
labels: { color: '#ffffff' }
}
}
}
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') return;
    // your glow effect
  });
});



// new code 

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
