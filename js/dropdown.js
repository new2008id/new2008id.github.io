/* Dropdown */

let composition = (function (optionsOne) {
  let linkOpen = document.querySelector(optionsOne.linkOpen);
  let linkClose = document.querySelector(optionsOne.linkClose);
  let composition = document.querySelector(optionsOne.composition);

  let _toggleComposition = function (e) {
    e.preventDefault();
    composition.classList.toggle('composition__active');
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
    composition: '#composition__open'
  });

composition.openDropdown();