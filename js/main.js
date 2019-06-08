let menu = (function (options) {

  let buttonOpen = document.querySelector(options.buttonOpen);
  let buttonClose = document.querySelector(options.buttonClose);
  let menu = document.querySelector(options.menu);
  let body = document.querySelector('body');

  let _toggleMenu = function (e) {
    menu.classList.toggle('is-active');
    body.classList.toggle('body__hide');
  }

  let addListeners = function () {
    buttonOpen.addEventListener('click', _toggleMenu);

    // Делегирование  

    menu.addEventListener('click', function (e) {
      target = e.target;
      if (target.classList.contains('nav__link')) {
        _toggleMenu();
      }
    });

    let link = document.getElementById('link');

    if (link) {
      link.addEventListener('click', _toggleMenu);
      buttonClose.addEventListener('click', _toggleMenu);
    }

  }

  return {
    open: addListeners

  };
})
  ({
    buttonOpen: '#open',
    buttonClose: '#close',
    menu: '#overlay'
  });

menu.open();

// Dropdown

// let composition = (function (optionsOne) {
//   let linkOpen = document.querySelector(optionsOne.linkOpen);
//   let linkClose = document.querySelector(optionsOne.linkClose);
//   let ingredients = document.querySelector(optionsOne.ingredients);

//   let _toggleComposition = function (e) {
//     e.preventDefault();
//     ingredients.classList.toggle('composition__active');
//   }

//   let addListenersTwo = function () {
//     linkOpen.addEventListener('mouseenter', _toggleComposition);

//     if (linkTwo) {
//       let linkTwo = document.getElementById('linkTwo');

//       linkTwo.addEventListener('mouseleave', _toggleComposition);

//       if (linkClose) {
//         linkClose.addEventListener('mouseleave', _toggleComposition);
//       }
//     }

//   }

//   return {
//     openDropdown: addListenersTwo
//   };
// })
//   ({
//     linkOpen: '#linkTwo',
//     ingredients: '#composition__open'
//   });

// composition.openDropdown();

let ingredientsVisible = () => {
  let ingredients = $(".composition");
  $(".composition__close").on("click touchstart", e => {
    e.preventDefault();
    ingredients.removeClass("composition__active");
  });

  ingredients.on({
    mouseenter() {
      $(this).addClass("composition__active");
    },
    mouseleave() {
      $(this).removeClass("composition__active");
    }
  });
};
ingredientsVisible();

// Team вертикальный аккордеон


let teamAccordeon = () => {
  let linkFour = document.querySelectorAll('.team__accordeon-link');

  linkFour.forEach(function (accoName) {
    accoName.addEventListener('click', function (e) {
      e.preventDefault();
      let accoActive = document.querySelector('.team__accordeon-item.is-active');

      if (accoActive) {
        let teamAccordeonDetails = accoActive.querySelector('.team__accordeon-details');

        teamAccordeonDetails.style.height = '0px';
        accoActive.classList.remove('is-active');
      }
      if (!accoActive || accoActive.querySelector('.team__accordeon-link') !== e.target) {
        let accoItem = e.target.closest('.team__accordeon-item');
        accoItem.classList.add('is-active');

        let accoItemInfo = accoItem.querySelector('.team__accordeon-details');
        accoItemInfo.style.height = accoItemInfo.scrollHeight + 'px';

      }
    })
  })
};

teamAccordeon();



// let teamAccordeon = (function () {
//   let team = document.getElementsByClassName('team__accordeon-item');
//   let content = document.getElementsByClassName('team__accordeon-details');

//   team.forEach(function)



//   // for (let i = 0; i < team.length; i++) {
//   //   team[i].addEventListener('click', function () {

//   //     if (!(this.classList.contains('is-active'))) {
//   //       for (i = 0; i < team.length; i++) {
//   //         team[i].classList.remove('is-active');
//   //       }
//   //       this.classList.add('is-active');
//   //     } else {
//   //       for (i = 0; i < team.length; i++) {
//   //         team[i].classList.remove('is-active');
//   //       }

//   //     }
//   //   })
//   // }
// })

// teamAccordeon();

// Menu горизонтальный аккордеон

let calcWidth = () => {
  let windowWidth = window.innerWidth;

  let links = document.querySelectorAll('.menu__accordeon-link');
  let linksWidth = parseFloat(getComputedStyle(links[0]).width);

  let reqWidth = windowWidth - linksWidth * links.length;
  return reqWidth > 550 ? 550 : reqWidth;
};

