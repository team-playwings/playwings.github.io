

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
    .to('#bg-5', 6, {y: -700})
    .to('#bg-4', 6, {y: -500}, '-=6')
    .to('#bg-3', 6, {y: -400}, '-=6')
    .to('#bg-2', 6, {y: -300}, '-=6')
    .to('#bg-1', 6, {y: -200}, '-=6')
    //.to('#section', 6, {top: '0%'}, '-=6')
    .to('#main-contents', 6, {y: -700}, '-=6')

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
        .addTo(controller);


    // Image Fade In Up
    $('.content-img').each(function(){
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8
        })
        .setClassToggle(this, 'fade-in')
        .addIndicators()
        .addTo(controller);
    });

    // Title Fade In Up
    $(".section-wrapper").each(function(i){
        let target1 = $(this).find("h1");
        let target2 = $(this).find("p");
        var titleTl1 = new TimelineMax();
            titleTl1.fromTo(target1, 1, { opacity: 0, y: 50 }, {opacity: 1, y: 0})
            titleTl1.fromTo(target2, 1, { opacity: 0, y: 50 }, {opacity: 1, y: 0}, '-=0.8')
    
        new ScrollMagic.Scene({
            triggerElement: this,  
            triggerHook: 0.5
        })
            .setTween(titleTl1)
            .addTo(controller);
    });

    

    // Title Fade In Up 2
    let titleCenter = $('.content-text-2').find('h1');
    let descCenter = $('.content-text-2').find('p');
    var titleTl2 = new TimelineMax();
        titleTl2.fromTo(titleCenter, 1, { opacity: 0, y: 50 }, {opacity: 1, y: 0})
        titleTl2.fromTo(descCenter, 1, { opacity: 0, y: 50 }, {opacity: 1, y: 0}, '-=0.8')

    new ScrollMagic.Scene({
        triggerElement: '.section-wrapper-2',
        triggerHook: 0.4
    })
        .setTween(titleTl2)
        .addTo(controller);

    // Footer
    new ScrollMagic.Scene({
        triggerElement: '.footer-trigger',
        triggerHook: 1
    })
        .setTween('#section', 0.6, {y: -350})
        .addIndicators({
            colorTrigger: 'rgba(0,0,0,0)',
            colorStart: 'rgba(0,0,0,0)'
        })
        .addTo(controller);
})