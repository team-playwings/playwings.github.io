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
            scrub: true
        }
    });

    gsap.utils.toArray(".parallax").forEach(layer =>{
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth)
        tl.to(layer, {y: movement, ease: "none"}, 0)
    });


    // Init ScrollMagic
    let controller = new ScrollMagic.Controller({
        refreshInterval: 0
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
            onUpdate: ({progress}) => onUpdate(progress),
        },
    });

    function onUpdate(progress) {
        $("#bi-white")[0].style.opacity = 1 - progress;
        $("#bi-black")[0].style.opacity = progress;
    }

    // Image Fade In Up
    $(".section").each(function (i) {
        let targetImg = $(this).find("img");
        const imgTl = gsap.timeline({
            scrollTrigger:{
                trigger: this,
                start: "-=100px 30%",
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
                start: "top 50%",
                toggleActions: "play none none none none"
            }
        });
        titleTl1.fromTo(target1, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0})
        titleTl1.fromTo(target2, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0}, '-=0.8')
    });

})