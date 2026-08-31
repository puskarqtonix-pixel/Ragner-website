
const btn=document.querySelector('.menuBtn'), nav=document.querySelector('.topbar nav');
if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.dataset.open==='1';nav.dataset.open=open?'0':'1';nav.style.display=open?'none':'flex';if(!open){Object.assign(nav.style,{position:'absolute',top:'72px',left:'0',right:'0',padding:'24px 5vw',background:'#01050df7',flexDirection:'column',gap:'20px',borderTop:'1px solid #203047'});}});}
document.addEventListener('mousemove',e=>{const v=document.querySelector('.hero video');if(!v||innerWidth<800)return;const x=(e.clientX/innerWidth-.5)*8,y=(e.clientY/innerHeight-.5)*4;v.style.transform=`scale(1.035) translate(${x}px,${y}px)`;});
