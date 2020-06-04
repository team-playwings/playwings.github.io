function lnbDropDown() {
    const lnbMenu = document.getElementById("lnbMenu");
    if (lnbMenu.style.display == "block") {
        lnbMenu.style.display = "none";
    } else {
        lnbMenu.style.display = "block";
    }
}

window.onload = function () {
    const menus = $('#section .lnb-wrapper .lnb a');
    const sections = gsap.utils.toArray("section");
    let currentSection;

    menus.on('click', function (e) {
        const target = $($(this).attr('href'));
        $('html').animate({
            scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
    });

    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.to(".header", {
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderBottom: "1px solid rgba(0,0,0,.12)",
        scrollTrigger: {
            trigger: ".header",
            start: "bottom",
            end: "200% top",
            scrub: true,
            onUpdate: ({progress}) => onUpdate(progress),
        },
    });

    function onUpdate(progress) {
        console.log(progress);
        $("#bi-white")[0].style.opacity = 1 - progress;
        $("#bi-black")[0].style.opacity = progress;
    }

    if (matchMedia("screen and (min-width: 1024px)").matches) {
        gsap.to(".lnb-wrapper", {
            scrollTrigger: {
                trigger: ".lnb-wrapper",
                start: -$(".header").height() - ($(".lnb-wrapper").outerHeight(true) - $(".lnb-wrapper").height()) + "px",
                end: $(".content-body").height() - $(".header").height() - $(".lnb-wrapper").outerHeight(true) + "px",
                pin: true,
            },
        });
    }

    sections.forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: "-=1px",
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

    if (window.scrollY) {
        tween.play();
        onUpdate(1);
    }
}