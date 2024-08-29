gsap.from("#page1 nav h1",{
    y:-25,
    opacity: 0,
    duration:2.1,
    scale:2,
    ease: "bounce.out",
})
var tl1=gsap.timeline()

tl1.from(".menu a",{
    y:-80,
duration:2,
ease: "bounce.out",
stagger:1
})
gsap.from("#Welcome h1 ",{
    x:1200,
    scale:2,
    duration:2,
    ease: "elastic.out(1,0.3)",

})
gsap.from(".img img",{
    scale:0,
    duration:1
})

var tl2=gsap.timeline()
tl2.from(".column1 button",{
    x:-300,
    duration: 1,
    stagger:1,
    delay: 1,
    ease: "elastic.out(1,0.8)",
})

gsap.from(".column2 h4",{
x:1500,
duration:2,
ease: "bounce.out",





})