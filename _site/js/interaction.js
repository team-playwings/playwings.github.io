

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
window.onload = function () { // 윈도우 로드를 기다리는 구문
    // Init ScrollMagic
    let controller = new ScrollMagic.Controller({
        refreshInterval: 0
    });

    // Logo
    new ScrollMagic.Scene({
        triggerElement: '#section-1',
        triggerHook: 0.8
    })
        .setTween(TweenMax.to('#header', 0.2, {backgroundColor: '#fff'}))
        .setClassToggle('.bi-b', 'bi-bb')
        .addIndicators()
        .addTo(controller);


    // Image Fade In Up
   

    $('#sectio-1').each(function(){

        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7
        })
            .setClassToggle(this, 'fade-in')
            .addIndicators()
            .addTo(controller);
    });



    




};