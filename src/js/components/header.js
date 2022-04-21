$(document).ready(function() {



    $(".header__burger").click(function() {
        $("body").toggleClass("fixed-body")
        $(".header-bottom").toggleClass("header-bottom--active")
        $(this).toggleClass("header__burger--active")
    })

    $(".header__search-btn").click(function() {
        $(".header__search").addClass("header__search--active")
    })

    $(".header__search-close").click(function() {
        $(".header__search").removeClass("header__search--active")
    })


    $(document).mouseup(function(e) {
        var div = $('.header__search-hidden');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".header__search").hasClass("header__search--active")) {
                $(".header__search").removeClass("header__search--active")
            }
        }
    });

    $(".nav__item--dropdown").hover(onIn, onOut);

    // let showMenu = false

    $(".nav__item:not(.nav__item--dropdown)").mouseover(function() {
        console.log(true)
        $(".nav__item--dropdown").removeClass("nav__item--active")
    })

});
let showMenu = false

function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                el.addClass("nav__item--active")
            }
        }, 100);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (!el.is(':hover')) {
                el.removeClass("nav__item--active")
            }
        }, 1000);
    }
}