var tl =gsap.timeline({
    scrollTrigger:{
        trigger:"#page2 video",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:3,
    }
})
tl
.to("#textcontent",{
    opacity:0,
    scale:0.9,
},"a")
.to("#nav #pixel,#navpart2",{
    opacity:0,
},"a")
.to("#nav #pixelLogo",{
    opacity:1,
})



// gsap.to("#part2 h3",{
//     y:-120,
//     duration:8,
//     delay:0.2,

// })   
var tl2 =gsap.timeline({
scrollTrigger:{
    scroller:"body",
    trigger:"#page3 img",
    scrub:3,
    start:"top 70%",
    end:"top -120%",
    // markers:true,
}

})
tl2
.to("#page3  img",{
   scale:1.5
})


var tl4 =gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:"#page5 ",
        scrub:true,
        start:"top 60%",
        end:"top 0%",
        scrub:5,
        // markers:true,
    }   

})
tl4
.from("#textcontent3 h2",{
    y:500,
    opacity:0,
    staggar:1,

})

