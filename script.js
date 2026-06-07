const slides=[...document.querySelectorAll('.slide')];
const dots=document.getElementById('dots');
let current=0;
slides.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',`スライド${i+1}`);b.onclick=()=>show(i);dots.appendChild(b);});
const buttons=[...dots.children];
if(buttons[0]) buttons[0].classList.add('active');
function show(i){slides[current].classList.remove('active');buttons[current].classList.remove('active');current=i;slides[current].classList.add('active');buttons[current].classList.add('active');}
setInterval(()=>show((current+1)%slides.length),3000);
const menuBtn=document.getElementById('menuBtn'),drawer=document.getElementById('drawer');
menuBtn.onclick=()=>drawer.classList.toggle('open');
drawer.querySelectorAll('a').forEach(a=>a.onclick=()=>drawer.classList.remove('open'));
