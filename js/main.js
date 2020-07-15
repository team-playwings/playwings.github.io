document.addEventListener('DOMContentLoaded', () => {
    //Stellar
    $(function () {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 150
        });
    });

    gsap.registerPlugin(ScrollTrigger);

    // Intro Parallax
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger:"#hero",
            start:"top top",
            end: "bottom top",
            scrub: true,
            onEnterBack: () => $("#hero").css("opacity", 1),
            onLeave: () => $("#hero").css("opacity", 0)
        }
    });
    
    gsap.utils.toArray(".parallax").forEach(layer =>{
        tl.to(layer, {
            y: -(layer.offsetHeight * layer.dataset.depth),
            ease: "none"
        }, 0)
    });

    // Logo
    gsap.to(".header", {
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderBottom: "1px solid rgba(0,0,0,.12)",
        scrollTrigger: {
            trigger: "#content",
            start: "top",
            end: "top",
            scrub: true,
        },
    });

    document.getElementById('bi-white').style.visibility= "hidden";

    // Image Fade In Up
    $(".section").each(function (i) {
        let targetImg = $(this).find("img");
        const imgTl = gsap.timeline({
            scrollTrigger:{
                trigger: this,
                start: "top 75%",
                toggleActions:"play none none none",
            }
        });
        imgTl.fromTo(targetImg, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0})
    });

    // Title Fade In Up
    $(".content-text").each(function (i) {
        let target1 = $(this).find("h1");
        let target2 = $(this).find("p");
        const titleTl1 = gsap.timeline({
            scrollTrigger:{
                trigger: this,  
                start: "top 75%",
                toggleActions: "play none none none none"
            }
        });
        titleTl1.fromTo(target1, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0})
        titleTl1.fromTo(target2, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0}, '-=0.8')
    });
})