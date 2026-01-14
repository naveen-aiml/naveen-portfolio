const layers=document.querySelectorAll(".layer");

window.addEventListener("scroll",()=>{
  const s=window.scrollY;

  layers[0].style.transform=`translateY(${s*0.15}px)`; // bg
  layers[1].style.transform=`translateY(${s*0.25}px)`; // glow

  layers[2].style.transform=`translateY(${1000 - s*1}px)`;  // hero
  layers[3].style.transform=`translateY(${2000 - s*1}px)`;  // about
  layers[4].style.transform=`translateY(${3000 - s*1}px)`;  // project
  layers[5].style.transform=`translateY(${4000 - s*1}px)`;  // contact
});
