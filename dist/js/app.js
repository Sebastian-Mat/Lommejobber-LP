//  SideNav Initialization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

//  Scrollspy Initialization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.ScrollSpy.init(elems);
});

//  Overlay White Lay
TweenMax.to(".overlay-page", 2, {
  delay: 0.5,
  y: "-100%",
  ease: Power3.easeOut,
});

//  Nav Animation
gsap.from(".sidenav-trigger", { opacity: 0, duration: 1, x: -20, delay: 1.7 });
gsap.from(".join", { opacity: 0, duration: 1, x: 15, delay: 1.7 });

//  Logo Animations
TweenMax.from(".logo", 2, {
  delay: 2,
  y: -110,
  ease: Power3.easeOut,
});
TweenMax.from(".logo-info", 2, {
  delay: 2.2,
  y: -100,
  ease: Power3.easeOut,
});

//  Info Animations
TweenMax.from(".about-title", 1, {
  delay: 0.2,
  opacity: 0,
  y: -10,
  scrollTrigger: { trigger: ".information", start: "top 30%" },
  ease: Power3.easeOut,
});
TweenMax.from(".about-text", 1, {
  delay: 0.3,
  opacity: 0,
  y: -10,
  scrollTrigger: { trigger: ".information", start: "top 30%" },
  ease: Power3.easeOut,
});
TweenMax.from(".download", 1, {
  opacity: 0,
  delay: 0.4,
  y: -10,
  scrollTrigger: { trigger: ".information", start: "top 30%" },
  ease: Power3.easeOut,
});

//  Map Animations
TweenMax.to(".overlay-map", 1, {
  delay: 0.2,
  y: "100%",
  scrollTrigger: { trigger: ".map", start: "top 60%" },
  ease: Power3.easeOut,
});
TweenMax.from(".map-text", 1, {
  opacity: 0,
  delay: 0.6,
  y: -10,
  scrollTrigger: { trigger: ".map", start: "top 50%" },
  ease: Power3.easeOut,
});

TweenMax.from(".worker", 1, {
  opacity: 0,
  delay: 1.5,
  x: 10,
  scrollTrigger: { trigger: ".qualities", start: "top 50%" },
  ease: Power3.easeOut,
});

if (window.innerWidth < 992) {
  //  Qualitites Animations
  TweenMax.to(".overlay-box-1", 1.5, {
    delay: 0.2,
    y: "100%",
    scrollTrigger: { trigger: ".qualities", start: "top 30%" },
    ease: Power3.easeOut,
  });
  TweenMax.to(".overlay-box-2", 1.5, {
    delay: 0.7,
    y: "-100%",
    scrollTrigger: { trigger: ".qualities", start: "top 30%" },
    ease: Power3.easeOut,
  });
  TweenMax.to(".overlay-box-3", 1.5, {
    delay: 1.2,
    y: "100%",
    scrollTrigger: { trigger: ".qualities", start: "top 30%" },
    ease: Power3.easeOut,
  });
  TweenMax.from(".qualities-title", 1, {
    delay: 1.3,
    opacity: 0,
    x: -20,
    scrollTrigger: { trigger: ".qualities", start: "top -10%" },
    ease: Power3.easeOut,
  });
  TweenMax.from(".qualities-info", 1, {
    delay: 1.5,
    opacity: 0,
    x: -10,
    scrollTrigger: { trigger: ".qualities", start: "top -10%" },
    ease: Power3.easeOut,
  });
  TweenMax.from(".quality", 1, {
    delay: 1.7,
    opacity: 0,
    x: -10,
    scrollTrigger: { trigger: ".qualities", start: "top -5%" },
    ease: Power3.easeOut,
  });

  //  Footer Animations
  TweenMax.to(".overlay-footer", 1, {
    delay: 2,
    y: -100,
    scrollTrigger: { trigger: ".qualities", start: "top -10%" },
    ease: Power3.easeOut,
  });
} else {
  //  Qualitites Animations
  TweenMax.to(".overlay-box-1", 1.5, {
    delay: 0.2,
    y: "100%",
    scrollTrigger: { trigger: ".qualities", start: "top 30%" },
    ease: Power3.easeOut,
  });
  TweenMax.to(".overlay-box-2", 1.5, {
    delay: 0.7,
    y: "-100%",
    scrollTrigger: { trigger: ".qualities", start: "top 30%" },
    ease: Power3.easeOut,
  });
  TweenMax.to(".overlay-box-3", 1.5, {
    delay: 1.2,
    y: "100%",
    scrollTrigger: { trigger: ".qualities", start: "top 30%" },
    ease: Power3.easeOut,
  });
  TweenMax.from(".qualities-title", 1, {
    delay: 1.3,
    opacity: 0,
    x: -20,
    scrollTrigger: { trigger: ".qualities", start: "top 30%" },
    ease: Power3.easeOut,
  });
  TweenMax.from(".qualities-info", 1, {
    delay: 1.5,
    opacity: 0,
    x: -10,
    scrollTrigger: { trigger: ".qualities", start: "top 30%" },
    ease: Power3.easeOut,
  });
  TweenMax.from(".quality", 1, {
    delay: 1.7,
    opacity: 0,
    x: -10,
    scrollTrigger: { trigger: ".qualities", start: "top 30%" },
    ease: Power3.easeOut,
  });

  //  Footer Animations
  TweenMax.to(".overlay-footer", 1, {
    delay: 2,
    y: -100,
    scrollTrigger: { trigger: ".qualities", start: "top top" },
    ease: Power3.easeOut,
  });
}
