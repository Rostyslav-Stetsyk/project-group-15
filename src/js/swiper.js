const swiper = new Swiper('.myswiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    pagination: {
      el: '.hero_slider-counter',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return '0' + current + ' —— ' + '0' + total;
      },
    },
  });
  
  swiper.on('slideChange', function () {
    const currentSlide = swiper.realIndex + 1;
    const totalSlides = swiper.slides.length;
    const counter = document.querySelector('.hero_slider-counter');
    counter.textContent = '0' + currentSlide + ' —— ' + '0' + totalSlides;
  });