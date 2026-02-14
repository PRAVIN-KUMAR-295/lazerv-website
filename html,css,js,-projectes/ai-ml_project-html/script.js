
var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function () {
  gsap.set(".nav-elem h5 span", {
    display: "none",
    x: 500,
    y: 0,
    scale:1,
  });

  var tl = gsap.timeline();

  tl.to("#nav-bottom", { duration: 1 });

  tl.to(".nav-elem h5 span", {
    display: "block",
    duration: 0.5,
    x: 0,
    
  });

  gsap.from(".page3-play h5", {
    y: 20,
    scale: 1,
    stagger: 1,
  });

  tl.to(".nav-elem h5 span", {
    y: 100,
    duration: 0.6,
    stagger: 0.2,
    scale: 0.4,
  });

  nav.addEventListener("mouseleave", function () {
    tl.timeScale(9);
    tl.reverse();

    gsap.set(".nav-elem h5 span", {
      autoAlpha: 0,
    });
  });
});

// document.addEventListener(
//   "contextmenu",
//   function (e) {
//     e.preventDefault();
//   },
//   false,
// );

gsap.to("#page1 h1 svg", {
  width: "13vh",
  scale: -1,
  rotate: "360deg",
  duration: 9,
});



var rightElems = document.querySelectorAll(".right-elem");

rightElems.forEach(function (elem) {
  var img = elem.querySelector("img");

  elem.addEventListener("mouseenter", function () {
    gsap.set(img, { x: 0, y: 0 }); // reset position
    gsap.to(img, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
    });
  });

  elem.addEventListener("mouseleave", function () {
    gsap.to(img, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
    });
  });

  elem.addEventListener("mousemove", function (e) {
    gsap.to(img, {
      x: e.offsetX - img.offsetWidth / 2,
      y: e.offsetY - img.offsetHeight / 2,
      duration: 0.2,
      ease: "power2.out",
    });
  });

  elem.addEventListener("mouseenter", function () {
    let rect = elem.getBoundingClientRect();

    gsap.to(img, {
      x: rect.width / 150,
      y: rect.height / 150,
    });
  });

  // shery.makeMagnet("#page3");
  var video = document.querySelector(".page3-center");
  video.addEventListener("mouseenter", function () {
    video.addEventListener("mouseomve", function () {
      gsap.to("page3-play", {
        left: dets.x,
        y: dets.y,
      });
    });
  });
});

var playBtn = document.querySelector(".page3-play");
var video = document.querySelector(".page3-center video");
var img = document.querySelector(".page3-center img");

playBtn.addEventListener("click", function () {
  if (video.paused) {
    // PLAY
    img.style.opacity = 0;
    video.style.opacity = 1;
    video.play();
    playBtn.style.display = "none";
  } else {
    // STOP
    video.pause();
    video.currentTime = 0; // optional: start se band ho
    video.style.opacity = 0;
    img.style.opacity = 1;
    playBtn.style.display = "flex";
  }
});

// Video par click → pause + image show
video.addEventListener("click", function () {
  video.load();
  video.style.opacity = 0;
  img.style.opacity = 1;
  playBtn.style.display = "flex";
});



var sections = document.querySelectorAll(".section-first-right")
sections.forEach(function(elem){
 elem.addEventListener("mouseenter",function(){
  elem.childNodes[3].style.opacity = 1,
  elem.childNodes[3].play( )
  

 })
  elem.addEventListener("mouseleave",function(){
  elem.childNodes[3].style.opacity = 0
  elem.childNodes[3].load()
  load("0.2s")

 })
})

gsap.to("#om h4",{
x:0,
duration:0.50,
stagger:0.15,
  scrollTrigger:{
    trigger:"#om h4",
    markers:true,
    scroller:"body",
    scrub:true,
    markers:false,
    start:"top 60%",
    end:"top 0%"
  }
})

gsap.set("#nav-bottom", {
  opacity: 1,
  scaleY: 0.6,
  y: 0
});


var card = document.querySelector(".page8-part1");

card.addEventListener("mouseenter", () => {
  gsap.to(".page8-part1 img", {
    yPercent: -100,
    duration: 0.5
  });
  gsap.to(".page8-part1 video", {
    opacity: 1,
    duration: 0.5
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(".page8-part1 img", {
    yPercent: 0,
    duration: 0.5
  });
  gsap.to(".page8-part1 video" ,{
    opacity: 0,
load,
    duration: 0.5
  });
});





var tl = gsap.timeline()


tl.from("#main", {
  opacity: 0,
  scaleX: 0.8,
  scaleY: 0,
  translateY:80,
  duration: 3.5,
   borderRadius: "300px",
   border: "2px solid #0ba34e",
    // transformOrigin: "top 100%",
  ease: "expo.out"
})

tl.from("nav>h1",{
 duration:-10
})

tl.from("nav", {
  opacity: 0,
  y: 0,
  duration: -2,
})

tl.from("#main h1, #main div", {
  opacity: 0,
  x: 30,
  delay:0.2,
  stagger: 0.20,
  duration: 0.3
})


gsap.from(".class-click", {
  scaleX: 0,
  duration: 1,
  ease: "back.out(1.7)",
  scrollTrigger:{
    scroller:"body",
    trigger:".class-click",
    rotateY:"720deg",
    scrub:true,
  }
});

gsap.from(".class-click h4", {
  y: -30,
  opacity: 1,
  duration: 0.8,
  delay: 0.5
});

gsap.from(".class-click h4", {
  y: 40,
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "back.out(2)"
});

gsap.registerPlugin(ScrollTrigger);

var int = gsap.timeline({
  scrollTrigger: {
    trigger: ".page12-part1 > h1",
    start: "top 60%",
    end: "top 10%",
    scrub: true,
    markers: false
  }
});

int.from(".page12-part1 > h1", {
  y: 100,
  scaleX: 0.5,
  scaleY: 0.5,
  opacity: 0,
  duration: 1,
  stagger: {
    amount: 0.5
  }
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".page13-part1 > img", {
  rotate:"720deg",
  duration: 1,
  scrollTrigger: {
    trigger: ".page13-part1 > img",
    start: "top 100%",
    end: "top 0%",
    scrub: true,
    markers: false
  }
});














// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
//     scale:1.2,
// });

