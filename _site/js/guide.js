window.onload = function () {
    const menus = $('#section .lnb-wrapper .lnb a');
    const sections = gsap.utils.toArray("section");
    let currentSection;

    menus.on('click', function (e) {
        const target = $($(this).attr('href'));
        let scrollTop = target.offset().top - 56;
        $('html').animate({scrollTop:scrollTop }, 1000, "easeInOutExpo");
    });

    gsap.registerPlugin(ScrollTrigger);

    if (matchMedia("screen and (min-width: 1024px)").matches) {
        gsap.to(".lnb-wrapper", {
            scrollTrigger: {
                trigger: ".lnb-wrapper",
                start: -$(".header").height() - ($(".lnb-wrapper").outerHeight(true) - $(".lnb-wrapper").height()) + "px",
                end: $(".content-body").height() - $(".header").height() - $(".lnb-wrapper").outerHeight(true) + "px",
                pin: true,
                //markers: true,
            },
        });
    }

    sections.forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: -$('.header').height() - 56 + 'px',
            end: "bottom-=" + $('.header').height() + 'px',
            onToggle: self => self.isActive && setSection(section),
        });
    });

    function setSection(newSection) {
        if (newSection !== currentSection) {
            $(menus[sections.indexOf(currentSection)]).removeClass('active');
            $(menus[sections.indexOf(newSection)]).addClass('active');
            currentSection = newSection;
        }
    }
}