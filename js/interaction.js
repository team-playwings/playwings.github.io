

document.documentElement.className = 'js';
let supportsCssVars = function () {
    let s = document.createElement('style'),
        support;

    s.innerHTML = "root: { --tmp-var: bold; }";
    document.head.appendChild(s);
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'));
    s.parentNode.removeChild(s);
    return support;
}
if (!supportsCssVars()) alert('Please view this demo in a modern browser that supports CSS Variables.')

//Stellar
$(function(){
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 150
    });
});


//Scroll Magic
document.addEventListener('DOMContentLoaded', () => {
//window.onload = function () {  윈도우 로드를 기다리는 구문
    // Init ScrollMagic
    let controller = new ScrollMagic.Controller({
        refreshInterval: 0
    });

    // Intro Parallax
    let timeline = new TimelineMax();
    timeline
    .to('#bg-5', 5, {y: -700})
    .to('#bg-4', 5, {y: -500}, '-=5')
    .to('#bg-3', 5, {y: -400}, '-=5')
    .to('#bg-2', 5, {y: -300}, '-=5')
    .to('#bg-1', 5, {y: -200}, '-=5')
    .to('#section', 5, {top: '0%'}, '-=5')
    .to('#main-contents', 5, {y: -700}, '-=5')

    new ScrollMagic.Scene({
        triggerElement: 'main',
        duration: '200%',
        triggerHook: 0
    })
    .setTween(timeline)
    .setPin('#intro')
    .addTo(controller);

    // Logo
    new ScrollMagic.Scene({
        triggerElement: '#section',
        triggerHook: 0.6
    })
        .setTween(TweenMax.to('#header', 0.2, {backgroundColor: '#fff'}))
        .setClassToggle('.bi-b', 'bi-bb')
        .addIndicators()
        .addTo(controller);


    // Image Fade In Up
    $('.content-img').each(function(){
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1
        })
        .setClassToggle(this, 'fade-in')
        .addIndicators()
        .addTo(controller);
    });
})