let menuAccordeon = () => {
  let linkFive = document.querySelectorAll('.menu__accordeon-link');

  linkFive.forEach(function (menuName) {
    menuName.addEventListener('click', function (e) {
      e.preventDefault();
      let menuActive = document.querySelector('.menu__accordeon-item.active');

      if (menuActive) {
        let menuAccordeonContent = menuActive.querySelector('.menu__accordeon-content');

        menuAccordeonContent.style.width = '0px';
        menuActive.classList.remove('active');
      }

      if (!menuActive || menuActive.querySelector('.menu__accordeon-text') !== e.target) {
        let menuItem = e.target.closest('.menu__accordeon-item');
        menuItem.classList.add('active');

        let menuItemInfo = menuItem.querySelector('.menu__accordeon-content');
        menuItemInfo.style.width = calcWidth() + 'px';

      }
    })
  })
};

menuAccordeon();

/* Функционал слайдера */

// let slide = (function() {
//   let left = document.querySelector(".slider__button-prev");
//   let right = document.querySelector(".slider__button-next");
//   let items = document.querySelector(".slider__list");
//   let timer;
//   let last, first;


//   left.addEventListener("click", function () {
//     window.clearTimeout(timer);
//     last = items.querySelector(".slider__item:last-child");
//     first = items.querySelector(".slider__item:first-child");


//     if (!items.classList.contains("left")) {
//       items.classList.add("left");
//       items.insertBefore(last, first);
//     }
//     timer = window.setTimeout(function () {
//       items.classList.remove("left");
//     })
//   });

//   right.addEventListener("click", function () {
//     window.clearTimeout(timer);
//     last = items.querySelector(".slider__item:last-child");
//     first = items.querySelector(".slider__item:first-child");

//     if (items.classList.contains("right")) {
//       items.classList.remove("right");
//       items.appendChild(first);
//     }
//     timer = window.setTimeout(function () {
//       items.classList.add("right");
//     })
//   })
// });

// slide();

// const left = document.querySelector('.slider__button-prev');
// const right = document.querySelector('.slider__button-next');
// const slider = document.querySelector('.slider__item');
// let position = parseInt(getComputedStyle(slider).left, 10);

// left.addEventListener('click', function () {
//   event.preventDefault();
//   if (position == 0) {
//     left.classList.toggle('slider__arrow-prev');
//     function deny() {
//       left.classList.toggle('slider__arrow-prev');
//     };
//     setTimeout(deny, 500);
//   } else {
//     position = position + 940;
//     slider.style.left = position + 'px';
//   }
// });

// right.addEventListener('click', function () {
//   event.preventDefault();
//   if (position == -100) {
//     left.classList.toggle('slider__arrow-next');
//     function deny() {
//       left.classList.toggle('slider__arrow-next');
//     };
//     setTimeout(deny, 500);
//   } else {
//     position = position - 940;
//     slider.style.left = position + 'px';
//   }
// });

// $(function () {

//   $('slider__button-next').on('click', function(e) {
//     e.preventDefault();

//     var $this = $(this), 
//         container = $this.closest('.slider__wrap-list'),
//         items = container.find('.slider__item'),
//         activeSlide = items.filter('.slider__item-active'),
//         reqItem = activeSlide.next(),
//         reqIndex = reqItem.index(),
//         list = container.find('.slider__list'),
//         duration = 500;


//     list.animate({
//       'left' : -reqIndex * 100 + '%'
//     }, duration)
//   });
// });

// $(document).ready(function () {

//   $('.slider__button-next').on('click', function () {

//     var currentRight = $('.slider__item.slider__item-active');
//     var currentRightIndex = $('.slider__item.slider__item-active').index();
//     var nextImageIndex = currentRightIndex + 1;
//     nextImage = $('slider__item').eq(nextImageIndex);
//     currentRight.fadeOut(1000);
//     currentRight.removeClass('slider__item-active');

//     if (nextImageIndex == ($('.slider__item:last').index()+1)){
//       $('.slider__item').eq(0).fadeIn(1000);
//       $('.slider__item').eq(0).addClass('slider__item-active');
//     } else {
//       nextImage.fadeIn(1000);
//       nextImage.addClass('slider__item-active');
//     }
//   });

