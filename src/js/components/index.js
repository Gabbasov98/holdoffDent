function doctorsSlider() {
    var swiper = new Swiper('.doctors .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.doctors .swiper-button-next',
            prevEl: '.doctors .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 106
            },
        }
    })
}

function gallery() {
    var swiper = new Swiper(".gallery .mySwiper", {
        spaceBetween: 15,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".gallery .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".gallery .swiper-button-next",
            prevEl: ".gallery .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

function achievementSlider() {
    var swiper = new Swiper('.achievement .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 32,
        // loop: true,
        navigation: {
            nextEl: '.achievement .swiper-button-next',
            prevEl: '.achievement .swiper-button-prev',
        },
    })
}

$(document).ready(function() {
    const sliderDelay = 5000
    main = document.querySelector(".main")

    function mainSlider() {
        var swiper = new Swiper('.main .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 1500,
            // autoplay: {
            //     delay: sliderDelay,
            // },
            pagination: {
                el: '.main .swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: function(index, className) {
                    return `
                    <div class="pagination-item ${className}">
                        <div class="pagination-empty"></div>
                        <div class="pagination-progress">
                            <svg class="pagination-progress__black" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                                <circle class="donut_background_three" stroke="#2581C4" stroke-width="4" fill="none" stroke-linecap="round" stroke-dasharray="100 100" cx="17.5" cy="17.5" r="15.91549431"/>
                            </svg>
                        </div>
                    </div>
                `;
                },
            },
        })
        swiper.on('slideChange', function() {
            setTimer(sliderDelay)
        });
    }
    mainSlider()
    doctorsSlider()
    gallery()
    achievementSlider()


    if (main) {
        setTimer(sliderDelay)
    }

    function setTimer(delay) {
        let activePagination = document.querySelector(".main .swiper-pagination-bullet-active .pagination-progress__black circle")
        let progress = 100
        var interval = setInterval(function() {
            let dasharay = `${progress} 100`
            activePagination.setAttribute('stroke-dasharray', dasharay);
            progress--
            if (progress == -1) {
                stopTimer()
            }
        }, (delay / 100));

        function stopTimer() {
            clearInterval(interval);
        }
    }


    $(".about__btn").click(function() {
        $(".gallery-modal").addClass("gallery-modal--active")
        $("body").addClass("fixed-body")
    })

    $(".gallery__bg").click(function() { closeGallery() })
    $(".gallery__close").click(function() { closeGallery() })

    function closeGallery() {
        $(".gallery-modal").removeClass("gallery-modal--active")
        $("body").removeClass("fixed-body")
    }

    $(".doctor__info-all").click(function() {
        $(this).toggleClass("doctor__info-all--active")
        $(this).siblings(".doctor__info-desc--hidden").toggleClass("doctor__info-desc--show")
    })

    $(".work-card").twentytwenty();


    $(document).on('click', '.js-videoPoster', function(e) {
        //отменяем стандартное действие button
        e.preventDefault();
        var poster = $(this);
        // ищем родителя ближайшего по классу
        var wrapper = poster.closest('.js-videoWrapper');
        videoPlay(wrapper);
    });

    //вопроизводим видео, при этом скрывая постер
    function videoPlay(wrapper) {
        var iframe = wrapper.find('.js-videoIframe');
        // Берем ссылку видео из data
        var src = iframe.data('src');
        // скрываем постер
        wrapper.addClass('videoWrapperActive');
        // подставляем в src параметр из data
        iframe.attr('src', src);
    }


    $(".service-price__all").click(function() {
        $(this).toggleClass("service-price__all--active")
        $(".service-price__item--hidden").toggleClass("service-price__item--show")
    })

    $(".service .tab").click(function() {
        doctorsSlider()
        $(".work-card").twentytwenty();
    })

    $(".prices__item-show").click(function() {
        $(this).siblings(".prices__item-hidden").slideToggle()
    })
})