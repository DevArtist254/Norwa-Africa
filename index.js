const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");


const slides = document.querySelectorAll(".move");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 10000;
let slideInterval;

const nextSilde = () => {
  const current = document.querySelector('.current')
  //remove current class
  current.classList.remove('current');

  //Check for next slide
  if(current.nextElementSibling){
    //add current to next sibling
    current.nextElementSibling.classList.add('current')
  }else {
    slides[0].classList.add('current');
  }

  setTimeout(() => {
    current.classList.remove('current')
  })
}

const prevSilde = () => {
  const current = document.querySelector('.current')
  //remove current class
  current.classList.remove('current');

  //Check for next slide
  if(current.previousElementSibling){
    //add current to next sibling
    current.previousElementSibling.classList.add('current')
  }else {
    //add current to class
    slides[slides.length - 1].classList.add('current');
  }

  setTimeout(() => {
    current.classList.remove('current')
  })
}


next.addEventListener('click', e => {
  nextSilde()

  if(auto) {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSilde, intervalTime)
  }
})

prev.addEventListener('click', e => {
  prevSilde()

  if(auto) {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSilde, intervalTime)
  }
})


if(auto) {
  //Run next slide at interval time
  slideInterval = setInterval(nextSilde, intervalTime)
}

document.querySelector(".naviMob__menu").addEventListener("click", () => {
  let popup = document.querySelector(".mob__popup")

  popup.classList.toggle("nonv");
})