//   $('slider__button-prev').on('click', function () {
//     var currentRight = $('.slider__item.slider__item-active');
//     var currentRightIndex = $('.slider__item.slider__item-active').index();
//     var prevImageIndex = currentRightIndex - 1;
//         prevImage = $('slider__item').eq(prevImageIndex);

//     currentRight.fadeOut(1000);
//     currentRight.removeClass('slider__item-active');

//   });

// });



const slide = (function () {
  const left = document.querySelector('.slider__button-prev');
  const right = document.querySelector('.slider__button-next');
  const slider = document.querySelector('.slider__list');
  const computed = getComputedStyle(slider);
  let sliderWidth = parseInt(computed.width);


  window.addEventListener('resize', function () {
    currentRight = 0;
    slider.style.right = currentRight;
    sliderWidth = parseInt(computed.width);
  }, true);

  var sliderItemsCounter = slider.children.length;

  let moveSlide = function (direction) {
    direction.addEventListener('click', function (e) {
      e.preventDefault();

      let currentRight = parseInt(computed.right);

      if (currentRight < (sliderItemsCounter - 1) * sliderWidth && direction == right) {
        slider.style.right = currentRight + sliderWidth + 'px';

      }

      if (currentRight > 0 && direction == left) {
        slider.style.right = currentRight - sliderWidth + 'px';

      }

      if (currentRight == (sliderItemsCounter - 1) * sliderWidth && direction == right) {
        slider.style.right = 0;
      }

      if (currentRight == 0 && direction == left) {
        slider.style.right = (sliderItemsCounter - 1) * sliderWidth + 'px';
      }
    });
  }

  let addListenersThree = function () {
    moveSlide(right);
    moveSlide(left);
  }

  return { init: addListenersThree }
})();

slide.init();

// let menuAccordeon = (function () {
//   let menuAcco = document.getElementsByClassName('menu__accordeon-item');

//   for (let i = 0; i < menuAcco.length; i++) {
//     menuAcco[i].addEventListener('click', function () {
//       if (!(this.classList.contains('active'))) {
//         for (i = 0; i < menuAcco.length; i++) {
//           menuAcco[i].classList.remove('active');
//         }
//         this.classList.add('active');
//       } else {
//         for (i = 0; i < menuAcco.length; i++) {
//           menuAcco[i].classList.remove('active');
//         }
//       }
//     })
//   }
// })

// menuAccordeon();

// ------------Функционал Form--------------

const overlay = (function () {
  let body = document.querySelector('body');
  let link = document.createElement('a');

  link.classList.add('modal__window-close');
  link.setAttribute('href', '#');

  let openOverlay = function (modalId, content) {
    let overlay = document.querySelector(modalId);
    let innerOverlay = overlay.querySelector('.modal__content');

    if (content) {
      innerOverlay.innerHTML = content;
      innerOverlay.appendChild(link);
    }

    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeOverlay(modalId);
    })

    overlay.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target === overlay) {
        closeOverlay(modalId);
      }
    })

    document.addEventListener('keydown', function (e) {
      if (e.keyCode == 27) closeOverlay(modalId);
    });

    overlay.classList.add('modal__window-notActive');
    body.classList.add('body__hide');
  }

  let closeOverlay = function (modalId) {
    let overlay = document.querySelector(modalId);

    overlay.classList.remove('modal__window-notActive');
    body.classList.remove('body__hide');
  }

  let setContent = function (modalId, content) {
    let overlay = document.querySelector(modalId);
    let innerOverlay = overlay.querySelector('modal__content');

    if (content) {
      innerOverlay.innerHTML = content;
      innerOverlay.appendChild(link);
    }
  }

  return {
    open: openOverlay,
    close: closeOverlay,
    setContent: setContent
  }
})();


// Функция отправки запроса на сервер

var ajaxForm = function (form) {
  var formData = new FormData();
  formData.append('name', form.elements.name.value);
  formData.append('phone', form.elements.phone.value);
  formData.append('comment', form.elements.comment.value);
  formData.append('to', 'dyonay@inbox.ru');

  let url = 'https://webdev-api.loftschool.com/sendmail';

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open("POST", url);
  xhr.setRequestHeader('X-Requested-With', "XMLHttpRequest");
  xhr.send(formData);

  return xhr;
}

// Функция обработки ответа с сервера

