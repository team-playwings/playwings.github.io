var width;

$(function () {
    changeVideo();
    window.onresize = changeVideo;
});

function changeVideo() {
    if (width != window.outerWidth) {
        var video = $('#video');
        var hero = $('#hero-vid');
        if (window.outerWidth > window.outerHeight) {
            video.attr('src', 'https://res.cloudinary.com/kyte/video/upload/q_auto:best,f_auto/playwings/web/video-landscape.mp4');
            if (960 / 540 > window.outerWidth / window.outerHeight) {
                hero.css('height', window.outerHeight);
            } else {
                hero.css('width', window.outerWidth);
            }
            $('#arrow-down-button').css('margin-top', window.outerHeight * .42);
        } else {
            video.attr('src', 'https://res.cloudinary.com/kyte/video/upload/q_auto:best,f_auto/playwings/web/video-portrait.mp4');
            if (1080 / 608 > window.outerHeight / window.outerWidth) {
                hero.css('width', window.outerWidth);
            } else {
                hero.css('height', window.outerHeight);
            }
            $('#arrow-down-button').css('margin-top', window.outerHeight * .28);
        }
        width = window.outerWidth;
        hero[0].load();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".header", {
        backgroundColor: "rgba(255, 255, 255, .87)",
        boxShadow: "0px 1px 0px rgba(0, 0, 0, .12)",
        backdropFilter: "blur(6px)",
        scrollTrigger: {
            trigger: "#content",
            start: "top-=" + $(".header").height(),
            end: "top",
            scrub: true,
            //onUpdate: ({progress}) => onUpdate(progress),
            //onToggle: self => onToggle(self.isActive),
            onEnter: onEnter,
            onEnterBack: onEnterBack
        },
    });

    function onEnter() {
        $("#bi-white")[0].style.display = "none";
        $("#bi-black")[0].style.display = "block";
        $("#nav")[0].className = "nav";
    }

    function onEnterBack() {
        $("#bi-white")[0].style.display = "block";
        $("#bi-black")[0].style.display = "none";
        $("#nav")[0].className = "";
    }
})