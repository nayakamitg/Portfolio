const t1=gsap.timeline()
const t2=gsap.timeline()
t1.from("nav",{
    y:-150,
    duration:1,
})

t1.from(".menu",{
    x:1500,
    duration:0.5,
    stagger:.3,
    
})
t1.from(
    ".bulb",
    {
        y:-1000,
        duration:2,
        ease:"bounce",
    }
)
t1.from(
    ".mode",
    {
        scale:0,
        opacity:0,
    }
)

t2.from(".content",
    {
        x:-600,
        duration:1,
        delay:3,
        opacity:0,
        ease: "back.out(1.7)",
    }
)
t2.from(
    ".img_container",
    {
        opacity:0,
        scale:0,
        duration:2,
        ease:"bounce",
    }
)

gsap.from(".card1",
    {
        left:-1900,
        duration:2,
        scrollTrigger:{
            trigger:".maincontainer1",
            scroller:"body",
            markers:true,
            start:"top 70%",
            scrub:true,
            end:"top 40%",
        }
    }
)

gsap.from(".card2",
    {
        left:1900,
        duration:2,
        scrollTrigger:{
            trigger:".A",
            scroller:"body",
            markers:true,
            start:"top 70%",
            scrub:2,
            end:"top 40%",
        }
    }
)

gsap.from(".html,.css,.js,.python,.dsa,.boot,.c,.cpp,.java",
    {
        width:"0px",
        duration:2,
        scrollTrigger:{
            trigger:".A",
            scroller:"body",
            markers:true,
            start:"top 70%",
            scrub:2,
            end:"top 40%",
        }
    }
)