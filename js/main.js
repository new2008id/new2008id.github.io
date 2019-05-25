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

    let link = document.getElementById('link');

    link.addEventListener('click', _toggleMenu);
    buttonClose.addEventListener('click', _toggleMenu);
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

// /* Dropdown */

// let composition = (function (optionsOne) {
//   let linkOpen = document.querySelector(optionsOne.linkOpen);
//   let linkClose = document.querySelector(optionsOne.linkClose);
//   let composition = document.querySelector(optionsOne.composition);

//   let _toggleComposition = function (e) {
//     e.preventDefault();
//     composition.classList.toggle('composition__active');
//   }

//   let addListenersTwo = function () {
//     linkOpen.addEventListener('click', _toggleComposition);

//     let linkTwo = document.getElementById('linkTwo');

//     linkTwo.addEventListener('click', _toggleComposition);
//     linkClose.addEventListener('click', _toggleComposition);
//   }

//   return {
//     openDropdown: addListenersTwo
//   };
// })
//   ({
//     linkOpen: '#linkTwo',
//     composition: '#composition__open'
//   });

// composition.openDropdown();