var submitForm = function (e) {
  e.preventDefault();
  var form = e.target;
  let request = ajaxForm(form);;

  request.addEventListener('load', () => {
    if (request.status >= 400) {
      let content = 'Ошибка соединения с сервером, попробуйте позже';
      overlay.open('#modal__window', `${content}. Ошибка ${request.status}`)
    } else if (request.response.status) {
      let content = request.response.message;
      overlay.open('#modal__window', content);
    } else {
      let content = request.response.message;
      overlay.open('#modal__window', content);
    }
  });
}

let myForm = document.querySelector('#main__form');
myForm.addEventListener('submit', submitForm);

// Функция открытия отзывов

let reviewOpen = function (content) {
  // let button = document.querySelector('rewiew__btn');
  let container = document.querySelector('.reviews__list');

  container.addEventListener('click', function (e) {
    e.preventDefault();
    let target = e.target;
    if (target.className === 'rewiew__btn') {
      overlay.open('#modal__window', content);
    }
  });
}

content = document.querySelector('#overlay1').innerHTML;
reviewOpen(content);


// -----------------------------One Page Scroll (OPS) ----------------------

var md = new MobileDetect(window.navigator.userAgent), //Подключаем модуль определения устройства
  isMobile = md.mobile(); // в переменную isMobile попадет либо true либо false

let OnePageScroll = function () {
  const sections = $(".section");
  const visible = $("#content");
  let inscroll = false;

  let performTransition = function (sectionEq) {
    //функция которая прокручивает через translateY к неужной секции
    // if (inscroll) return
    if (!inscroll) {
      inscroll = true;

      let position = sectionEq * -100 + "%";

      sections
        .eq(sectionEq)
        .addClass("is-active")
        .siblings()
        .removeClass("is-active");

      visible.css({
        transform: `translateY(${position})`,
        "-webkit-transform": `translateY(${position})`
      });

      setTimeout(function () {
        //Делаем задержку в 1s, пока функция setTimeout не выполнится inscroll будет равен true
        inscroll = false;

        $(".points__item")
          .eq(sectionEq)
          .addClass("active")
          .siblings()
          .removeClass("active");
      }, 1000); // подождать пока завершится инерция на тачпадах
    }
  };

  let defineSections = function (sections) {
    //определяем активный раздел, и двух его соседей
    let activeSection = sections.filter(".is-active");
    return {
      activeSection: activeSection,
      nextSection: activeSection.next(),
      prevSection: activeSection.prev()
    };
  };

  let scrollToSection = function (direction) {
    //запускаем прокрутку в зависомости от значения direction, определяем это значение через событие wheel ниже
    let section = defineSections(sections);

    if (direction === "up" && section.nextSection.length) {
      //скроллим вниз
      performTransition(section.nextSection.index());
    }

    if (direction === "down" && section.prevSection.length) {
      //спроллим вверх
      performTransition(section.prevSection.index());
    }
  };

  $(".wrapper").on({
    //по событию wheel в зависимости как изменяется deltaY мы понимаем прокрутили вверх колесиком или в низ.
    wheel: function (e) {
      const deltaY = e.originalEvent.deltaY;
      // console.log(deltaY)
      const direction = deltaY > 0 ? "up" : "down";

      scrollToSection(direction);
    },
    touchmove: e => e.preventDefault()
  });

  // разрешаем свайп на мобильниках
  if (isMobile) {
    $(window).swipe({
      swipe: (event, direction) => {
        scrollToSection(direction);
      }
    });
  }

  $(document).on("keydown", e => {
    //Обрабатываем нажатие клавиш вниз и вверх при этом проверяем крайние секции
    const section = defineSections(sections);

    switch (e.keyCode) {
      case 40: // up
        // console.log(section.nextSection.length)
        if (section.nextSection.length) {
          performTransition(section.nextSection.index());
        }
        break;

      case 38: // down
        //console.log(section.prevSection.length)
        if (section.prevSection.length) {
          performTransition(section.prevSection.index());
          break;
        }
    }
  });

  // клики по кнопкам навигации
  $("[data-scroll-to]").on("click", e => {
    e.preventDefault();
    performTransition(parseInt($(e.target).data("scroll-to")));
  });
};

OnePageScroll();

/* ---------------- Настройка Video ---------------- */

let video;
let durationControl; 
let soundControl;
let intervalId;

