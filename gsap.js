gsap.from("#t1",{
  x:-500,
  opacity:0,
  duration:1.5,
  scrollTrigger:{
    trigger:"#t1",
    markers:true,
    scrub:true,
    end:"top 60%"
  }
})
gsap.from("#t2",{
  x:+500,
  opacity:0,
  duration:1.5,
  scrollTrigger:{
    trigger:"#t2",
    markers:true,
    scrub:true,
    end:"top 40%"
  }
})