new Swiper('.feedback-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    keyboard : {
        enabled: true, 
        onlyInViewport: true,
        pageUpDown: true
    },
    autoHeight: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnIteraction: false
    },
    speed: 500
}); 