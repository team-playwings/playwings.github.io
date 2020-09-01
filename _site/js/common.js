var width;

$(function () {
    changeVideo();
    window.onresize = changeVideo;
});

function changeVideo() {
    if (width != window.innerWidth) {
        var video = $('#video');
        var hero = $('#hero-vid');
        if (window.innerWidth > window.innerHeight) {
            video.attr('src', 'https://res.cloudinary.com/kyte/video/upload/q_auto:best,f_auto/playwings/web/video-landscape.mp4');
            if (960 / 540 > window.innerWidth / window.innerHeight) {
                hero.css('height', window.innerHeight);
            } else {
                hero.css('width', window.innerWidth);
            }
            $('#arrow-down-button').css('margin-top', window.innerHeight * .42);
        } else {
            video.attr('src', 'https://res.cloudinary.com/kyte/video/upload/q_auto:best,f_auto/playwings/web/video-portrait.mp4');
            if (1080 / 608 > window.innerHeight / window.innerWidth) {
                hero.css('width', window.innerWidth);
            } else {
                hero.css('height', window.innerHeight);
            }
            $('#arrow-down-button').css('margin-top', window.innerHeight * .28);
        }
        width = window.innerWidth;
        hero[0].load();
    }
};