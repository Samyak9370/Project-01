const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation(){
    var videocon=document.querySelector("#video-container");
    var playbtn=document.querySelector("#play");
    videocon.addEventListener("mouseenter",function(){
        gsap.to(playbtn, {
            scale:1,
            opacity:1
        });
    });
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn, {
            scale:0,
            opacity:0
        });
    });
    videocon.addEventListener("mousemove",function(deta) {
        gsap.to(playbtn, {
            left:deta.x-30,
            top:deta.y-70,
        });
    });
}

function loadingAnimation(){
    videoconAnimation();
    gsap.from("#page1 h1", {
        y:30,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    });
}

loadingAnimation();

gsap.from("#page1 #video-container", {
    scale:0.9,
    opacity:0,
    delay:1.5,
    duration:0.3,
});

document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor", {
        left:dets.x,
        top:dets.y
    });
});

// Loop through all .child elements and attach event listeners
document.querySelectorAll(".child").forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        gsap.to(".cursor", {
            transform:' translate(-50%,-50%)  scale(1)'
        });
    });
    elem.addEventListener("mouseleave", function() {
        gsap.to(".cursor", {
            transform:' translate(-50%,-50%)  scale(0)'
        });
    });
});
