/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss"
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".df1234342")) {
    new Swiper(".df12324234", {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      //autoHeight: true,
      speed: 800,

      // lazyPreloaderClass: 'preloader',

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      /*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // Події
      on: {},
    })
  }

  if (document.querySelector(".graduates__slider")) {
    new Swiper(".graduates__slider", {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,

      speed: 500,
      loop: true,
      lazyPreloaderClass: "preloader",

      pagination: {
        el: ".graduates__slider .pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".graduates__slider .button-prev",
        nextEl: ".graduates__slider .button-next",
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 1.4,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1230: {
          slidesPerView: 4,
          spaceBetween: 53,
        },
      },

      // Події
      on: {},
    })
  }

  if (document.querySelector(".photo__slider")) {
    new Swiper(".photo__slider", {
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      speed: 500,
      loop: true,
      lazyPreloaderClass: "preloader",

      effect: "fade",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".photo__slider .pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".photo__slider .button-prev",
        nextEl: ".photo__slider .button-next",
      },

      // Події
      on: {},
    })
  }

  if (document.querySelector(".clients__items")) {
    new Swiper(".clients__items", {
      modules: [Autoplay],
      observer: true,
      observeParents: true,

      speed: 1500,
      loop: true,
      // loopAdditionalSlides: 5,
      allowTouchMove: false,

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 2.8,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
      },
    })
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar")
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders()
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
})
