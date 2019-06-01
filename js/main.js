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

let composition = (function (optionsOne) {
  let linkOpen = document.querySelector(optionsOne.linkOpen);
  let linkClose = document.querySelector(optionsOne.linkClose);
  let ingredients = document.querySelector(optionsOne.ingredients);

  let _toggleComposition = function (e) {
    e.preventDefault();
    ingredients.classList.toggle('composition__active');
  }

  let addListenersTwo = function () {
    linkOpen.addEventListener('mouseenter', _toggleComposition);

    if (linkTwo) {
      let linkTwo = document.getElementById('linkTwo');

      linkTwo.addEventListener('mouseleave', _toggleComposition);

      if (linkClose) {
        linkClose.addEventListener('mouseleave', _toggleComposition);
      }
    }

  }

  return {
    openDropdown: addListenersTwo
  };
})
  ({
    linkOpen: '#linkTwo',
    ingredients: '#composition__open'
  });

composition.openDropdown();



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



const slide = (function () {
  const left = document.querySelector('.slider__button-prev');
  const right = document.querySelector('.slider__button-next');
  const slider = document.querySelector('.slider__list');
  const computed = getComputedStyle(slider);
  let sliderWidth = parseInt(computed.width);
  let last, first;

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

      if (currentRight < (sliderItemsCounter - 1) * sliderWidth && direction === right) {
        slider.style.right = currentRight + sliderWidth + 'px';
       
        
      }

      if (currentRight > 0 && direction === left) {
        slider.style.right = currentRight - sliderWidth + 'px';
        
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










