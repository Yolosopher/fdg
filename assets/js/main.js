const body = document.querySelector('body')

// hamburger
const hamburger = document.querySelector('.hamburger')
const header__navNlang = document.querySelector('.header__navNlang')


hamburger.addEventListener('click', () => {
    console.log('hi')
    hamburger.classList.toggle('open')
    header__navNlang.classList.toggle('toggled')
})


// herocontent slider
const heroSwiper = new Swiper('.main__herocontent__swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 600,
    // grabCursor: true,
    navigation: {
        nextEl: '.sliderpag__right',
        prevEl: '.sliderpag__left',
        disabledClass: 'disabled'
    },
    breakpoints: {
        1025: {
            // spaceBetween: 0
            speed: 1000
        }
    }
})

// products slider
const productsSwiper = new Swiper('.main__products__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    // grabCursor: true,
    pagination: {
        el: '.main__products__pagination',
        type: 'bullets',
        bulletClass: 'main__products__pagination__bullet',
        bulletActiveClass: 'main__products__pagination__bullet__active'
    },
    autoHeight: true,
    breakpoints: {
        700: {
            slidesPerView: 3
        },
        1025: {
            spaceBetween: 16,
            slidesPerView: 5,
        }
    }
})

// scrolltop
const scrolltotop = document.querySelector('.scrolltotop')

scrolltotop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})