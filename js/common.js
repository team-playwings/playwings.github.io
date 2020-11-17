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

function getParameters() {
    const parameters = {};
    const vars = window.location.search.substring(1).split('&');
    let pair;
    for (let i = 0; i < vars.length; i++) {
        pair = vars[i].split('=');
        if (typeof parameters[pair[0]] === 'undefined') parameters[pair[0]] = pair[1];
        else if (typeof parameters[pair[0]] === 'string') parameters[pair[0]] = [parameters[pair[0]], pair[1]];
        else parameters[pair[0]].push(pair[1]);
    }
    return parameters;
}