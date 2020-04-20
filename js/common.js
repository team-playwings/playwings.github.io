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

    // Logo
    new ScrollMagic.Scene({
        triggerElement: '#section',
        triggerHook: 0.3
    })
        .setTween(TweenMax.to('#header', 0.2, {backgroundColor: '#fff'}))
        .setClassToggle('.bi-b', 'bi-bb')
        .addIndicators()
        .addTo(controller);

    // Footer
    new ScrollMagic.Scene({
        triggerElement: '.footer-trigger',
        triggerHook: 1
    })
        .setTween('.row', 0.6, {y: -350}) //guide 에서도 작동하게 하고 싶을 경우 .row를 #section으로 바꿔주세요.
        .addIndicators({
            colorTrigger: 'rgba(0,0,0,0)',
            colorStart: 'rgba(0,0,0,0)'
        })
        .addTo(controller);
    })