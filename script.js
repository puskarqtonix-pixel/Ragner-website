
const menu = document.querySelector('.menuBtn');
const nav = document.querySelector('.topbar nav');
if(menu && nav){
  menu.addEventListener('click',()=>{
    const open = nav.dataset.open === '1';
    nav.dataset.open = open ? '0' : '1';
    nav.style.display = open ? 'none' : 'flex';
    if(!open){
      Object.assign(nav.style,{position:'absolute',left:'0',right:'0',top:'72px',background:'#01050df7',padding:'25px 5vw',flexDirection:'column',gap:'22px',borderTop:'1px solid #203047'});
    }
  });
}
document.addEventListener('mousemove', e=>{
  const v=document.querySelector('.hero-video');
  if(!v || window.innerWidth<800) return;
  const x=(e.clientX/window.innerWidth-.5)*8;
  const y=(e.clientY/window.innerHeight-.5)*5;
  v.style.transform=`scale(1.045) translate(${x}px,${y}px)`;
});
