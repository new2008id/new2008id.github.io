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
  
    menu.addEventListener('click', function(e) {
      target = e.target;
      if(target.classList.contains('nav__link')) {
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
