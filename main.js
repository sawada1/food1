

let up_btn = document.querySelector(".up");


window.onscroll = () =>{
    if(window.scrollY > 550 ){
        up_btn.classList.add("show");
      } 
      else{
        up_btn.classList.remove("show");
      }
};
up_btn.onclick = ()=>{
        window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar .list');
let navA = document.querySelectorAll('.navbar .list ul li a');

menu.addEventListener(("click"), function(e){
  e.target.classList.toggle("fa-times");
  if(e.target.classList.contains("fa-times")){
    navbar.classList.add('active');
  } else{
    navbar.classList.remove('active');
  }
})
// menu.onclick = () =>{
//   menu.classList.toggle('fa-times');
//   navbar.classList.remove('active');
//   navA.forEach((e)=>e.classList.remove("active"));
// }


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut();