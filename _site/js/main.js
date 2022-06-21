document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    document.getElementById('bi-black').style.opacity= 0;

    gsap.to(".header", {
        backgroundColor: "rgba(255, 255, 255, .87)",
        boxShadow: "0px 1px 0px rgba(0, 0, 0, .12)",
        backdropFilter: "blur(6px)",
        scrollTrigger: {
            trigger: "#content",
            start: "top-=" + $(".header").height(),
            end: "top",
            scrub: true,
            onUpdate: ({progress}) => onUpdate(progress)
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