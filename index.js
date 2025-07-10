// header

document.addEventListener('click', function(event) {
    const header = document.querySelector('header');
    const navLinks = header.querySelector('.nav-links');
    const hamburger = header.querySelector('.burger');
    const body = document.body;
    const html = document.documentElement;


    if (event.target.closest('.burger')) {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('active');
        html.classList.toggle('active');
    }
});

// slider for artisanal weekly

const artisanalSlider = document.querySelector('#artisanal-weekly-slider');
if (artisanalSlider) {
    const artisanalSwiper = new Swiper(artisanalSlider, {
        slidesPerView: 1.5,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.artisanal-weekly-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1570: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}

// artisanal weekly

// slider for authentic 
const authenticSlider = document.querySelector('#authentic-slider');
if (authenticSlider) {
    let authenticSwiper = null;

    const updateSliderItemsClass = (add) => {
    const items = authenticSlider.querySelectorAll('.slider-item');
    items.forEach(item => {
            if (add) {
                item.classList.add('swiper-slide');
            } else {
                item.classList.remove('swiper-slide');
            }
        });
    };

    const resizeObserver = new ResizeObserver(() => {
        if (window.innerWidth <= 1100) {
            updateSliderItemsClass(true);
            if (!authenticSwiper) {
                authenticSwiper = new Swiper(authenticSlider, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: true,
                    pagination: {
                        el: '#authentic-slider .swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                        },
                    },
                });
            }
        } else {
            if (authenticSwiper) {
                authenticSwiper.destroy();
                authenticSwiper = null;
            }
            updateSliderItemsClass(false);
        }
    });
    resizeObserver.observe(authenticSlider);
}

// slider for authentic

// slider for featured
const featuredSlider = document.querySelector('#featured-logo-slider');
if (featuredSlider) {
let featuredSwiper = null;

const UpdateFeaturedItemsClass = (add) => {
    const items = featuredSlider.querySelectorAll('.slider-item');
    items.forEach(item => {
        if (add) {
            item.classList.add('swiper-slide');
        } else {
            item.classList.remove('swiper-slide');
        }
    });
};

const resizeFeaturedObserver = new ResizeObserver(() => {
    if (window.innerWidth <= 992) {
        UpdateFeaturedItemsClass(true);
        if (!featuredSwiper) {
            featuredSwiper = new Swiper(featuredSlider, {
                slidesPerView: 2,
                spaceBetween: 10,
                loop: true,
                pagination: {
                    el: '.featured-logo-pagination',
                    clickable: true,
                },
            });
        }
    } else {
        if (featuredSwiper) {
            featuredSwiper.destroy();
            featuredSwiper = null;
        }
        UpdateFeaturedItemsClass(false);
    }
});
resizeFeaturedObserver.observe(featuredSlider);

}
// slider for authentic

// slider for reviews
const reviewsSlider = document.querySelector('#reviews-slider-main');
if (reviewsSlider) {
    const reviews = new Swiper(reviewsSlider, {
    slidesPerView: 1,
    spaceBetween: 10,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.reviews-swiper-button-next',
        prevEl: '.reviews-swiper-button-prev',
    },
    pagination: {
        el: '.reviews-swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
}

// slider for reviews

// accordion functionality

const accordionItems = document.querySelectorAll('.acc-item');
if (accordionItems.length > 0) {

const toggleAccordionItem = (item) => {
    const content = item.querySelector('.content');
    const isActive = item.classList.contains('active');
    const allItems = document.querySelectorAll('.acc-item');

    allItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.content').style.height = '0px';
        i.querySelector('.arrow img').src = './img/accordion/arrow.svg'; // reset arrow
    });
    if (!isActive) {
        item.classList.add('active');
        content.style.height = content.scrollHeight + 'px'; // set height to scrollHeight
    }
};
accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        toggleAccordionItem(item);
    });
});

}
// height animation function on click

// accordion functionality