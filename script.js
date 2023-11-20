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
var tl3 =gsap.timeline({ scrollTrigger:{
    scroller:"body",
    trigger:"#page4 ",
    scrub:true,
    start:"top 0%",
    end:"top -100%",
    // markers:true,
}   
})



var close =document.querySelector("#close")
var logo = document.querySelector("#logo")

var image = document.querySelector("#image")
var first = document.querySelector("#first")
var second = document.querySelector("#second")
var third = document.querySelector("#third")
 var fourth = document.querySelector("#fourth")
 var five = document.querySelector("#five")
 var six  = document.querySelector("#six")
 var seven = document.querySelector("#seven")
 var eight = document.querySelector("#eight")
 var nine = document.querySelector("#nine")
 var ten  = document.querySelector("#ten")

function openImg(){
    image.addEventListener("click",function(){
        document.querySelector("#text").style.opacity="0";
    document.querySelector("#para").style.opacity="0";
    close.style.opacity="1"
    logo.style.opacity="0"
    
    
        first.style.height="30%"
    first.style.left="85%";
    first.style.top="2%";
 
    second.style.height="30%"
    second.style.left="40%";
    second.style.top="30%";
    
    third.style.height="30%"
    third.style.left="0%";
    third.style.top="0%";
    
    fourth.style.height="50%"
    fourth.style.left="5%"
    fourth.style.top="35%"
    
    five.style.height="30%"
    five.style.left="75%"
    five.style.top="90%"
    
    
    six.style.height="30%"
    six.style.left="70%"
    six.style.top="50%"
    
    seven.style.height="30%"
    seven.style.left="40%"
    seven.style.top="75%"
    
    eight.style.height="30%"
    eight.style.left="25%"
    eight.style.top="12%"
    
    nine.style.height="30%"
    nine.style.left="2%"
    nine.style.top="90%"
    
    ten.style.height="30%"
    ten.style.left="65%"
    ten.style.top="5%"
    
    
    })
    
    
}

openImg()
function closeImg(){
    close.addEventListener("click",function(){
   
        document.querySelector("#text").style.opacity="1";
    document.querySelector("#para").style.opacity="1";
    close.style.opacity="0"
    logo.style.opacity="1"
    
        first.style.height="30vw"
        first.style.left="36%";
        first.style.top="35%"; 
    
        second.style.height="20vw"
        second.style.left="33%";
    second.style.top="45%";
    
    third.style.height="24vw"
    third.style.left="32%";
    third.style.top="40%";
    
    fourth.style.height="12vw"
    fourth.style.left="32%";
    fourth.style.top="47%";
    
    five.style.height="12vw"
    five.style.left="32%";
    five.style.top="45%";
    
    six.style.height="12vw"
    six.style.left="32%";
    six.style.top="45%";
    
    seven.style.height="12vw"
    seven.style.left="32%";
    seven.style.top="45%";
    
    eight.style.height="12vw"
    eight.style.left="32%";
    eight.style.top="45%";
    
    nine.style.height="12vw"
    nine.style.left="32%";
    nine.style.top="45%";
    ten.style.height="12vw"
    ten.style.left="32%";
    ten.style.top="45%";
        
    
    })

}
closeImg()
