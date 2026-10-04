const fruits=[
{name:"Rocket",type:"Natural",price:500,emoji:"🚀",desc:"A simple starter fruit with fast movement."},
{name:"Spin",type:"Natural",price:750,emoji:"🌀",desc:"A spinning fruit with fun mobility."},
{name:"Bomb",type:"Natural",price:2200,emoji:"💣",desc:"An explosive-themed fruit."},
{name:"Smoke",type:"Elemental",price:100000,emoji:"💨",desc:"A smoke-themed elemental fruit."},
{name:"Flame",type:"Elemental",price:250000,emoji:"🔥",desc:"A fire-themed elemental fruit."},
{name:"Ice",type:"Elemental",price:350000,emoji:"❄️",desc:"An ice-themed elemental fruit."},
{name:"Light",type:"Elemental",price:650000,emoji:"💡",desc:"A light-themed elemental fruit."},
{name:"Dark",type:"Elemental",price:500000,emoji:"🌑",desc:"A dark-themed elemental fruit."},
{name:"Magma",type:"Elemental",price:850000,emoji:"🌋",desc:"A magma-themed elemental fruit."},
{name:"Diamond",type:"Natural",price:100000,emoji:"💎",desc:"A defensive diamond-themed fruit."},
{name:"Buddha",type:"Beast",price:1200000,emoji:"🪷",desc:"A transformation-themed fruit."},
{name:"Phoenix",type:"Beast",price:1800000,emoji:"🦅",desc:"A mythical bird-themed fruit."}
];
const grid=document.getElementById("fruitGrid"),search=document.getElementById("search"),typeFilter=document.getElementById("typeFilter"),sort=document.getElementById("sort");
document.getElementById("fruitCount").textContent=fruits.length;
function render(){let list=fruits.filter(f=>f.name.toLowerCase().includes(search.value.toLowerCase())&&(typeFilter.value==="all"||f.type===typeFilter.value));if(sort.value==="priceHigh")list.sort((a,b)=>b.price-a.price);if(sort.value==="priceLow")list.sort((a,b)=>a.price-b.price);if(sort.value==="name")list.sort((a,b)=>a.name.localeCompare(b.name));grid.innerHTML=list.map(f=>`<article class="fruit-card"><div class="fruit-visual">${f.emoji}</div><span class="tag">${f.type}</span><h3>${f.name}</h3><div class="price">${f.price.toLocaleString()} B$</div><p class="desc">${f.desc}</p></article>`).join("")}
[search,typeFilter,sort].forEach(x=>x.addEventListener("input",render));render();
function showPage(id){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));document.getElementById(id).classList.add("active");window.scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