// документ полностью загружен
$().ready(function(){

    video = document.getElementById("player"); 

    // вешаем обработчик события onclick на тег video
    video.addEventListener('click', playStop);

    // обработчики событий для кнопок play
    let playButtons = document.querySelectorAll(".play");
    for (let i = 0; i < playButtons.length;i++){
        playButtons[i].addEventListener('click',playStop);
    }

    // обработчик событий для кнопки динамик
    let micControl = document.getElementById("mic");
    micControl.addEventListener('click',soundOf)
    
    // обработчики событий для ползунка продолжительности видео
    durationControl = document.getElementById("durationLevel");  
    durationControl.addEventListener('mousedown', stopInterval);   
    // durationControl.addEventListener('click',setVideoDuration);
    durationControl.addEventListener('mouseup', setVideoDuration); 

    durationControl.min = 0;
    durationControl.value = 0;    

    // обработчики событий для ползунка громокости
    soundControl = document.getElementById("micLevel");    
    // soundControl.addEventListener('click', changeSoundVolume);
    soundControl.addEventListener('mouseup', changeSoundVolume); 

    // задаем максимальные и минимальные значения громокости
    soundControl.min = 0;
    soundControl.max = 10;
    // присваиваем ползунку максимальное значение
    soundControl.value = soundControl.max;

    //обрабатываем окончание видео
    video.addEventListener('ended', function () {
        $(".video__player-svg").toggleClass("video__player-active");
        video.currentTime = 0;
    }, false);
});

/*
 Воспроизведение видео
*/
function playStop(){
    // показывает или скрывает белую кнопку play
    $(".video__player-svg").toggleClass("video__player-active");  
    // присваиваем ползунку продолжительности максимальное значение равное продолжительности нашего видео (в секундах)
    durationControl.max = video.duration;

    // проверим стоит ли видео на паузе, если да то продолжим воспроизведение. Если, наоборот, проигрыавыется, то остановим.
    if (video.paused){
        // video.webkitRequestFullScreen(); //возможность открыть в полноэкранном режиме
        // запускаем видео
        video.play();
        intervalId = setInterval(updateDuration,1000/66)
        
    }else{
        // video.webkitExitFullscreen(); //выйти из полноэкранного режима
        // останавливаем видео
        video.pause();  
        clearInterval(intervalId);
        
    }
}

function stopInterval(){
    video.pause();
    clearInterval(intervalId);
}

/*
    Реализует возможность перемотки нашего видео
*/
function setVideoDuration(){
    if (video.paused){
        video.play();
    }else{
        video.pause();  
    }
    video.currentTime = durationControl.value;
    intervalId = setInterval(updateDuration,1000/66);
}


/*
  Функция для обновления позиции ползунка продолжительности видео.   
*/
function updateDuration(){    
    durationControl.value = video.currentTime;
    // console.log(video.currentTime)
}


/*
    Управление звуком
*/
function soundOf(){    
    /*
        Делаем проверку уровня громкости. 
        Если у нас нашего видео есть звук, то мы его выключаем. 
        Предварительно запомнив текущую позицию громкости в переменную soundLevel
    */
    if (video.volume === 0){
        video.volume = soundLevel;
        soundControl.value = soundLevel*10;
    }else{
        /*
            Если у нашего видео нет звука, то выставляем уровень громкости на прежний уровень.
            Хранится в перменной soundLevel
        */
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
    }    
}

/*
    Управление звуком видео
*/
function changeSoundVolume(){
    /*
        Св-во volume может принимать значения от 0 до 1
        Делим на 10 для того что бы, была возможность более точной регулировки видео. 
         video.volume 0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9  1 
   soundControl.value 0   1   2   3   4   5   6   7   8   9  10
        */
   
    video.volume = soundControl.value/10; 
    console.log(video.volume) 
}

/* ----------------------- Настройка Интерактивной карты --------------------- */

ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.91,
        longitude: 30.49,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: [
            '<div class="map__balloon">Mr. Burgers №1</div>'
        ]
    },
    {
        latitude: 59.89,
        longitude: 30.31,
        hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
        balloonContent: [
          '<div class="map__balloon">Mr. Burgers №2</div>'
        ]
    },
    {
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
        balloonContent: [
          '<div class="map__balloon">Mr. Burgers №3</div>'
        ]
    },
    {
        latitude: 59.95,
        longitude: 30.38,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: [
          '<div class="map__balloon">Mr. Burgers №4</div>'
        ]
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: '../img/svg/maps/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/burger.png',
                size: [100, 100],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}

