document.addEventListener('DOMContentLoaded', () => {
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