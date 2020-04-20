//Scroll Magic
document.addEventListener('DOMContentLoaded', () => {
//window.onload = function () {  윈도우 로드를 기다리는 구문
    // Init ScrollMagic
    let controller = new ScrollMagic.Controller({
        refreshInterval: 0
    });
    
    // Guide
    new ScrollMagic.Scene({
        triggerElement: '.lnb-wrapper',
        triggerHook: 0.11,
    })
        .setClassToggle('.lnb-wrapper', 'fixed')
        .addIndicators()
        .addTo(controller);
 
    // Smooth Scroll
    $(function(){
        var link = $('#section .lnb-wrapper .lnb a');
        link.on('click',function(e){
            var target = $($(this).attr('href')); 
            $('html, body').animate({
                scrollTop: target.offset().top -100
            },600);      
            $(this).addClass('active');
            //e.preventDefault(); //URL에 ID없애기
        });
        
        $(window).on('scroll',function(){
            findPosition();
        });

        function findPosition(){
            $('section').each(function(){
                if( ($(this).offset().top -100 - $(window).scrollTop() ) < 20){
                    link.removeClass('active');
                    $('#navbar').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');
                }
            });
        }
        findPosition();
    });
})