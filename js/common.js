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
};