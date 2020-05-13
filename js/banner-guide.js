document.addEventListener('DOMContentLoaded', () => {
    // Init ScrollMagic
    let controller = new ScrollMagic.Controller({
        refreshInterval: 0
    });

    // Logo
    new ScrollMagic.Scene({
        triggerElement: '#section',
        triggerHook: 0.3
    })
        .setTween(TweenMax.to('#header', 0.2, {backgroundColor: 'rgba(255, 255, 255, 1)', borderBottom: '1px solid rgba(0,0,0,.12)'}))
        .setClassToggle('.bi-b', 'bi-bb')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.lnb-wrapper',
        triggerHook: 0.11,
    })
        .setClassToggle('.lnb-wrapper', 'fixed')
        .addTo(controller);

    const menus = $('#section .lnb-wrapper .lnb a');
    const sections = $('section');
    let isAutoScrolling;

    menus.on('click', function (e) {
        isAutoScrolling = true;
        const target = $($(this).attr('href'));
        $('html').animate({
            scrollTop: target.offset().top
        }, 400, function () {
            isAutoScrolling = false;
            setMenus();
        });
        var x = document.getElementById("lnbMenu");
        if (matchMedia("screen and (max-width: 1024px)").matches) {
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
          } 
    });

    $(window).scroll(function () {
        if (!isAutoScrolling) setMenus();
    });

    function setMenus() {
        const scrollTop = $(window).scrollTop() + $('header').height();
        let activeItem;
        let item;
        let i = sections.length;
        while (i--) {
            item = $(menus[i]);
            if (!activeItem && $(sections[i]).offset().top <= scrollTop) {
                activeItem = item;
                item.addClass('active');
            } else item.removeClass('active');
        }
    }

})